import useMainStore from "@/store/main";
import { useEffect } from "react";

const useObserveMode = () => {
    const { mode } = useMainStore();
    useEffect(() => {
        localStorage.setItem("theme", mode);
        document.body.className = mode;
    }, [mode]);
};

export default useObserveMode;
