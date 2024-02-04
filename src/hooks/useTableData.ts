import { IQueryParams, ISetState } from "@/types/helper.type";
import { mapTableData } from "@/utils/methods";

const useTableData: any = (
    data: any,
    query: IQueryParams,
    setQuery: ISetState<IQueryParams>
) => {
    return {
        records: data ? mapTableData(data?.data) : [],
        pagination: {
            showSizeChanger: true,
            pageSize: Number(query.limit),
            current: Number(query.page),
            total: data?.pagination?.total || 1,
            onChange: (page: number, limit: number) =>
                setQuery({ page, limit }),
        },
    };
};
export default useTableData;
