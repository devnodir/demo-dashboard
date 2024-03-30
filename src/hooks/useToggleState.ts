import { useState } from "react";

export type Toggle = (e?: any) => void;

const useToggleState = (init: boolean) => {
    const [isOpen, setOpen] = useState(init);

    const toggle = (e: any) => {
        if (typeof e === "boolean") {
            setOpen(e);
        } else {
            setOpen(!isOpen);
        }
    };

    return [isOpen, toggle] as [boolean, Toggle];
};

export default useToggleState;
