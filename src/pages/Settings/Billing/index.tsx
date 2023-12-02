import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import useToggleState from "@/hooks/useToggleState";
import { colors } from "@/utils/theme";
import { PlusOutlined } from "@ant-design/icons";
import { Flex, Select } from "antd";
import React from 'react';

const Billing: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)


	const columns = [
		{
			title: 'ID',
			dataIndex: 'id',
		},
		{
			title: 'Amount',
			dataIndex: 'amount',
		},
		{
			title: 'Payment method',
			dataIndex: 'method',
		},
		{
			title: 'Date',
			dataIndex: 'date',
		},
	];

	const data = [
		{
			key: "1",
			id: "317923",
			amount: "200,000",
			method: "Payme",
			date: "20.02.2023",
		},
		{
			key: "2",
			id: "317923",
			amount: "200,000",
			method: "Payme",
			date: "20.02.2023",
		},
		{
			key: "3",
			id: "317923",
			amount: "200,000",
			method: "Payme",
			date: "20.02.2023",
		},
		{
			key: "4",
			id: "317923",
			amount: "200,000",
			method: "Payme",
			date: "20.02.2023",
		},
	]

	return (
		<div>
			<Flex className="my-2" gap={12} justify="end">
				<Select
					style={{ minWidth: 200 }}
					options={[
						{ label: "100,000 UZS", value: "1" },
						{ label: "200,000 UZS", value: "2" },
						{ label: "300,000 UZS", value: "3" }
					]}
				/>
				<MyButton
					onClick={toggle}
					color={colors.success}
					type="primary"
					className="text-uppercase float-right"
					style={{ minWidth: 150 }}
				>
					TO PAY
				</MyButton>
			</Flex>
			<MyTable
				columns={columns}
				dataSource={data}
				rowSelection={{ type: "checkbox" }}
			/>
		</div>
	);
};

export default Billing;
