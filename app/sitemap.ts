import type { MetadataRoute } from "next";
import { LOCALES, languageAlternates, localePath } from "@/lib/i18n";
import { LANDING_SLUGS } from "@/lib/landing";
import { PRIVACY_SLUG } from "@/lib/privacy";
import { SITE_URL } from "@/lib/site";

const abs = (path: string) => new URL(path, SITE_URL).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [undefined, ...LANDING_SLUGS, PRIVACY_SLUG].flatMap((slug) =>
    LOCALES.map((l) => ({
      url: abs(localePath(l, slug)),
      lastModified,
      changeFrequency: slug === PRIVACY_SLUG ? ("yearly" as const) : ("monthly" as const),
      priority: slug === PRIVACY_SLUG ? 0.3 : slug ? 0.8 : l === "ro" ? 1 : 0.9,
      alternates: { languages: languageAlternates(slug, abs) },
      ...(slug ? {} : { images: [abs("/images/hero-night.jpg")] }),
    })),
  );
}
