import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  resources: {
    en: {
      translation: {
        "home.hero.totle": "hello there, good morning",
        "home.hero.description":
          "Today is a beautiful day, We are going to learn about something amazing in react.js",
      },
    },
    fa: {
      translation: {
        "home.hero.totle": "سلام صبح زیبای تان بخیر",
        "home.hero.description":
          "امروز روز زیبایی است و ما قرار است در ریکت یک چیز شگفت انگیز را یاد بگیریم",
      },
    },
    pa: {
      translation: {
        "home.hero.totle": "سلام سهار مو پخیر",
        "home.hero.description":
          "نن یوه ښکلې ورځ ده، موږ به په react.js کې د یو څه حیرانونکي شی په اړه زده کړه وکړو.",
      },
    },
    fr: {
      translation: {
        "home.hero.totle": "bonjour, bonne matinée",
        "home.hero.description":
          "Aujourd'hui est une belle journée, nous allons apprendre quelque chose d'incroyable dans react.js",
      },
    },
  },
});
