import { IMode } from "@/types/helper.type";
import { ThemeConfig, theme as antTheme } from "antd";
import { convertHex } from "./convertor";

export const baseColors = {
    primary: "#4c6fff",
    secondary: "#05bad1",
    success: "#52c41a",
    red: "#cf1322",
    blue: "#0958d9",
};

export const colors = {
    light: {
        body: "#fcfcfc",
        text: "#2d3748",
        border: "#e6e6e6",
        layout: "#ffffff",
        container: "#ffffff",
        border_secondary: "#fefefe",
        ...baseColors,
    },
    dark: {
        body: "#1b2531",
        text: "#fefefe",
        border: "#475672",
        layout: "#1b2531",
        container: "#283142",
        border_secondary: "#344057",
        ...baseColors,
    },
    ...baseColors,
};

export enum config {
    boxChartHeigh = 150,
}

export const themeCompontens: ThemeConfig["components"] = {
    Checkbox: {
        controlInteractiveSize: 20,
    },
    Button: {
        controlHeight: 40,
    },
    Input: {
        controlHeight: 40,
    },
    InputNumber: {
        controlHeight: 40,
    },
    DatePicker: {
        controlHeight: 40,
    },
    Select: {
        controlHeight: 40,
    },
};

export const themeToken = (mode: IMode): ThemeConfig["token"] => {
    return {
        colorPrimary: colors.primary,
        colorSuccess: colors.secondary,
        colorBorder: colors[mode].border,
        colorBgLayout: colors[mode].layout,
        colorText: colors[mode].text,
        colorBgContainer: colors[mode].container,
        colorBorderSecondary: colors[mode].border_secondary,
        colorBgElevated: colors[mode].container,
        colorBgBase: colors[mode].container,
        colorPrimaryBg: convertHex(colors.primary, 0.1),
        colorTextPlaceholder: convertHex(colors[mode].text, 0.6),
        borderRadius: 10,
    };
};

export const getToken = (mode: IMode = "light") => {
    return antTheme.getDesignToken({ token: themeToken(mode) });
};

export const styledToken = (props: any) => {
    return getToken(props.theme.mode);
};

export const styledColor = (props: any) => {
    return colors[props.theme.mode as IMode];
};

export const getInitMode = (): IMode => {
    const initTheme = localStorage.getItem("theme") as any;
    if (["dark", "light"].includes(initTheme)) {
        return initTheme;
    }
    return "dark";
};
