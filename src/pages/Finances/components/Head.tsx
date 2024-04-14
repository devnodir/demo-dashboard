import { FINANCES_ANALYTICS } from '@/components/endpoints'
import useApi from '@/hooks/useApi'
import Box from '@/styles/Box'
import { Row, Col, Typography, Spin } from 'antd'
import CountUp from 'react-countup'

const FinaceHead = () => {

	const { data, isLoading } = useApi(FINANCES_ANALYTICS)
	const record = data?.data || {}
	return (
		<Spin spinning={isLoading}>
			<Row gutter={[{ xs: 12, sm: 12, md: 24 }, { xs: 12, sm: 12, md: 24 }]}>
				<Col md={8} span={10}>
					<Box>
						<Typography.Text>Кол-во записей</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={record.totalCount} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
				<Col md={8} span={14}>
					<Box>
						<Typography.Text>Общая сумма</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={record.totalAmount} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
				<Col md={8} span={24}>
					<Box>
						<Typography.Text>Оплаченные</Typography.Text>
						<Typography.Title level={2} className='m-0 mt-2'>
							<CountUp end={record.totalPaidAmount} duration={3} separator=' ' />
						</Typography.Title>
					</Box>
				</Col>
			</Row>
		</Spin>
	)
}

export default FinaceHead