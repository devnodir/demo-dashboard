import { isEmtypObj } from "@/utils/methods";
import shallowEqual from "@/utils/shallowEqual";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const useQueryString = (inital: any = {}) => {
    const location = useLocation();
    const history = useNavigate();
    const { search } = location;
    const qsObj = Object.fromEntries(new URLSearchParams(search));

    const [value, setValue] = useState<any>(isEmtypObj(qsObj) ? inital : qsObj);
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            const qs = qsObj;
            if (!shallowEqual(qs, value)) {
                setValue(qs);
            }
        } else {
            if (isEmtypObj(qsObj)) updateUrl(inital);
            setInit(true);
        }
    }, [search]);

    function updateUrl(params: any) {
        history({
            pathname: location.pathname,
            search: new URLSearchParams({ ...value, ...params }).toString(),
        });
    }

    return {
        value,
        set: updateUrl,
    };
};

export default useQueryString;
