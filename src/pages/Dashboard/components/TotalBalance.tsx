import Box from '@/styles/Box'
import { Typography } from 'antd'
import React from 'react'
import CountUp from 'react-countup'

interface Props {
	title: string
	summ: number
	loading: boolean
	count: number
}

const TotalBalance: React.FC<Props> = ({ title, summ, loading, count }) => {

	return <Box className='total-balance' loading={loading}>
		<Typography.Title className='balance-title' level={5}>{title}</Typography.Title>
		<div className="total-balance_left">
			<Typography.Title className='title mt-3'>
				<CountUp end={summ} duration={1.5} separator=' ' />
			</Typography.Title>
			<p className='card-desc'>Всего поступлений: {count}</p>
		</div>
	</Box>
}

export default TotalBalance