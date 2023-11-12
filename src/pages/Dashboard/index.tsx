import Box from '@/styles/Box'
import { Col, DatePicker, Row } from 'antd'
import React from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import Style from './Style'
import ClinicWorkload from './components/ClinicWorkload'
import CompletedManeuvers from './components/CompletedManeuvers'

const Dashboard: React.FC = () => {
	return (
		<Style className='dashboard'>
			<Row gutter={[24, 24]}>
				<Col lg={24}>
					<Box>
						<DatePicker.RangePicker style={{ minWidth: 300 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					</Box>
				</Col>
				<Col lg={8}>
					<ClinicWorkload />
				</Col>
				<Col lg={8}>
					<CompletedManeuvers />
				</Col>
				<Col lg={8}>

				</Col>
			</Row>
		</Style>
	)
}

export default Dashboard