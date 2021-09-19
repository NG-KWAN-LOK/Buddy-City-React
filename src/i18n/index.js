import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

if (localStorage.getItem("language") === null) {
  console.log("hi");
  localStorage.setItem("language", "zh-tw");
}

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "zh-tw",
    lng: localStorage.getItem("language"),
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;
