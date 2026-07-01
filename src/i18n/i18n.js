import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locale/en.json";
import fa from "./locale/fa.json";
import pa from "./locale/pa.json";
import fr from "./locale/fr.json";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: en,
    },
    fa: {
      translation: fa,
    },
    pa: {
      translation: pa,
    },
    fr: {
      translation: fr,
    },
  },
});

export default i18n;
