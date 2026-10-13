"use client";

import { useEffect } from "react";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("Page rendering failed", error.digest ?? error.name);
  }, [error]);

  return (
    <main className="error-page" id="main">
      <p className="eyebrow">A small detour</p>
      <h1>Something went wrong.</h1>
      <p>Please try again. If the problem continues, contact us directly.</p>
      <button className="button button--purple" onClick={() => reset()} type="button">Try again</button>
    </main>
  );
}
