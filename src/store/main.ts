import { create } from "zustand";
import { IMode } from "@/types/helper.type";
import { getInitMode } from "@/utils/theme";
import { getLocalStorage } from "@/utils/localStorage";
import { USER_TOKEN } from "@/components/variables";

interface Store {
    isAuth: boolean;
    userData: any;
    mode: IMode;
    isMobileMenu: boolean;
    setUserData: (userData: any) => void;
    setMode: (mode: IMode) => void;
    setIsAuth: (isAuth: boolean) => void;
    setMobileMenu: (isOpen: boolean) => void;
}

const useMainStore = create<Store>((set) => ({
    isAuth: Boolean(getLocalStorage(USER_TOKEN)),
    userData: null,
    mode: getInitMode(),
    isMobileMenu: false,
    setUserData: (userData) => set({ userData }),
    setMode: (mode) => set({ mode }),
    setIsAuth: (isAuth) => set({ isAuth }),
    setMobileMenu: (isMobileMenu) => set({ isMobileMenu }),
}));

export default useMainStore;
