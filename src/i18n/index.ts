import fr from "./fr";
import en from "./en";

export type Lang = "fr" | "en";

const translations = { fr, en };

export function useTranslations(lang: Lang) {
  return translations[lang];
}

export function getAlternateLang(lang: Lang): Lang {
  return lang === "fr" ? "en" : "fr";
}

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split("/");
  if (first === "en") return "en";
  return "fr";
}