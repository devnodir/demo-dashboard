import { useState, useLayoutEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { IQueryParams, ISetState } from "@/types/helper.type";
import qs from "qs";
import _ from "lodash";

export const useQueryParams = (initParams?: IQueryParams) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [queryState, setQueryState] = useState<IQueryParams | undefined>(
        intialState()
    );

    function getParams() {
        return qs.parse(searchParams.toString()) as IQueryParams;
    }

    function intialState() {
        const params = getParams();
        if (_.isEmpty(params)) return initParams;
        return params;
    }

    useLayoutEffect(() => {
        if (_.isEmpty(getParams())) setParams(initParams, true);
    }, []);

    const setParams = (params?: IQueryParams, replace: boolean = false) => {
        if (_.isEqual(searchParams, params)) return;
        if (!replace) setQueryState(params);
        const stringified = qs.stringify(params);
        setSearchParams(stringified, { replace });
    };

    return [queryState, setParams] as [IQueryParams, ISetState<IQueryParams>];
};
