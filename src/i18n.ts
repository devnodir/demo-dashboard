import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import ru from "@/locales/ru.json";
import en from "@/locales/en.json";
import uz from "@/locales/uz.json";
import { getLocalStorage } from "./utils/localStorage";

export const resources = {
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
    .use(initReactI18next)
    .init({
        debug: true,
        interpolation: {
            escapeValue: false,
        },
        resources,
        lng: getLocalStorage("lang") || "ru",
    });

export default i18n;
