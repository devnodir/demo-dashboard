import { formatIncompletePhoneNumber } from "libphonenumber-js";

export const phoneFormatter = (val?: string | number) => {
    if (!val) return "";
    val = `${val}`;
    return formatIncompletePhoneNumber(val.startsWith("+") ? val : `+${val}`);
};
