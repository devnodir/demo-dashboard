import { RouteObject } from "react-router-dom";
import { getLocalStorage } from "./localStorage";
import { redirectTo } from "@/routes/generator";

export const isDevelopment = () => {
    return process.env.NODE_ENV === "development";
};

export const isEmtypObj = (obj: any) => {
    return obj.constructor === Object && Object.keys(obj).length === 0;
};

export const toCapitalize = (str: string) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};

export const mapTableData = (data: any[]) => {
    if (data) {
        return data?.map((item) => {
            return {
                key: item._id,
                ...item,
            };
        });
    }
    return [];
};

export const mapSelectData = (data: any, key: string = "data") => {
    if (data) {
        return data[key]?.map((item: any) => {
            return {
                ...item,
                value: item._id,
                label: item.name,
            };
        });
    }
    return [];
};

export const downloadByUrl = (filename: string, url: string) => {
    const aElement = document.createElement("a");
    aElement.setAttribute("download", filename);
    aElement.href = url;
    aElement.setAttribute("target", "_blank");
    aElement.click();
    URL.revokeObjectURL(url);
};

export const humanFileSize = (bytes: number, dp = 1) => {
    const thresh = 1024;

    if (Math.abs(bytes) < thresh) {
        return bytes + " B";
    }

    const units = ["kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    let u = -1;
    const r = 10 ** dp;

    do {
        bytes /= thresh;
        ++u;
    } while (
        Math.round(Math.abs(bytes) * r) / r >= thresh &&
        u < units.length - 1
    );

    return bytes.toFixed(dp) + " " + units[u];
};

export const filterAllowedMenus = (routes: RouteObject[], menus: any[]) => {
    const excludedRoutes = [
        "/404",
        "/login",
        "/",
        "*",
        "/patients/cabinet/:id",
        "/doctors/cabinet/:id",
    ];

    return routes
        .filter((item) => {
            // @ts-ignore
            if (excludedRoutes.includes(item.path)) return true;
            const userType = getLocalStorage("userType");
            if (userType === "doctor") return item?.path === "/appointments";

            const menu = menus.find((el) => el.url === item.path);
            if (!menu) return false;
            return menu.roles[0].isAllowed;
        })
        .map((item) => {
            const userType = getLocalStorage("userType");
            if (userType === "doctor" && item.path === "/") {
                return {
                    ...item,
                    element: redirectTo("/appointments", true),
                };
            }
            return item;
        });
};
