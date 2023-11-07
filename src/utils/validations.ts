import { FieldValues, RegisterOptions } from "react-hook-form";

/* eslint-disable @typescript-eslint/ban-ts-comment */
export const PHONE_VALIDATE: RegisterOptions = {
    minLength: { message: "Telefon raqam xato", value: 9 },
    maxLength: { message: "Telefon raqam xato", value: 9 },
    required: true,
};

export const PASSWORD_VALIDATE: RegisterOptions = {
    minLength: { message: "Kamida 8 ta belgi kiriting", value: 8 },
    required: true,
};

export const formValidate = <T extends FieldValues>(
    validation: RegisterOptions<T>
) => {
    return { required: true, ...validation };
};
