import Button from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import useFakeLoader from "@/hooks/useFakeLoader";
import { getToken } from "@/utils/theme";
import { Tag } from "antd";
import React from 'react';
import { FaPenToSquare, FaTrash, FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DoctorsTable: React.FC = () => {

	const loading = useFakeLoader()
	const navigate = useNavigate()


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
			title: 'Specialty',
			dataIndex: 'specialty',
		},
		{
			title: 'Working experience',
			dataIndex: 'experience',
		},
		{
			title: 'Working time',
			dataIndex: 'time',
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
				<div style={{ fontSize: 20 }} onClick={(e) => e.stopPropagation()}>
					<Button color="red" shape="circle" type="text" icon={<FaPaperPlane color={getToken().blue5} />}></Button>
					<Button shape="circle" type="text" icon={<FaPenToSquare color={getToken().colorPrimary} />}></Button>
					<Button shape="circle" type="text" color="red" icon={<FaTrash color={getToken().red5} />}></Button>
				</div>
			)
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
			loading={loading}
			rowSelection={{ type: "checkbox" }}
			onRow={(_, rowIndex) => {
				return {
					onClick: () => navigate(`/doctors/cabinet/${rowIndex}`)
				};
			}}
		/>
	);
};

export default DoctorsTable;
