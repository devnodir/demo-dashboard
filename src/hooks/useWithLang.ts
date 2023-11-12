import { useTranslation } from "react-i18next";

const useWithLang = (payload: any) => {
    const { t } = useTranslation();
    return payload(t);
};

export default useWithLang;
