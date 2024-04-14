import { create } from "zustand";
import { IMode } from "@/types/helper.type";
import { getInitMode } from "@/utils/theme";
import { getLocalStorage } from "@/utils/localStorage";
import { USER_TOKEN } from "@/components/variables";

interface Store {
    isAuth: boolean;
    userData: any;
    mode: IMode;
    allowedMenus: any[];
    isMobileMenu: boolean;
    currentCompany: any;
    setUserData: (userData: any) => void;
    setMode: (mode: IMode) => void;
    setIsAuth: (isAuth: boolean) => void;
    setMobileMenu: (isOpen: boolean) => void;
    setAllowedMenus: (allowedMenus: any[]) => void;
    setCurrentCompany: (currentCompany: any) => void;
}

const useMainStore = create<Store>((set) => ({
    isAuth: Boolean(getLocalStorage(USER_TOKEN)),
    userData: null,
    mode: getInitMode(),
    isMobileMenu: false,
    allowedMenus: [],
    currentCompany: null,
    setUserData: (userData) => set({ userData }),
    setMode: (mode) => set({ mode }),
    setIsAuth: (isAuth) => set({ isAuth }),
    setMobileMenu: (isMobileMenu) => set({ isMobileMenu }),
    setAllowedMenus: (allowedMenus) => set({ allowedMenus }),
    setCurrentCompany: (currentCompany) => set({ currentCompany }),
}));

export default useMainStore;
