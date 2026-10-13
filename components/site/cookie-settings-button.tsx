"use client";

export function CookieSettingsButton() {
  return (
    <button
      className="text-link-button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
      type="button"
    >
      Cookie settings
    </button>
  );
}
