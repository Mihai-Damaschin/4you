import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { AREAS } from "./areas";
import { SERVICES } from "./services";

export type LandingKind = "area" | "service";

// What the landing template renders, whichever kind of page it is.
export type Landing = {
  slug: string;
  kind: LandingKind;
  photo: number;
  name: string;
  title: string;
  description: string;
  h1: string;
  accent: string;
  lead: string;
  sections: { heading: string; text: string }[];
  faq: { q: string; a: string }[];
};

export const LANDING_SLUGS = [...SERVICES, ...AREAS].map((p) => p.slug);

export function serviceLinks(lang: Locale) {
  return SERVICES.map((s) => ({ slug: s.slug, name: s.copy[lang].name }));
}

export function areaLinks(lang: Locale) {
  return AREAS.map((a) => ({ slug: a.slug, name: a.copy[lang].name }));
}

export function getLanding(slug: string, lang: Locale, t: Dictionary): Landing | undefined {
  const service = SERVICES.find((s) => s.slug === slug);
  if (service) return { slug, kind: "service", photo: service.photo, ...service.copy[lang] };

  const area = AREAS.find((a) => a.slug === slug);
  if (!area) return undefined;
  const c = area.copy[lang];
  return {
    slug,
    kind: "area",
    photo: area.photo,
    name: c.name,
    title: t.area.title(c),
    description: t.area.description(c),
    h1: t.area.h1(c),
    accent: t.area.accent,
    lead: c.about,
    sections: [
      { heading: t.area.whatHeading(c), text: t.area.whatText },
      { heading: t.area.priceHeading, text: t.area.priceText },
      { heading: t.area.noteHeading, text: c.note },
    ],
    faq: t.area.faq(c),
  };
}
