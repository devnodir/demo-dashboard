import { Table as AntTable, Space, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import EmptyData from "@/assets/lottie/empty-table.json"
import Lottie from 'lottie-react';

interface DataType {
	key: string;
	name: string;
	age: number;
	address: string;
	tags: string[];
}



const columns: ColumnsType<DataType> = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <a>{text}</a>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'Tags',
		key: 'tags',
		dataIndex: 'tags',
		render: (tags: string[]) => (
			<span>
				{tags.map((tag) => {
					let color = tag.length > 5 ? 'geekblue' : 'green';
					if (tag === 'loser') {
						color = 'volcano';
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		),
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<a>Invite {record.name}</a>
				<a>Delete</a>
			</Space>
		),
	},
];

const Table: React.FC = () => {

	return (
		<AntTable columns={columns} pagination={{ position: ["bottomRight"] }} dataSource={[]} locale={{
			emptyText: <div className='empty'>
				<Lottie className='empty-anim' animationData={EmptyData} loop />
				<span className='empty-text'>No data</span>
			</div>
		}} />
	);
};

export default Table;
