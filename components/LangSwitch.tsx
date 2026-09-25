import { LOCALES, localePath, type Locale } from "@/lib/i18n";

export default function LangSwitch({ current, label, slug }: { current: Locale; label: string; slug?: string }) {
  return (
    <nav className="lang" aria-label={label}>
      {LOCALES.map((l) => (
        <a
          key={l}
          href={localePath(l, slug)}
          hrefLang={l}
          lang={l}
          aria-current={l === current ? "page" : undefined}
        >
          {l.toUpperCase()}
        </a>
      ))}
    </nav>
  );
}
