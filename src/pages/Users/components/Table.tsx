import MyTable from "@/components/antd/MyTable";
import { USERS } from "@/components/endpoints";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import TableAdditionalContact from "@/components/shared/TableComponents/TableAdditionalContact";
import TableDate from "@/components/shared/TableComponents/TableDate";
import TableIsActive from "@/components/shared/TableComponents/TableIsActive";
import TableNameRecord from "@/components/shared/TableComponents/TableNameRecord";
import TablePhone from "@/components/shared/TableComponents/TablePhone";
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

const UsersTable: React.FC<Props> = ({ setId }) => {

	const t = useT()

	const [query, setQuery] = useQueryParams(INIT_PAGE_PARAMS)

	const { data, refetch, isLoading, isRefetching } = useApi(USERS, {}, query)

	const { records, pagination } = useTableData("users", data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", USERS)

	const columns = [
		// {
		// 	title: t("image"),
		// 	dataIndex: 'image',
		// 	render: (val: any) => <UserAvatar img={val} />
		// },
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
			dataIndex: 'role',
			render: TableNameRecord
		},
		{
			title: t("branch"),
			dataIndex: 'branch',
			render: TableNameRecord
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
			render: (id: string) => <ActionButtons
				onDelete={() => deleteItem(id)}
				onUpdate={() => setId(id)}
				onMessage={() => { }}
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
		/>
	);
};

export default UsersTable;
