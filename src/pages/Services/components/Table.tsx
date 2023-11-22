import MyButton from "@/components/antd/MyButton";
import Button from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import useFakeLoader from "@/hooks/useFakeLoader";
import { getToken } from "@/utils/theme";
import { Popover, Tag } from "antd";
import React from 'react';
import { FaPenToSquare, FaTrash, FaPaperPlane } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const ServicesTable: React.FC = () => {

	const loading = useFakeLoader()
	const navigate = useNavigate()


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

export default ServicesTable;
