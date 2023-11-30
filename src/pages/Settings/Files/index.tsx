import React from 'react';
import MyTable from '@/components/antd/MyTable';
import ActionButtons from '@/components/shared/TableComponents/ActionButtons';
import { FaFilePdf } from 'react-icons/fa6';
import Style from './Style';

const Files: React.FC = () => {

	const columns = [
		{
			title: 'File name',
			dataIndex: 'name',
			render: (val: string) => <div className="d-flex align-items-center">
				<FaFilePdf className="mr-2" />{val}
			</div>
		},
		{
			title: 'Size',
			dataIndex: 'size',
		},
		{
			title: 'Created date',
			dataIndex: 'date',
		},
		{
			title: 'Created by',
			dataIndex: 'user',
		},
		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <ActionButtons
				onDelete={() => { }}
			/>
		},
	];

	const data = [
		{
			key: "1",
			name: "Health care - doctors.pdf",
			date: "09.11.2023",
			user: "Nodirbek Abdunazarov",
			size: "12.3mb",
		},
		{
			key: "1",
			name: "Health care - doctors.pdf",
			date: "09.11.2023",
			user: "Nodirbek Abdunazarov",
			size: "12.3mb",
		},
		{
			key: "1",
			name: "Health care - doctors.pdf",
			date: "09.11.2023",
			user: "Nodirbek Abdunazarov",
			size: "12.3mb",
		},
		{
			key: "1",
			name: "Health care - doctors.pdf",
			date: "09.11.2023",
			user: "Nodirbek Abdunazarov",
			size: "12.3mb",
		},
		{
			key: "1",
			name: "Health care - doctors.pdf",
			date: "09.11.2023",
			user: "Nodirbek Abdunazarov",
			size: "12.3mb",
		},
	]

	return (
		<Style className='settings-files mt-4'>
			<MyTable
				columns={columns}
				dataSource={data}
				rowSelection={{ type: "checkbox" }}
			/>
		</Style>
	)
}

export default Files