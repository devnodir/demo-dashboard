import { useEffect } from "react";
import useAppSelector from "./useAppSelector";

const useObserveMode = () => {
    const mode = useAppSelector((state) => state.auth.mode);
    useEffect(() => {
        localStorage.setItem("theme", mode);
        document.body.className = mode;
    }, [mode]);
};

export default useObserveMode;
