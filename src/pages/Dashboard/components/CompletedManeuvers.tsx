import useT from '@/hooks/useT'
import Box from '@/styles/Box'
import { Typography } from 'antd'
import React from 'react'
import { BsArrowUpCircleFill } from 'react-icons/bs'
import { RingProgress, RingProgressConfig } from '@ant-design/plots';
import { colors } from '@/utils/theme'
import CountUp from 'react-countup'

const CompletedManeuvers: React.FC = () => {

	const t = useT()

	const config: RingProgressConfig = {
		height: 100,
		width: 100,
		autoFit: false,
		percent: 0.6,
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
		<Box className='completed_maneuvers chart-box'>
			<Typography.Title className='chart-title' level={5}>{t("completed_maneuvers")}</Typography.Title>
			<div className='completed_maneuvers_content'>
				<div className='completed_maneuvers_left'>
					<Typography.Title className='title'>
						<CountUp end={95} duration={1.5} />%
					</Typography.Title>
					<div className='count_status'>
						<BsArrowUpCircleFill /> <span>+1,65%</span>
					</div>
					<div className='two_status'>
						<span>{t("incompleted")}</span>
						<span>{t("completed")}</span>
					</div>
				</div>
				<div className='completed_maneuvers_right'>
					<RingProgress {...config} />
				</div>
			</div>
		</Box>
	)
}

export default CompletedManeuvers