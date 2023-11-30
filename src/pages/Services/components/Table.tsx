import MyTable from "@/components/antd/MyTable";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import { Tag } from "antd";
import React from 'react';

const ServicesTable: React.FC = () => {



	const columns = [
		{
			title: 'Service name',
			dataIndex: 'name',
		},
		{
			title: 'Price',
			dataIndex: 'price',
		},
		{
			title: 'Parent',
			dataIndex: 'parent',
		},
		{
			title: 'Branches',
			dataIndex: 'branch',
		},
		{
			title: 'Status',
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

	const data = [
		{
			name: "Health care",
			price: "2,000,000 UZS",
			parent: "-",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "1"
		},
		{
			name: "Health care",
			price: "2,000,000 UZS",
			parent: "-",
			branch: "Yakkasaroy filiali",
			status: "inactive",
			key: "2"
		},
		{
			name: "Health care",
			price: "2,000,000 UZS",
			parent: "-",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "3"
		},
		{
			name: "Health care",
			price: "2,000,000 UZS",
			parent: "-",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "4"
		},
		{
			name: "Health care",
			price: "2,000,000 UZS",
			parent: "-",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "5"
		},
	]

	return (
		<MyTable
			columns={columns}
			dataSource={data}
			rowSelection={{ type: "checkbox" }}
		/>
	);
};

export default ServicesTable;
