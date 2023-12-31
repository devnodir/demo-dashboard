import Box from '@/styles/Box'
import { Col, DatePicker, Row } from 'antd'
import React from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import Style from './Style'
import ClinicWorkload from './components/ClinicWorkload'
import CompletedManeuvers from './components/CompletedManeuvers'
import TotalBalance from './components/TotalBalance'
import TopDoctors from './components/TopDoctors'

const Dashboard: React.FC = () => {
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
					<TopDoctors title='Топ врачи по приемам' type={1} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<TotalBalance title="Общая сумма" summ={12412332} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<TotalBalance title="Всего произведенных платежей" summ={11212332} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24}>
					<TopDoctors title='Топ врачи по доходам' type={2} />
				</Col>
				<Col lg={8} md={12} sm={12} span={24} className='d-lg-none'>
					<TopDoctors title='Топ врачи по приемам' type={1} />
				</Col>
			</Row>
		</Style>
	)
}

export default Dashboard