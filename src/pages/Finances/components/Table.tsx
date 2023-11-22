import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import useFakeLoader from "@/hooks/useFakeLoader";
import { ArrowRightOutlined, CalculatorOutlined, EyeFilled } from "@ant-design/icons";
import { Button, Flex, Tag, Timeline } from "antd";
import React from 'react';
import { FaArrowRight, FaCalculator, FaEye, FaMoneyBill, FaUserDoctor } from "react-icons/fa6";

const FinanceTable: React.FC = () => {

	const loading = useFakeLoader()


	const columns = [
		{
			title: 'Номер счета',
			dataIndex: 'number',
		},
		{
			title: 'Пациент',
			dataIndex: 'patient',
		},
		{
			title: 'Услуга',
			dataIndex: 'service',
			render: () => (
				<Timeline
					items={[
						{
							children: 'Консультация терапевта',
							dot: <FaArrowRight />
						},
						{
							children: 'Консультация эндокринолога',
							dot: <FaArrowRight />
						},
						{
							children: 'Узи',
							dot: <FaArrowRight />
						},
						{
							children: 'Итого',
							dot: <FaCalculator />
						},
					]}
				/>
			)
		},
		{
			title: 'Врач',
			dataIndex: 'doctor',
			render: () => (
				<Timeline
					items={[
						{
							children: 'Гасымов. С. Щ.',
							dot: <FaUserDoctor />
						},
						{
							children: 'Гасымов. С. Щ.',
							dot: <FaUserDoctor />
						},
						{
							children: 'Гасымов. С. Щ.',
							dot: <FaUserDoctor />
						},

					]}
				/>
			)
		},
		{
			title: 'Стоимость',
			dataIndex: 'amount',
			render: () => (
				<Timeline
					items={[
						{
							children: '750 000',
							dot: <FaMoneyBill />
						},
						{
							children: '750 000',
							dot: <FaMoneyBill />
						},
						{
							children: '750 000',
							dot: <FaMoneyBill />
						},
						{
							children: <b>225 000</b>,
							dot: <FaCalculator />
						},

					]}
				/>
			)
		},
		{
			title: 'Дата',
			dataIndex: 'data',
		},
		{
			title: 'Время',
			dataIndex: 'time',
		},
		{
			title: 'Статус',
			dataIndex: 'status',
			render: (val: any) => (<Tag {...val} />)
		},
		{
			title: 'Действия',
			dataIndex: 'action',
			render: () => (
				<Flex gap={4}>
					<MyButton size="small" type="text" color="green"><EyeFilled />Просмотр</MyButton>
					<MyButton size="small" danger>Отменить</MyButton>
				</Flex>
			),
		},
	];

	const data = [
		{
			number: "#1234523456789",
			patient: "Алексей Доманов",
			service: "",
			doctor: "",
			amount: "",
			data: "03.06.2023",
			time: "12:00",
			status: { children: "Часть оплачена", color: "orange" },
		},
		{
			number: "#1234523456789",
			patient: "Алексей Доманов",
			service: "",
			doctor: "",
			amount: "",
			data: "03.06.2023",
			time: "12:00",
			status: { children: "Не оплачено", color: "red" },
		}
	]

	return (
		<MyTable
			scroll={{ x: "max-content" }}
			// style={{ width: Number(document.getElementById("app-pages")?.clientWidth) - 48 }}
			columns={columns}
			dataSource={data}
			loading={loading}
		/>
	);
};

export default FinanceTable;
