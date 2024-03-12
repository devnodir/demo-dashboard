import MyTable from "@/components/antd/MyTable";
import { INIT_PAGE_PARAMS } from "@/components/variables";
import useApi from "@/hooks/useApi";
import { useQueryParams } from "@/hooks/useQueryParams";
import useTableData from "@/hooks/useTableData";
import { ISetState } from "@/types/helper.type";
import React from 'react';

interface Props {
	setId: ISetState<string | null>
	useComlums: (endpoint: string, setId: ISetState<string | null>, ...props: any) => any
	endpoint: string
	noPagination?: boolean;
	[props: string]: any;
}

const TableStructure: React.FC<Props> = ({ setId, useComlums, endpoint, noPagination, ...props }) => {

	const [query, setQuery] = useQueryParams(noPagination ? {} : INIT_PAGE_PARAMS)

	const { data, isLoading, isRefetching } = useApi(endpoint, {}, query)

	const { records, pagination } = useTableData(data, query, setQuery)

	const { columns, isDeleting } = useComlums(endpoint, setId, ...[props])

	return (
		<MyTable
			columns={columns}
			dataSource={records}
			rowSelection={{ type: "checkbox" }}
			pagination={pagination}
			loading={isLoading || isRefetching || isDeleting}
		/>
	);
};

export default TableStructure;
