export const isDevelopment = () => {
    return process.env.NODE_ENV === "development";
};

export const isEmtypObj = (obj: any) => {
    return obj.constructor === Object && Object.keys(obj).length === 0;
};

export const toCapitalize = (str: string) => {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
};
