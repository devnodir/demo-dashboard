import { IQueryParams, ISetState } from "@/types/helper.type";
import { mapTableData } from "@/utils/methods";

const useTableData: any = (
    key: string,
    data: any,
    query: IQueryParams,
    setQuery: ISetState<IQueryParams>
) => {
    return {
        records: data ? mapTableData(data?.[key]) : [],
        pagination: {
            showSizeChanger: true,
            pageSize: Number(query.limit),
            current: Number(query.page),
            onChange: (page: number, limit: number) =>
                setQuery({ page, limit }),
        },
    };
};
export default useTableData;
