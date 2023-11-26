import Box from '@/styles/Box'
import { Typography } from 'antd'
import React from 'react'
import CountUp from 'react-countup'

interface Props {
	title: string
	summ: number
}

const TotalBalance: React.FC<Props> = ({ title, summ }) => {

	return <Box className='total-balance'>
		<Typography.Title className='balance-title' level={5}>{title}</Typography.Title>
		<div className="total-balance_left">
			<Typography.Title className='title mt-3'>
				<CountUp end={summ} duration={1.5} separator=' ' />
			</Typography.Title>
			<p className='card-desc'>Всего поступлений: 100</p>
		</div>
	</Box>
}

export default TotalBalance