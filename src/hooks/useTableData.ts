import { IQueryParams, ISetState } from "@/types/helper.type";
import { mapTableData } from "@/utils/methods";

const useTableData: any = (
    data: any,
    query: IQueryParams,
    setQuery: ISetState<IQueryParams>
) => {
    const records = data ? mapTableData(data?.data) : [];
    if (data?.pagination)
        return {
            records,
            pagination: {
                showSizeChanger: true,
                pageSize: Number(query.limit),
                current: Number(query.page),
                total: data?.pagination.total || 1,
                onChange: (page: number, limit: number) =>
                    setQuery({ page, limit }),
            },
        };
    else return { records };
};
export default useTableData;
