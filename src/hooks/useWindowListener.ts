import { useEffect } from "react";

const useWindowListener = (type: string, callback: (e: any) => void) => {
    useEffect(() => {
        window.addEventListener(type, callback);
        return () => {
            window.removeEventListener(type, callback);
        };
    }, []);
};

export default useWindowListener;
