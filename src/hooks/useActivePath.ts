import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const useActivePath = (items: any) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState<string[]>([]);

    useEffect(() => {
        const item = items.find((el: any) => pathname.startsWith(el.key))?.key;
        setActive([item, pathname]);
    }, [items, pathname]);

    return { active, setActive };
};

export default useActivePath;
