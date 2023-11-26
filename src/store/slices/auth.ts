import { IMode } from "@/types/helper.type";
import { isDevelopment } from "@/utils/methods";
import { getInitMode } from "@/utils/theme";
import { createSlice } from "@reduxjs/toolkit";

// interface of reducer
type State = {
    isAuth: boolean;
    userData: any;
    mode: IMode;
};

// initial values of reducer
const initialState: State = {
    isAuth: isDevelopment(),
    userData: null,
    mode: getInitMode(),
};

const AuthSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setIsAuth: (state: State, { payload }) => {
            state.isAuth = payload;
        },
        setUserData: (state: State, { payload }) => {
            state.userData = payload;
        },
        setMode: (state: State, { payload }) => {
            state.mode = payload;
        },
    },
});

export default AuthSlice;
