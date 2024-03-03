import React from 'react';
import MyTable from '@/components/antd/MyTable';
import ActionButtons from '@/components/shared/TableComponents/ActionButtons';
import { FaFile } from 'react-icons/fa6';
import Style from './Style';
import useApi from '@/hooks/useApi';
import { FILES } from '@/components/endpoints';
import { downloadByUrl, humanFileSize, mapTableData } from '@/utils/methods';
import TableDate from '@/components/shared/TableComponents/TableDate';
import useApiMutationID from '@/hooks/useApiMutationID';
import { message } from 'antd';

const Files: React.FC = () => {

	const { data, isLoading, isRefetching, isFetching, refetch } = useApi(FILES)
	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", FILES)

	const records = mapTableData(data?.data)


	const columns = [
		{
			title: 'File name',
			dataIndex: 'name',
			render: (val: string) => <div className="d-flex align-items-center">
				<FaFile className="mr-2" />{val}
			</div>
		},
		{
			title: 'Size',
			dataIndex: 'size',
			render: (size: number) => humanFileSize(size)
		},
		{
			title: 'Created date',
			dataIndex: 'createdAt',
			render: TableDate
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id: string, record: any) => <ActionButtons
				onDownload={() => downloadByUrl(record.name, record.url)}
				onDelete={() => deleteItem(id)}
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
		<Style className='settings-files mt-4'>
			<MyTable
				columns={columns}
				dataSource={records}
				loading={isLoading || isRefetching || isFetching || isDeleting}
			/>
		</Style>
	)
}

export default Files