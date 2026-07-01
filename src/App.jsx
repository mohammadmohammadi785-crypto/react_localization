import { useTheme } from "next-themes";
import React from "react";
import { useTranslation } from "react-i18next";
export default function App() {
  const { theme, setTheme } = useTheme();
  const { t, i18n } = useTranslation();
  function changeLangToPersian() {
    i18n.changeLanguage("fa");
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "fa";
  }
  function changeLangToPashto() {
    i18n.changeLanguage("pa");
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "pa";
  }
  function changeLangToEnglish() {
    i18n.changeLanguage("en");
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }
  function changeLangToFrench() {
    i18n.changeLanguage("fr");
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "fr";
  }
  return (
    <div className="w-full h-full bg-gray-50 dark:bg-gray-900">
      <nav className="w-full py-3 mx-auto px-3 flex border-b dark:border-b-red-500 border-b-green-700 justify-between items-center backdrop-blur-md">
        <h1>{t("home.hero.logo")}</h1>
        <div className="flex gap-2.5">
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={() => setTheme("light")}
          >
            {t("home.theme.light")}
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={() => setTheme("dark")}
          >
            {t("home.theme.dark")}
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={() => setTheme("system")}
          >
            {t("home.theme.system")}
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={changeLangToPersian}
          >
            {t("home.lang.fa")}
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={changeLangToPashto}
          >
            {t("home.lang.pa")}
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={changeLangToEnglish}
          >
            {t("home.lang.en")}
          </button>
          <button
            className="py-2 px-5 bg-green-700 dark:bg-red-600 text-white rounded-md"
            onClick={changeLangToFrench}
          >
            {t("home.lang.fr")}
          </button>
        </div>
      </nav>
      <div className="w-full flex  h-screen justify-center items-center">
        <div className="w-1/2 p-8 border border-green-600 dark:border-red-500 rounded-md">
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.description")}</p>
        </div>
      </div>
    </div>
  );
}
