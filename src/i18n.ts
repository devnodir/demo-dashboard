import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";
import uz from "@/locales/uz.json";

const resources = {
    uz: {
        translation: uz,
    },
    ru: {
        translation: ru,
    },
    en: {
        translation: en,
    },
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: "en",
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources,
    });

export default i18n;
