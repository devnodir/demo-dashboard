import { FormRule } from "antd";
import { isValidNumber } from "libphonenumber-js";

export const VREQUIRED: FormRule = {
    required: true,
    message: "Please fill this field",
};

export const VPHONE: FormRule = {
    message: "Phone number is incorrect",
    validator: (_, val) =>
        isValidNumber(`+${val}`) ? Promise.resolve() : Promise.reject(),
};

export const VPASSWORD: FormRule = {
    min: 8,
    message: "Enter at least 8 characters",
};
