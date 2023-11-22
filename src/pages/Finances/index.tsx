import MyButton from '@/components/antd/MyButton'
import Box from '@/styles/Box'
import { DownloadOutlined } from '@ant-design/icons'
import { Col, DatePicker, Flex, Row, Select, Typography } from 'antd'
import React from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import FinanceTable from './components/Table'
import CountUp from "react-countup"
import Style from './Style'

const Finances: React.FC = () => {
	return (
		<Style className='finances' id="finances">
			<Row gutter={[24, 24]}>
				<Col lg={8}>
					<Box>
						<Typography.Text>Кол-во записей</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={762} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
				<Col lg={8}>
					<Box>
						<Typography.Text>Общая сумма</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={99000340} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
				<Col lg={8}>
					<Box>
						<Typography.Text>Оплаченные</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={80000345} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
			</Row>
			<Flex justify="space-between" className='my-4'>
				<Flex gap={8}>
					<Select showSearch placeholder="Фильтр пациентов" style={{ minWidth: 200 }} />
					<DatePicker.RangePicker style={{ minWidth: 300 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<Select showSearch placeholder="Статус оплаты" />
					<Select showSearch placeholder="Выбрать врача" />
					<Select showSearch placeholder="Способ оплаты" />
				</Flex>
				<Flex gap={8}>
					<MyButton type="text" color="green" icon={<DownloadOutlined />}>Скачать Excel</MyButton>
					<MyButton type="primary">Создать счет</MyButton>
				</Flex>
			</Flex>
			<FinanceTable />
		</Style>
	)
}

export default Finances