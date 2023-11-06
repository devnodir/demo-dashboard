/* eslint-disable @typescript-eslint/ban-ts-comment */
export const PHONE_VALIDATE = {
    minLength: { message: "Telefon raqam xato", value: 9 },
    maxLength: { message: "Telefon raqam xato", value: 9 },
};

export const PASSWORD_VALIDATE = {
    minLength: { message: "Kamida 8 ta belgi kiriting", value: 8 },
};

const validators = {
    PHONE_VALIDATE: PHONE_VALIDATE,
    PASSWORD_VALIDATE: PASSWORD_VALIDATE,
};

export const selectValidator = (type: string) => {
    // @ts-ignore
    return validators[type];
};
