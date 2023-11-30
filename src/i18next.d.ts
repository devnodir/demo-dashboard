import { resources } from "./i18n";

export declare module "i18next" {
    interface CustomTypeOptions {
        resources: (typeof resources)["en"];
    }
}
