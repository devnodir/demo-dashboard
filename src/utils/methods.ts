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
