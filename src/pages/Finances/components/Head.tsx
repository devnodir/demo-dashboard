import Box from '@/styles/Box'
import { Row, Col, Typography } from 'antd'
import CountUp from 'react-countup'

const FinaceHead = () => {
	return (
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
	)
}

export default FinaceHead