import MyTable from "@/components/antd/MyTable";
import { SERVICES } from "@/components/endpoints";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import TableDate from "@/components/shared/TableComponents/TableDate";
import { INIT_PAGE_PARAMS } from "@/components/variables";
import useApi from "@/hooks/useApi";
import useApiMutationID from "@/hooks/useApiMutationID";
import { useQueryParams } from "@/hooks/useQueryParams";
import useT from "@/hooks/useT";
import useTableData from "@/hooks/useTableData";
import { ISetState } from "@/types/helper.type";
import { message } from "antd";
import React from 'react';

interface Props {
	setId: ISetState<string | null>
}

const ServicesTable: React.FC<Props> = ({ setId }) => {

	const t = useT()

	const [query, setQuery] = useQueryParams(INIT_PAGE_PARAMS)

	const { data, refetch, isLoading, isRefetching } = useApi(SERVICES, {}, query)

	const { records, pagination } = useTableData(data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", SERVICES)


	const columns = [
		{
			title: t("service_name"),
			dataIndex: 'name',
		},
		{
			title: t("price"),
			dataIndex: 'price',
			render: (price: any) => new Intl.NumberFormat().format(price)
		},
		{
			title: t("currency"),
			dataIndex: 'currency',
			render: (currency: string) => currency.toUpperCase()
		},
		{
			title: t("date"),
			dataIndex: 'createdAt',
			render: TableDate
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id: string) => <ActionButtons
				onDelete={() => deleteItem(id)}
				onUpdate={() => setId(id)}
			/>
		},
	];

	const deleteItem = (id: string) => {
		mutate({ id }, {
			onSuccess: () => refetch(),
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}

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

export default ServicesTable;
