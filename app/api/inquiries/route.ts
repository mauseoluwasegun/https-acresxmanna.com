import { NextResponse } from "next/server";

const allowedKinds = new Set(["contact", "supplier", "distributor", "business", "product"]);
const windowMs = 15 * 60 * 1000;
const requestLimit = 5;
const requestsByIp = new Map<string, number[]>();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const allowedFields: Record<string, ReadonlySet<string>> = {
  contact: new Set(["name", "email", "company", "type", "message"]),
  supplier: new Set(["name", "email", "business", "location", "commodities", "volumes", "phone", "message"]),
  distributor: new Set(["name", "email", "company", "location", "businessType", "products", "message"]),
  business: new Set(["name", "email", "company", "interest", "message"]),
  product: new Set(["name", "email", "company", "country", "product", "message"]),
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

type InquiryPayload = {
  kind?: unknown;
  fields?: unknown;
};

export async function GET() {
  return NextResponse.json(
    { enabled: process.env.INQUIRIES_ENABLED === "true" && Boolean(process.env.INQUIRIES_WEBHOOK_URL) },
    { headers: { "Cache-Control": "no-store" } },
  );
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 32_000) {
    return NextResponse.json({ error: "This message is too large. Please shorten it and try again." }, { status: 413 });
  }

  const webhookUrl = process.env.INQUIRIES_WEBHOOK_URL;
  if (process.env.INQUIRIES_ENABLED !== "true" || !webhookUrl) {
    return NextResponse.json(
      { error: "Form delivery is not enabled yet. Please email info@acresxmanna.com or call +234 804 700 0587." },
      { status: 503 },
    );
  }

  let payload: InquiryPayload;
  try {
    payload = await request.json() as InquiryPayload;
  } catch {
    return NextResponse.json({ error: "We couldn’t read that message. Please check the form and try again." }, { status: 400 });
  }

  if (typeof payload.kind !== "string" || !allowedKinds.has(payload.kind) || !isRecord(payload.fields)) {
    return NextResponse.json({ error: "Please check the form details and try again." }, { status: 400 });
  }

  const fields = payload.fields;
  if (typeof fields.website === "string" && fields.website.trim()) {
    return NextResponse.json({ error: "We couldn’t send that message. Please try again or email us directly." }, { status: 400 });
  }

  const cleanFields: Record<string, string> = {};
  for (const [key, value] of Object.entries(fields)) {
    if (key === "website") continue;
    if (!allowedFields[payload.kind].has(key)) {
      return NextResponse.json({ error: "Please check the form details and try again." }, { status: 400 });
    }
    if (typeof value !== "string" || value.length > 3000) {
      return NextResponse.json({ error: "One of those fields is too long. Please shorten it and try again." }, { status: 400 });
    }
    cleanFields[key] = value.trim();
  }

  if (!cleanFields.name || !cleanFields.message || !cleanFields.email || !emailPattern.test(cleanFields.email)) {
    return NextResponse.json({ error: "Please add your name, a valid email address and a message." }, { status: 400 });
  }

  const now = Date.now();
  const ip = request.headers.get("x-real-ip") ?? request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const recentRequests = (requestsByIp.get(ip) ?? []).filter((timestamp) => now - timestamp < windowMs);
  if (recentRequests.length >= requestLimit) {
    return NextResponse.json({ error: "Please wait a little before trying again." }, { status: 429 });
  }
  requestsByIp.set(ip, [...recentRequests, now]);
  if (requestsByIp.size > 1000) {
    for (const [key, timestamps] of requestsByIp) {
      if (!timestamps.some((timestamp) => now - timestamp < windowMs)) requestsByIp.delete(key);
    }
  }

  let destination: URL;
  try {
    destination = new URL(webhookUrl);
  } catch {
    console.error("Inquiry delivery is misconfigured: webhook URL is invalid");
    return NextResponse.json({ error: "Form delivery is temporarily unavailable. Please email us directly." }, { status: 503 });
  }
  if (destination.protocol !== "https:") {
    console.error("Inquiry delivery is misconfigured: HTTPS is required");
    return NextResponse.json({ error: "Form delivery is temporarily unavailable. Please email us directly." }, { status: 503 });
  }

  try {
    const delivery = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.INQUIRIES_WEBHOOK_TOKEN ? { Authorization: `Bearer ${process.env.INQUIRIES_WEBHOOK_TOKEN}` } : {}),
      },
      body: JSON.stringify({ kind: payload.kind, fields: cleanFields, receivedAt: new Date().toISOString() }),
      signal: AbortSignal.timeout(7000),
    });
    if (!delivery.ok) {
      console.error("Inquiry webhook rejected a submission", delivery.status);
      return NextResponse.json({ error: "Oops, that didn’t send. Please try again or email us directly." }, { status: 502 });
    }
  } catch (error) {
    console.error("Inquiry webhook delivery failed", error instanceof Error ? error.name : "UnknownError");
    return NextResponse.json({ error: "Oops, that didn’t send. Please try again or email us directly." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
