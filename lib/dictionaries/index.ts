import type { Locale } from "@/lib/i18n";
import en from "./en";
import ro, { type AreaNames, type Dictionary } from "./ro";
import ru from "./ru";

const DICTIONARIES: Record<Locale, Dictionary> = { ro, ru, en };

export const getDictionary = (locale: Locale) => DICTIONARIES[locale];
export type { AreaNames, Dictionary };
