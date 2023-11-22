import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useFakeLoader = () => {
    const { i18n } = useTranslation();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timeOut = setTimeout(() => setLoading(false), 100);
        return () => clearTimeout(timeOut);
    }, [i18n.language]);

    return loading;
};

export default useFakeLoader;
