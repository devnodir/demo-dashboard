import MyTable from "@/components/antd/MyTable";
import { SERVICES } from "@/components/endpoints";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import { INIT_PAGE_PARAMS } from "@/components/variables";
import useApi from "@/hooks/useApi";
import useApiMutationID from "@/hooks/useApiMutationID";
import { useQueryParams } from "@/hooks/useQueryParams";
import useT from "@/hooks/useT";
import useTableData from "@/hooks/useTableData";
import { Tag } from "antd";
import React from 'react';

const WarehouseTable: React.FC = () => {

	const t = useT()

	const [query, setQuery] = useQueryParams(INIT_PAGE_PARAMS)

	const { data, refetch, isLoading, isRefetching } = useApi(SERVICES, {}, query)

	const { records, pagination } = useTableData(data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", SERVICES)


	const columns = [
		{
			title: t("name_product"),
			dataIndex: 'name',
		},
		{
			title: t("price"),
			dataIndex: 'price',
		},
		{
			title: t("category"),
			dataIndex: 'category',
		},
		{
			title: t("service"),
			dataIndex: 'service',
		},
		{
			title: t("quantity"),
			dataIndex: 'quantity',
		},
		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <ActionButtons
				onDelete={() => { }}
				onUpdate={() => { }}
			/>
		},
	];




	return (
		<MyTable
			columns={columns}
			dataSource={[]}
			rowSelection={{ type: "checkbox" }}
		/>
	);
};

export default WarehouseTable;
