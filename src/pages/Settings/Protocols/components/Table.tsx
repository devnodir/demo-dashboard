import MyTable from '@/components/antd/MyTable';
import { PROTOCOLS } from '@/components/endpoints';
import ActionButtons from '@/components/shared/TableComponents/ActionButtons';
import useApi from '@/hooks/useApi';
import useApiMutationID from '@/hooks/useApiMutationID';
import useTableData from '@/hooks/useTableData';
import { IQueryParams, ISetState } from '@/types/helper.type';
import { message } from 'antd';
import React from 'react'

interface Props {
	query: IQueryParams,
	setQuery: ISetState<IQueryParams>,
	setId: ISetState<string | null>
}

const ProtocolsTable: React.FC<Props> = ({ query, setQuery, setId }) => {

	const { data, isLoading, isRefetching, refetch } = useApi(PROTOCOLS, {}, query)

	const { records, pagination } = useTableData(data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", PROTOCOLS)


	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
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
	)
}

export default ProtocolsTable