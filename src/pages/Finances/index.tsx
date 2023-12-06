import MyButton from '@/components/antd/MyButton'
import Box from '@/styles/Box'
import { DownloadOutlined } from '@ant-design/icons'
import { Col, DatePicker, Drawer, Flex, Row, Select, Typography } from 'antd'
import React from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import FinanceTable from './components/Table'
import CountUp from "react-countup"
import Style from './Style'
import { colors } from '@/utils/theme'
import { FaFilter } from 'react-icons/fa6'
import useToggleState from '@/hooks/useToggleState'

const Finances: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)

	return (
		<Style className='finances' id="finances">
			<Row gutter={[{ xs: 12, sm: 12, md: 24 }, { xs: 12, sm: 12, md: 24 }]}>
				<Col md={8} span={10}>
					<Box>
						<Typography.Text>Кол-во записей</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={762} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
				<Col md={8} span={14}>
					<Box>
						<Typography.Text>Общая сумма</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={99000340} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
				<Col md={8} span={24}>
					<Box>
						<Typography.Text>Оплаченные</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={80000345} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
			</Row>
			<Flex justify="space-between" className='mt-4 mb-lg-4 mb-2'>
				<Flex gap={8} className='d-none d-lg-flex'>
					<Select showSearch placeholder="Фильтр пациентов" style={{ minWidth: 200 }} />
					<DatePicker.RangePicker style={{ maxWidth: 300 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<Select showSearch placeholder="Статус оплаты" />
					<Select showSearch placeholder="Выбрать врача" />
					<Select showSearch placeholder="Способ оплаты" />
				</Flex>
				<MyButton color={colors.primary} className='d-lg-none' icon={<FaFilter />} onClick={toggle}>Фильтр</MyButton>
				<Flex gap={8} className=''>
					<MyButton color={colors.success} icon={<DownloadOutlined />}>
						{window.innerWidth > 576 && <span className='d-none'>Скачать Excel</span>}
					</MyButton>
					<MyButton type="primary">Создать счет</MyButton>
				</Flex>
			</Flex>
			<FinanceTable />
			<Drawer
				open={isOpen}
				title="Фильтр"
				onClose={toggle}
			>
				<Flex vertical gap={12}>
					<Select showSearch placeholder="Фильтр пациентов" style={{ minWidth: 200 }} />
					<DatePicker.RangePicker style={{ maxWidth: window.innerWidth > 576 ? 300 : "100%" }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<Select showSearch placeholder="Статус оплаты" />
					<Select showSearch placeholder="Выбрать врача" />
					<Select showSearch placeholder="Способ оплаты" />
					<MyButton type="primary" color={colors.success} className='mt-4'>SUBMIT</MyButton>
				</Flex>
			</Drawer>
		</Style>
	)
}

export default Finances