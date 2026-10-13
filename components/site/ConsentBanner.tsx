"use client";

import { useEffect, useState } from "react";

type Choice = "essential" | "all";
const storageKey = "acresxmanna-cookie-choice";

export function ConsentBanner() {
  const [choice, setChoice] = useState<Choice | null>(null);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const saved = document.cookie
      .split("; ")
      .find((cookie) => cookie.startsWith(`${storageKey}=`))
      ?.split("=")[1];
    if (saved === "essential" || saved === "all") setChoice(saved);
    const openSettings = () => setSettingsOpen(true);
    window.addEventListener("open-cookie-settings", openSettings);
    return () => window.removeEventListener("open-cookie-settings", openSettings);
  }, []);

  function save(value: Choice) {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `${storageKey}=${value}; Max-Age=31536000; Path=/; SameSite=Lax${secure}`;
    setChoice(value);
    setSettingsOpen(false);
  }

  if (choice && !settingsOpen) return null;

  return (
    <section className="consent" aria-label="Cookie preferences">
      <div className="consent__copy">
        <strong>{settingsOpen ? "Cookie settings" : "We use cookies."}</strong>
        <p>
          {settingsOpen
            ? "Essential storage remembers your choice. No analytics or advertising tools are connected in this preview."
            : "We use essential storage to remember your choice. Optional tracking is not active in this preview."}
        </p>
      </div>
      <div className="consent__actions">
        {!settingsOpen && <button className="button button--outline" onClick={() => setSettingsOpen(true)} type="button">Manage settings</button>}
        <button className="button button--outline" onClick={() => save("essential")} type="button">Essential only</button>
        <button className="button button--yellow" onClick={() => save("all")} type="button">Accept all</button>
      </div>
    </section>
  );
}
