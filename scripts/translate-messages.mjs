/**
 * Fills every missing message key in the non-English catalogs.
 *
 * English copy lives in messages/en.json plus the focused _en.*.json files and is
 * merged here the same way i18n/request.ts merges it. Only keys that are absent
 * from a locale file are translated; existing human copy is never overwritten.
 *
 * Run with: node scripts/translate-messages.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const messagesDir = path.join(root, "messages");
const LOCALES = ["ar", "de", "es", "fr", "it", "nl", "pt", "ru", "tw", "zh-CN"];
const ENDPOINT = "https://clients5.google.com/translate_a/t?client=dict-chrome-ex&sl=en";

// Proper nouns and product names that must survive translation untouched.
const BRANDS = [
  "AcresxManna",
  "HappyMan Foods",
  "HappyMan",
  "Maluza Foods Co.",
  "Maluza Foods",
  "Maluza",
  "UncleTobi",
  "IJGB Foods",
  "African Food King",
  "Panem Vitae",
  "SEG Group",
  "Ali Baba Foods Ltd",
  "Ades Cash and Carry",
  "Wosiwosi Cash and Carry",
  "Ofada",
  "Ayamase",
  "Jollof",
  "WhatsApp",
  "Instagram",
  "NAFDAC",
  "USFDA",
  "HACCP",
  "ISO 22000",
  "GSA",
  "ECOWAS",
  "AfCFTA",
  "ZLECAf",
].sort((a, b) => b.length - a.length);

const ENTITIES = {
  "&amp;": "&",
  "&#39;": "'",
  "&#x27;": "'",
  "&quot;": '"',
  "&lt;": "<",
  "&gt;": ">",
  "&nbsp;": " ",
};

function mergeDeep(target, source) {
  const output = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      output[key] = mergeDeep(target[key], source[key]);
    } else if (!(key in target)) {
      output[key] = source[key];
    }
  }
  return output;
}

function readJson(file) {
  return JSON.parse(fs.readFileSync(path.join(messagesDir, file), "utf8"));
}

function flatten(value, prefix = "", out = {}) {
  for (const key of Object.keys(value)) {
    const next = value[key];
    const full = prefix ? `${prefix}.${key}` : key;
    // Arrays are kept whole: next-intl serves them back to .map() callers.
    if (Array.isArray(next)) out[full] = next;
    else if (next && typeof next === "object") flatten(next, full, out);
    else out[full] = next;
  }
  return out;
}

function setPath(target, dotted, value) {
  const parts = dotted.split(".");
  let cursor = target;
  for (let i = 0; i < parts.length - 1; i += 1) {
    const part = parts[i];
    if (!cursor[part] || typeof cursor[part] !== "object") cursor[part] = {};
    cursor = cursor[part];
  }
  cursor[parts.at(-1)] = value;
}

const SKIP_KEY = /(^|\.)address$|^layout\.(streetAddress|addressLocality|addressRegion|addressCountry)$/;
const SKIP_VALUE = /^(?:https?:\/\/|mailto:|tel:)|^[\w.+-]+@[\w-]+\.[\w.]+$|^\+?[\d\s()+-]{6,}$/;

// `brandShowcase.items.*.status` is not copy — it is an enum token that the
// components feed straight into the `brandStatus` namespace as a lookup key
// (see components/sections/BrandsSection.tsx). Translating it produces
// MISSING_MESSAGE at runtime, so these values stay in English everywhere.
const ENUM_KEY = /\.status$/;
const ENUM_TOKENS = new Set(["active", "comingSoon", "live"]);

function shouldTranslate(key, value) {
  if (typeof value !== "string") return false;
  const text = value.trim();
  if (text.length < 2) return false;
  if (SKIP_KEY.test(key)) return false;
  if (SKIP_VALUE.test(text)) return false;
  if (ENUM_KEY.test(key) && ENUM_TOKENS.has(text)) return false;
  if (!/\p{L}/u.test(text)) return false;
  return true;
}

function protect(text, tokens) {
  let out = text;
  for (const brand of BRANDS) {
    if (!out.includes(brand)) continue;
    const token = `XQZV${tokens.length}XQZ`;
    tokens.push(brand);
    out = out.split(brand).join(token);
  }
  // Placeholders, rich-text tags, e-mails and URLs all need to survive verbatim.
  out = out.replace(/\{[^{}]+\}|<[^<>]+>|[\w.+-]+@[\w-]+\.[\w.]+|https?:\/\/\S+/g, (match) => {
    const token = `ZXPH${tokens.length}XZ`;
    tokens.push(match);
    return token;
  });
  return out;
}

function restore(text, tokens) {
  return text
    .replace(/XQZV\s*(\d+)\s*XQZ/gi, (_, index) => tokens[Number(index)] ?? "")
    .replace(/ZXPH\s*(\d+)\s*XZ/gi, (_, index) => tokens[Number(index)] ?? "");
}

function decodeEntities(text) {
  return text.replace(/&(?:amp|#39|#x27|quot|lt|gt|nbsp);/g, (entity) => ENTITIES[entity] ?? entity);
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function requestBatch(locale, batch) {
  const body = new URLSearchParams();
  for (const item of batch) body.append("q", item.source);

  for (let attempt = 1; attempt <= 5; attempt += 1) {
    try {
      const response = await fetch(`${ENDPOINT}&tl=${encodeURIComponent(locale)}`, {
        method: "POST",
        headers: { "content-type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: body.toString(),
        signal: AbortSignal.timeout(30_000),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const json = await response.json();
      if (!Array.isArray(json) || json.length !== batch.length) {
        throw new Error(`expected ${batch.length} results, got ${Array.isArray(json) ? json.length : typeof json}`);
      }
      return json.map((entry) => (Array.isArray(entry) ? entry.join("") : String(entry)));
    } catch (error) {
      if (attempt === 5) throw error;
      await sleep(600 * attempt);
    }
  }
  throw new Error("unreachable");
}

async function translateQueue(locale, queue) {
  const results = new Map();
  const BATCH_SIZE = 40;

  for (let start = 0; start < queue.length; start += BATCH_SIZE) {
    const slice = queue.slice(start, start + BATCH_SIZE);
    const batch = slice.map((entry) => {
      const tokens = [];
      return { entry, value: entry.value, tokens, source: protect(entry.value, tokens) };
    });

    const translated = await requestBatch(locale, batch);

    batch.forEach((item, index) => {
      let text = decodeEntities(translated[index]).trim();
      text = restore(text, item.tokens);
      // A translation that lost its content falls back to English rather than
      // dropping copy from the page.
      results.set(`${item.entry.key}\u0000${item.entry.index ?? ""}`, text || item.value);
    });

    const done = Math.min(start + BATCH_SIZE, queue.length);
    process.stdout.write(`\r  ${locale}: ${done}/${queue.length}`);
    await sleep(120);
  }

  process.stdout.write("\n");
  return results;
}

async function main() {
  const english = ["en.json", "_en.chrome.json", "_en.ui.json", "_en.pages-a.json", "_en.pages-b.json"]
    .map(readJson)
    .reduce((catalog, additions) => mergeDeep(catalog, additions), {});

  const englishLeaves = flatten(english);
  const englishKeys = Object.keys(englishLeaves);

  for (const locale of LOCALES) {
    const file = path.join(messagesDir, `${locale}.json`);
    const messages = JSON.parse(fs.readFileSync(file, "utf8"));
    const existing = flatten(messages);

    const queue = [];
    for (const key of englishKeys) {
      const englishValue = englishLeaves[key];
      const current = existing[key];
      if (Array.isArray(englishValue)) {
        const complete =
          Array.isArray(current) &&
          current.length === englishValue.length &&
          current.every((item) => typeof item === "string" && item.trim());
        if (complete) continue;
        englishValue.forEach((value, index) => {
          if (shouldTranslate(key, value)) queue.push({ key, index, value });
        });
      } else if ((typeof current !== "string" || !current.trim()) && shouldTranslate(key, englishValue)) {
        queue.push({ key, value: englishValue });
      }
    }

    console.log(`${locale}: ${queue.length} missing strings to translate`);

    if (queue.length > 0) {
      const results = await translateQueue(locale, queue);
      const arrays = new Map();
      for (const entry of queue) {
        const value = results.get(`${entry.key}\u0000${entry.index ?? ""}`);
        if (typeof entry.index === "number") {
          if (!arrays.has(entry.key)) arrays.set(entry.key, []);
          arrays.get(entry.key)[entry.index] = value;
        } else {
          setPath(messages, entry.key, value);
        }
      }
      for (const [key, values] of arrays) setPath(messages, key, values);
      fs.writeFileSync(file, `${JSON.stringify(messages, null, 2)}\n`, "utf8");
    }
  }
}

main().catch((error) => {
  console.error("\nTranslation failed:", error);
  process.exitCode = 1;
});
