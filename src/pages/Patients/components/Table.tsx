import MyTable from "@/components/antd/MyTable";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import UserAvatar from "@/components/shared/TableComponents/UserAvatar";
import useT from "@/hooks/useT";
import { Tag } from 'antd';
import React from 'react';

const PatientsTable: React.FC = () => {

	const t = useT()

	const columns = [
		{
			title: t("image"),
			dataIndex: 'image',
			render: (val: any) => <UserAvatar img={val} />
		},
		{
			title: t("full_name"),
			dataIndex: 'name',
		},
		{
			title: t("l_phone"),
			dataIndex: 'phone',
		},
		{
			title: t("date"),
			dataIndex: 'date',
		},
		{
			title: t("address"),
			dataIndex: 'address',
		},
		{
			title: t("tags"),
			dataIndex: 'tags',
			render: (tags: any[]) => {
				return tags.map((tag) => (
					<Tag color={tag.color}>{tag.val}</Tag>
				))
			}
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
			image: "https://randomuser.me/api/portraits/men/1.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			tags: [{ val: "VIP", color: "green" }, { val: "10%", color: "red" }],
			address: "Yakkasaroy, Muqimiy 1/2",
			date: "01.03.2022",
			key: "1"
		},
		{
			image: "https://randomuser.me/api/portraits/men/2.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			tags: [{ val: "VIP", color: "green" }, { val: "10%", color: "red" }],
			address: "Yakkasaroy, Muqimiy 1/2",
			date: "01.03.2022",
			key: "2"
		},
		{
			image: "https://randomuser.me/api/portraits/men/3.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			tags: [{ val: "VIP", color: "green" }, { val: "10%", color: "red" }],
			address: "Yakkasaroy, Muqimiy 1/2",
			date: "01.03.2022",
			key: "3"
		},
		{
			image: "https://randomuser.me/api/portraits/men/4.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			tags: [{ val: "VIP", color: "green" }, { val: "10%", color: "red" }],
			address: "Yakkasaroy, Muqimiy 1/2",
			date: "01.03.2022",
			key: "4"
		},
		{
			image: "https://randomuser.me/api/portraits/men/5.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			tags: [{ val: "VIP", color: "green" }, { val: "10%", color: "red" }],
			address: "Yakkasaroy, Muqimiy 1/2",
			date: "01.03.2022",
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

export default PatientsTable;
