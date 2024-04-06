import MyTable from "@/components/antd/MyTable";
import { USERS } from "@/components/endpoints";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import TableAdditionalContact from "@/components/shared/TableComponents/TableAdditionalContact";
import TableDate from "@/components/shared/TableComponents/TableDate";
import TableIsActive from "@/components/shared/TableComponents/TableIsActive";
import TablePhone from "@/components/shared/TableComponents/TablePhone";
import { INIT_PAGE_PARAMS } from "@/components/variables";
import useApi from "@/hooks/useApi";
import useApiMutationID from "@/hooks/useApiMutationID";
import { useQueryParams } from "@/hooks/useQueryParams";
import useT from "@/hooks/useT";
import useTableData from "@/hooks/useTableData";
import { ISetState } from "@/types/helper.type";
import { TableProps, message } from "antd";
import React from 'react';

interface Props {
	setId: ISetState<string | null>,
	tableProps: TableProps<any>
}

const UsersTable: React.FC<Props> = ({ setId, tableProps }) => {

	const t = useT()

	const [query, setQuery] = useQueryParams(INIT_PAGE_PARAMS)

	const { data, refetch, isLoading, isRefetching } = useApi(USERS, {}, query)

	const { records, pagination } = useTableData(data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", USERS)

	const columns = [
		{
			title: t("full_name"),
			dataIndex: 'name',
		},
		{
			title: t("l_phone"),
			dataIndex: 'phone_number',
			render: TablePhone
		},
		{
			title: t("role"),
			dataIndex: 'role_name',
		},
		{
			title: t("birthday"),
			dataIndex: 'birthday',
			render: TableDate
		},
		{
			title: t("addtional_contact"),
			dataIndex: 'additional_contact',
			render: TableAdditionalContact
		},
		{
			title: t("status"),
			dataIndex: 'is_active',
			render: TableIsActive
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id: string, record: any) => <ActionButtons
				onDelete={() => deleteItem(id)}
				onUpdate={() => setId(id)}
				allowMessage
				users={[{
					name: record.name,
					phone: record.phone_number
				}]}
			/>,
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
			{...tableProps}
		/>
	);
};

export default UsersTable;
