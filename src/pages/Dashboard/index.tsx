import Box from '@/styles/Box'
import { Col, DatePicker, Row } from 'antd'
import React from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import Style from './Style'
import ClinicWorkload from './components/ClinicWorkload'
import CompletedManeuvers from './components/CompletedManeuvers'
import TotalBalance from './components/TotalBalance'
import TopDoctors from './components/TopDoctors'
import useApi from '@/hooks/useApi'
import { ANALYTICS_FINANCE, TOP_DOCTORS_APPOINTMENTS, TOP_DOCTORS_INCOME } from '@/components/endpoints'

const Dashboard: React.FC = () => {
	const { data, isLoading } = useApi(ANALYTICS_FINANCE)
	const record = data?.data
	const paid = record?.find((el: any) => el._id === "Paid")
	const notPaid = record?.find((el: any) => el._id === "Not Paid")

	return (
		<Style className='dashboard'>
			<Row gutter={[{ xs: 12, sm: 12, md: 24 }, { xs: 12, sm: 12, md: 24 }]}>
				<Col span={24}>
					<Box>
						<DatePicker.RangePicker className='filter-date' format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					</Box>
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<ClinicWorkload />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<CompletedManeuvers />
				</Col>
				<Col lg={8} md={12} sm={12} span={24} className='d-none d-lg-block'>
					<TopDoctors title='Топ врачи по приемам' type={2} endpoint={TOP_DOCTORS_APPOINTMENTS} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<TotalBalance title="Общая сумма" summ={notPaid?.totalAmount} count={notPaid?.count} loading={isLoading} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<TotalBalance title="Всего произведенных платежей" summ={paid?.totalAmount} count={paid?.count} loading={isLoading} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<TopDoctors title='Топ врачи по доходам' type={1} endpoint={TOP_DOCTORS_INCOME} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24} className='d-lg-none'>
					<TopDoctors title='Топ врачи по приемам' type={2} endpoint={TOP_DOCTORS_APPOINTMENTS} />
				</Col>
			</Row>
		</Style>
	)
}

export default Dashboard