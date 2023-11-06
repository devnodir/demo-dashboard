import { ThemeConfig, theme as antTheme } from "antd";

export const theme: ThemeConfig = {
    token: {
        colorBgLayout: "#ffffff",
        colorBorder: "#e6e6e6",
        borderRadius: 6,
    },
    components: {
        Button: {
            controlHeight: 36,
            fontSize: 16,
        },
        Input: {
            controlHeight: 36,
            fontSize: 16,
        },
    },
};

export const getToken = () => antTheme.getDesignToken(theme);
