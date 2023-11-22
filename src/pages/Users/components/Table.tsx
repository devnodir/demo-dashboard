import MyButton from "@/components/antd/MyButton";
import Button from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import useFakeLoader from "@/hooks/useFakeLoader";
import { getToken } from "@/utils/theme";
import { Popover, Tag } from "antd";
import React from 'react';
import { FaPenToSquare, FaTrash, FaPaperPlane } from "react-icons/fa6";

const UsersTable: React.FC = () => {

	const loading = useFakeLoader()


	const columns = [
		{
			title: 'Image',
			dataIndex: 'image',
			render: (val: any) => (
				<img src={val} alt="" style={{ height: 40, width: 40, borderRadius: "50%" }} />
			)
		},
		{
			title: 'Full name',
			dataIndex: 'name',
		},
		{
			title: 'Phone Number',
			dataIndex: 'phone',
		},
		{
			title: 'Role',
			dataIndex: 'role',
		},
		{
			title: 'Additional numbers',
			dataIndex: 'addtional_phones',
			render: () => <Popover trigger={["click"]} title={<>
				<p>+998 (99) 008-27-35</p>
				<p>+998 (99) 008-27-35</p>
			</>}>
				<MyButton type="text" shape="circle" icon={<>...</>} className="ml-4" />
			</Popover>
		},
		{
			title: 'Branches',
			dataIndex: 'branch',
		},
		{
			title: 'Birthday',
			dataIndex: 'birthday',
		},
		{
			title: 'Status',
			dataIndex: 'status',
			render: (text: string) => (
				<Tag color={text === "active" ? "green" : "red"} className="text-capitalize">{text}</Tag>
			)
		},
		{
			title: 'Actions',
			dataIndex: 'actions',
			key: 'actions',
			render: () => (
				<div style={{ fontSize: 20 }}>
					<Button color="red" shape="circle" type="text" icon={<FaPaperPlane color={getToken().blue5} />}></Button>
					<Button shape="circle" type="text" icon={<FaPenToSquare color={getToken().colorPrimary} />}></Button>
					<Button shape="circle" type="text" color="red" icon={<FaTrash color={getToken().red5} />}></Button>
				</div>
			)
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
			loading={loading}
			rowSelection={{ type: "checkbox" }}
		/>
	);
};

export default UsersTable;
