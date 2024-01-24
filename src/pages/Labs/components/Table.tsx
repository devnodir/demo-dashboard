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

const LabsTable: React.FC = () => {

	const t = useT()

	const [query, setQuery] = useQueryParams(INIT_PAGE_PARAMS)

	const { data, refetch, isLoading, isRefetching } = useApi(SERVICES, {}, query)

	const { records, pagination } = useTableData("services", data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", SERVICES)


	const columns = [
		{
			title: t("service_name"),
			dataIndex: 'name',
		},
		{
			title: t("price"),
			dataIndex: 'price',
		},
		{
			title: t("parent_service"),
			dataIndex: 'parent',
		},
		{
			title: t("branches"),
			dataIndex: 'branch',
		},
		{
			title: t("status"),
			dataIndex: 'status',
			render: (text: string) => (
				<Tag color={text === "active" ? "green" : "red"} className="text-capitalize">{text}</Tag>
			)
		},
		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <ActionButtons
				onDelete={() => { }}
				onUpdate={() => { }}
				onMessage={() => { }}
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

export default LabsTable;
