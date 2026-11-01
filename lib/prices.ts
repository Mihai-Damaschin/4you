import type { Locale } from "@/lib/i18n";

// The price grid on /evacuator and on the RU/EN home page; row labels are in the dictionaries (prices.rows).
// TODO: the client's prices, written out per language (e.g. "de la 250 lei" / "от 250 лей" / "from 250 MDL").
// A row shows once it has a price; the whole block stays hidden while every row is empty.
export const PRICES: Record<"city" | "suburbs" | "perKm" | "night" | "holidays", Record<Locale, string>> = {
  city: { ro: "", ru: "", en: "" },
  suburbs: { ro: "", ru: "", en: "" },
  perKm: { ro: "", ru: "", en: "" },
  night: { ro: "", ru: "", en: "" },
  holidays: { ro: "", ru: "", en: "" },
};
