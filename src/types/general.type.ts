import { Control, FieldValues, Path, RegisterOptions } from "react-hook-form";
import { IChildren } from "./helper.type";

export interface ILayout {
    title?: string;
    children: IChildren;
}

export interface IFormInput<T extends FieldValues> {
    control: Control<T>;
    rules?: RegisterOptions<T>;
    label?: string;
    name: Path<T>;
}
