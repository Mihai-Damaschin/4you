export const LOCALES = ["ro", "ru", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "ro";

export const hasLocale = (value: string): value is Locale => (LOCALES as readonly string[]).includes(value);

// Romanian lives at the bare domain; next.config rewrites "/" and "/<slug>" to "/ro/..." and redirects "/ro/..." back.
export const localePath = (locale: Locale, slug?: string) => {
  const prefix = locale === DEFAULT_LOCALE ? "" : `/${locale}`;
  return slug ? `${prefix}/${slug}` : prefix || "/";
};

export const OG_LOCALE: Record<Locale, string> = { ro: "ro_MD", ru: "ru_MD", en: "en_US" };

// hreflang map for <link rel="alternate"> and the sitemap.
export const languageAlternates = (slug?: string, toUrl: (path: string) => string = (p) => p) => ({
  ...Object.fromEntries(LOCALES.map((l) => [l, toUrl(localePath(l, slug))])),
  "x-default": toUrl(localePath(DEFAULT_LOCALE, slug)),
});
