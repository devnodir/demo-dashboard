import { create } from "zustand";
import { IMode } from "@/types/helper.type";
import { isDevelopment } from "@/utils/methods";
import { getInitMode } from "@/utils/theme";

interface Store {
    isAuth: boolean;
    userData: any;
    mode: IMode;
    setUserData: (userData: any) => void;
    setMode: (mode: IMode) => void;
    setIsAuth: (isAuth: boolean) => void;
}

const useMainStore = create<Store>((set) => ({
    isAuth: isDevelopment(),
    userData: null,
    mode: getInitMode(),
    setUserData: (userData) => set({ userData }),
    setMode: (mode) => set({ mode }),
    setIsAuth: (isAuth) => set({ isAuth }),
}));

export default useMainStore;
