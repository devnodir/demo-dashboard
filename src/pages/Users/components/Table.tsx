import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import UserAvatar from "@/components/shared/TableComponents/UserAvatar";
import useT from "@/hooks/useT";
import { Popover, Tag } from "antd";
import React from 'react';

const UsersTable: React.FC = () => {

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
			title: t("role"),
			dataIndex: 'role',
		},
		{
			title: t("addtional_phones"),
			dataIndex: 'addtional_phones',
			render: () => <Popover trigger={["click"]} title={<>
				<p>+998 (99) 008-27-35</p>
				<p>+998 (99) 008-27-35</p>
			</>}>
				<MyButton type="text" shape="circle" icon={<>...</>} className="ml-4" />
			</Popover>
		},
		{
			title: t("branch"),
			dataIndex: 'branch',
		},
		{
			title: t("birthday"),
			dataIndex: 'birthday',
		},
		{
			title: t("status"),
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
			/>,
		},
	];

	const data = [
		{
			image: "https://randomuser.me/api/portraits/men/11.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			role: "Admin",
			addtional_phones: "...",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "1"
		},
		{
			image: "https://randomuser.me/api/portraits/men/12.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			role: "Admin",
			addtional_phones: "...",
			branch: "Yakkasaroy filiali",
			status: "inactive",
			key: "2"
		},
		{
			image: "https://randomuser.me/api/portraits/men/13.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			role: "Admin",
			addtional_phones: "...",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "3"
		},
		{
			image: "https://randomuser.me/api/portraits/men/14.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			role: "Admin",
			addtional_phones: "...",
			branch: "Yakkasaroy filiali",
			status: "active",
			key: "4"
		},
		{
			image: "https://randomuser.me/api/portraits/men/15.jpg",
			name: "Nodirek Abdunazarov",
			phone: "+998 (99) 008-27-35",
			birthday: "01.03.2022",
			role: "Admin",
			addtional_phones: "...",
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

export default UsersTable;
