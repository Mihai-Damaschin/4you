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
  // The fact strip under the H1 and the four key points below the hero.
  facts: string[];
  services: Dictionary["services"];
  // Shows the price grid (lib/prices.ts).
  prices: boolean;
  sections: { heading: string; text: string; areas?: boolean }[];
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
  if (service) {
    const extras = { prices: !!service.prices, facts: t.facts, services: t.services };
    return { slug, kind: "service", photo: service.photo, ...extras, ...service.copy[lang] };
  }

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
    prices: false,
    facts: town ? t.town.facts(town.km) : t.facts,
    services: town ? [t.town.arrival(town.km), ...t.services.slice(1)] : t.services,
    sections: [
      { heading: tpl.whatHeading(c), text: tpl.whatText },
      ...(c.local ? [{ heading: tpl.localHeading(c), text: c.local }] : []),
      { heading: tpl.priceHeading, text: tpl.priceText },
      { heading: tpl.noteHeading, text: c.note },
    ],
    faq: town ? t.town.faq(c) : t.area.faq(c, area.sector),
  };
}
