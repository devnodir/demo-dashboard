import MyTable from '@/components/antd/MyTable';
import ActionButtons from '@/components/shared/TableComponents/ActionButtons';
import React from 'react'

const ProtocolsTable = () => {

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Service',
			dataIndex: 'service',
		},
		{
			title: 'Create at',
			dataIndex: 'create_at',
		},
		{
			title: 'Create by',
			dataIndex: 'create_by',
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

	const data = [
		{
			key: "1",
			name: "Main form",
			service: "Health care",
			create_at: "02.09.2023",
			create_by: "Nodirbek Abdunazarov"
		},
		{
			key: "1",
			name: "Main form",
			service: "Health care",
			create_at: "02.09.2023",
			create_by: "Nodirbek Abdunazarov"
		},
		{
			key: "1",
			name: "Main form",
			service: "Health care",
			create_at: "02.09.2023",
			create_by: "Nodirbek Abdunazarov"
		},
		{
			key: "1",
			name: "Main form",
			service: "Health care",
			create_at: "02.09.2023",
			create_by: "Nodirbek Abdunazarov"
		},
		{
			key: "1",
			name: "Main form",
			service: "Health care",
			create_at: "02.09.2023",
			create_by: "Nodirbek Abdunazarov"
		},
	]

	return (
		<MyTable
			columns={columns}
			dataSource={data}
			rowSelection={{ type: "checkbox" }}
		/>
	)
}

export default ProtocolsTable