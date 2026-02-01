import type { I18nStrings } from "./types";
import ENLocale from "./locales/en";
import ESLocale from "./locales/es";
import FRLocale from "./locales/fr";
import DELocale from "./locales/de";
import PTLocale from "./locales/pt";

export type LocaleProfile = {
  name: string;
  messages: I18nStrings;
  langTag: string;
  direction: "rtl" | "ltr" | "auto";
  googleFontName: string;
  default?: boolean;
};

export type LocaleKey = keyof typeof localeToProfile;

export const localeToProfile = {
  // locale key must be in lowercase
  en: {
    name: "English",
    messages: ENLocale,
    langTag: "en-US",
    direction: "ltr",
    googleFontName: "Inter",
    default: true,
  },
  es: {
    name: "Español",
    messages: ESLocale,
    langTag: "es-ES",
    direction: "ltr",
    googleFontName: "Inter",
  },
  fr: {
    name: "Français",
    messages: FRLocale,
    langTag: "fr-FR",
    direction: "ltr",
    googleFontName: "Inter",
  },
  de: {
    name: "Deutsch",
    messages: DELocale,
    langTag: "de-DE",
    direction: "ltr",
    googleFontName: "Inter",
  },
  pt: {
    name: "Português",
    messages: PTLocale,
    langTag: "pt-PT",
    direction: "ltr",
    googleFontName: "Inter",
  },
} satisfies Record<string, LocaleProfile>;

export const SUPPORTED_LOCALES = Object.keys(localeToProfile) as LocaleKey[];

export const DEFAULT_LOCALE =
  SUPPORTED_LOCALES.find(
    key => (localeToProfile[key] as LocaleProfile)?.default === true
  ) ?? SUPPORTED_LOCALES[0];

export const LOCALES_TO_LANG = Object.fromEntries(
  // For Sitemap
  Object.entries(localeToProfile).map(([locale, profile]) => [
    locale,
    profile.langTag,
  ])
) as Record<keyof typeof localeToProfile, string>;
