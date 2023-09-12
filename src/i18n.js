import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./assets/translations/en.json";
import mal from "./assets/translations/mal.json";
import arb from "./assets/translations/arb.json";

const resources = {
  en: {
    translation: en,
  },
  mal: {
    translation: mal,
  },
  arb: {
    translation: arb,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    detection: {
      order: ["cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["cookie"],
    },
    // interpolation: {
    //     escapeValue: false,
    // },
  });

export default i18n;
