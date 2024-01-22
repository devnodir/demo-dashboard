import { FormRule } from "antd";
import { isValidNumber } from "libphonenumber-js";

export const R_REQUIRED: FormRule = {
    required: true,
    message: "Please fill this field",
};

export const R_PHONE: FormRule = {
    message: "Phone number is incorrect",
    validator: (_, val) =>
        !val || isValidNumber(`+${val}`) ? Promise.resolve() : Promise.reject(),
};

export const R_PASSWORD: FormRule = {
    min: 6,
    message: "Enter at least 6 characters",
};

export const R_EMAIL: FormRule = {
    pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
    message: "Incorrect email",
};
