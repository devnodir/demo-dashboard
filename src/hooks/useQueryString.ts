import shallowEqual from "@/utils/shallowEqual";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQueryString = () => {
    const location = useLocation();
    const history = useNavigate();
    const { search } = location;
    const [value, setValue] = React.useState<any>({});

    React.useEffect(() => {
        const qs = Object.fromEntries(new URLSearchParams(search));
        if (!shallowEqual(qs, value)) {
            setValue(qs);
        }
    }, [search]);

    return {
        value,
        set: (params: any) =>
            history({
                pathname: location.pathname,
                search: new URLSearchParams({ ...value, ...params }).toString(),
            }),
    };
};

export default useQueryString;
