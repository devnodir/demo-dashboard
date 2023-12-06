import { setLocalStorage } from "@/utils/localStorage";
import { useTranslation } from "react-i18next";

const useDetectLang = () => {
    const { i18n } = useTranslation();

    i18n.on("languageChanged", (lang) => {
        setLocalStorage("lang", lang);
    });
};

export default useDetectLang;
