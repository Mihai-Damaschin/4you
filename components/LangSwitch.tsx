"use client";

import { useState } from "react";

const LANGS = ["RO", "RU", "EN"] as const;

// Visual-only for now: the design has no RU/EN copy yet.
export default function LangSwitch() {
  const [lang, setLang] = useState<(typeof LANGS)[number]>("RO");

  return (
    <div className="lang" role="group" aria-label="Limba">
      {LANGS.map((k) => (
        <button key={k} type="button" aria-pressed={k === lang} onClick={() => setLang(k)}>
          {k}
        </button>
      ))}
    </div>
  );
}
