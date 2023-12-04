import MyTable from "@/components/antd/MyTable";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import UserAvatar from "@/components/shared/TableComponents/UserAvatar";
import useT from "@/hooks/useT";
import { Tag } from "antd";
import React from 'react';
import { Link } from "react-router-dom";

const DoctorsTable: React.FC = () => {

	const t = useT()

	const columns = [
		{
			title: t('image'),
			dataIndex: 'image',
			render: (val: any) => <UserAvatar img={val} />
		},
		{
			title: t('full_name'),
			dataIndex: 'name',
			render: (name: string, order: any) => <Link to={`/doctors/cabinet/${order.id}`} className="py-3">
				{name}
			</Link>
		},
		{
			title: t('l_phone'),
			dataIndex: 'phone',
		},
		{
			title: t('specialty'),
			dataIndex: 'specialty',
		},
		{
			title: t('working_experience'),
			dataIndex: 'experience',
		},
		{
			title: t('working_time'),
			dataIndex: 'time',
		},
		{
			title: t('birthday'),
			dataIndex: 'birthday',
		},
		{
			title: t('status'),
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
			image: "https://randomuser.me/api/portraits/men/6.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			specialty: "Physical therapy",
			experience: "10 years",
			time: "08:00 - 20:00",
			status: "active",
			key: "1"
		},
		{
			image: "https://randomuser.me/api/portraits/men/7.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			specialty: "Physical therapy",
			experience: "10 years",
			time: "08:00 - 20:00",
			status: "inactive",
			key: "2"
		},
		{
			image: "https://randomuser.me/api/portraits/men/8.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			specialty: "Physical therapy",
			experience: "10 years",
			time: "08:00 - 20:00",
			status: "active",
			key: "3"
		},
		{
			image: "https://randomuser.me/api/portraits/men/9.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			specialty: "Physical therapy",
			experience: "10 years",
			time: "08:00 - 20:00",
			status: "active",
			key: "4"
		},
		{
			image: "https://randomuser.me/api/portraits/men/10.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			specialty: "Physical therapy",
			experience: "10 years",
			time: "08:00 - 20:00",
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

export default DoctorsTable;
