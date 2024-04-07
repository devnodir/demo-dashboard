import { ANALYTICS_PAYMENTS } from '@/components/endpoints'
import useApi from '@/hooks/useApi'
import useT from '@/hooks/useT'
import Box from '@/styles/Box'
import { colors } from '@/utils/theme'
import { RingProgress, RingProgressConfig } from '@ant-design/plots'
import { Typography } from 'antd'
import React from 'react'
import CountUp from 'react-countup'

const CompletedManeuvers: React.FC = () => {

	const t = useT()
	const { data, isLoading } = useApi(ANALYTICS_PAYMENTS)
	const record = data?.data
	const paid = record?.find((el: any) => el.isPayment === "Paid")


	const config: RingProgressConfig = {
		height: 100,
		width: 100,
		autoFit: false,
		percent: paid ? 1 - (paid.percent / 100) : 0,
		color: [colors.primary, colors.secondary],
		innerRadius: 0.82,
		radius: 1,
		statistic: {
			content: false
		},
		progressStyle: {
			lineCap: "round",
			lineJoin: "miter",
		}
	};

	return (
		<Box className='completed_maneuvers chart-box' loading={isLoading}>
			<Typography.Title className='chart-title' level={5}>{t("completed_maneuvers")}</Typography.Title>
			{paid && <div className='completed_maneuvers_content'>
				<div className='completed_maneuvers_left'>
					<Typography.Title className='title mb-5'>
						<CountUp end={paid.percent} duration={1.5} />%
					</Typography.Title>
					<div className='two_status'>
						<span>{t("incompleted")}</span>
						<span>{t("completed")}</span>
					</div>
				</div>
				<div className='completed_maneuvers_right'>
					<RingProgress {...config} />
				</div>
			</div>}
		</Box>
	)
}

export default CompletedManeuvers