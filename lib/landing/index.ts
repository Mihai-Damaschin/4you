import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { AREAS } from "./areas";
import { SERVICES } from "./services";
import { TOWNS } from "./towns";

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

export const LANDING_SLUGS = [...SERVICES, ...AREAS, ...TOWNS].map((p) => p.slug);

export function serviceLinks(lang: Locale) {
  return SERVICES.map((s) => ({ slug: s.slug, name: s.copy[lang].name }));
}

export function areaLinks(lang: Locale) {
  return AREAS.map((a) => ({ slug: a.slug, name: a.copy[lang].name }));
}

export function townLinks(lang: Locale) {
  return TOWNS.map((a) => ({ slug: a.slug, name: a.copy[lang].name }));
}

export function getLanding(slug: string, lang: Locale, t: Dictionary): Landing | undefined {
  const service = SERVICES.find((s) => s.slug === slug);
  if (service) return { slug, kind: "service", photo: service.photo, ...service.copy[lang] };

  const town = TOWNS.find((a) => a.slug === slug);
  const area = town ?? AREAS.find((a) => a.slug === slug);
  if (!area) return undefined;
  const c = area.copy[lang];
  // Towns further out get their own copy: no fixed price or arrival time.
  const tpl = town ? t.town : t.area;
  return {
    slug,
    kind: "area",
    photo: area.photo,
    name: c.name,
    title: tpl.title(c),
    description: tpl.description(c),
    h1: tpl.h1(c),
    accent: tpl.accent,
    lead: c.about,
    sections: [
      { heading: tpl.whatHeading(c), text: tpl.whatText },
      { heading: tpl.priceHeading, text: tpl.priceText },
      { heading: tpl.noteHeading, text: c.note },
    ],
    faq: town ? t.town.faq(c) : t.area.faq(c, area.sector),
  };
}
