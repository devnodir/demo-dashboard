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
			<Row gutter={[24, 24]}>
				<Col lg={24}>
					<Box>
						<DatePicker.RangePicker style={{ maxWidth: 300 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					</Box>
				</Col>
				<Col lg={8}>
					<ClinicWorkload />
				</Col>
				<Col lg={8}>
					<CompletedManeuvers />
				</Col>
				<Col lg={8}>
					<TopDoctors title='Топ врачи по приемам' type={1} />
				</Col>
				<Col lg={8}>
					<TotalBalance title="Общая сумма" summ={12412332} />
				</Col>
				<Col lg={8}>
					<TotalBalance title="Всего произведенных платежей" summ={11212332} />
				</Col>
				<Col lg={8}>
					<TopDoctors title='Топ врачи по доходам' type={2} />
				</Col>
			</Row>
		</Style>
	)
}

export default Dashboard