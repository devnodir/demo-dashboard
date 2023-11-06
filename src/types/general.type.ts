import { IChildren } from "./helper.type";

export type ILayout = {
    title?: string;
    children: IChildren;
};

export type IFormElement = "text-field" | "select";
