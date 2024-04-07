import i18n from "@/i18n";

export const USER_TOKEN = "token";
export const USER_ID = "user_id";

export const INIT_PAGE_PARAMS = { page: "1", limit: "20" };

export const STATUS = [
    { label: i18n.t("active"), value: true },
    { label: i18n.t("inactive"), value: false },
];
export const CATEGORY_PAYMENT = [
    { label: i18n.t("withdraw"), value: "withdraw" },
    { label: i18n.t("expense"), value: "expense" },
];

export const STATUS_PATIENT = [
    { label: i18n.t("patient"), value: "patient" },
    { label: i18n.t("lead"), value: "lead" },
];

export const STATUS_DONE = [
    { label: i18n.t("yes"), value: true },
    { label: i18n.t("no"), value: false },
];
export const STATUS_PRIORITY = [
    { label: i18n.t("low"), value: "low" },
    { label: i18n.t("medium"), value: "medium" },
    { label: i18n.t("high"), value: "high" },
    { label: i18n.t("extreme"), value: "extreme" },
];

export const CURRENCIES = [
    { label: "UZS", value: "uzs" },
    // { label: "USD", value: "usd" },
    // { label: "RUB", value: "rub" },
];
