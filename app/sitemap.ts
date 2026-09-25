import type { MetadataRoute } from "next";
import { LOCALES, languageAlternates, localePath } from "@/lib/i18n";
import { LANDING_SLUGS } from "@/lib/landing";
import { SITE_URL } from "@/lib/site";

const abs = (path: string) => new URL(path, SITE_URL).href;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [undefined, ...LANDING_SLUGS].flatMap((slug) =>
    LOCALES.map((l) => ({
      url: abs(localePath(l, slug)),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: slug ? 0.8 : l === "ro" ? 1 : 0.9,
      alternates: { languages: languageAlternates(slug, abs) },
      ...(slug ? {} : { images: [abs("/images/hero-night.jpg")] }),
    })),
  );
}
