import Button from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import { getToken } from "@/utils/theme";
import { Tag } from 'antd';
import React from 'react';
import { FaPenToSquare, FaTrash, FaPaperPlane } from "react-icons/fa6";

const PatientsTable: React.FC = () => {


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
			title: 'Date',
			dataIndex: 'date',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
		{
			title: 'Tags',
			dataIndex: 'tags',
			render: (tags: any[]) => {
				return tags.map((tag) => (
					<Tag color={tag.color}>{tag.val}</Tag>
				))
			}
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
