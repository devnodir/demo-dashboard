import { formatIncompletePhoneNumber } from "libphonenumber-js";

export const phoneFormatter = (val?: string | number) => {
    return val ? formatIncompletePhoneNumber(`+${val}`) : "";
};
