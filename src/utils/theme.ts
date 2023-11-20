import { ThemeConfig, theme as antTheme } from "antd";

export enum colors {
    primary = "#4c6fff",
    secondary = "#05bad1",
    border = "#e6e6e6",
    layout = "#ffffff",
    text = "#2d3748",
    success = "#52c41a",
    red = "#cf1322",
    blue = "#0958d9",
}

export enum config {
    boxChartHeigh = 150,
}

export const theme: ThemeConfig = {
    token: {
        colorPrimary: colors.primary,
        colorBorder: colors.border,
        colorBgLayout: colors.layout,
        colorText: colors.text,
        colorSuccess: colors.secondary,
        borderRadius: 10,
        controlHeight: 40,
        // fontFamily: "Montserrat Alternates,sans-serif",
    },
    components: {
        Checkbox: {
            controlInteractiveSize: 20,
        },
    },
};

export const getToken = () => antTheme.getDesignToken(theme);
