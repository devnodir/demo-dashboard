import { ANALYTICS_LAST_WEEK } from '@/components/endpoints';
import useApi from '@/hooks/useApi';
import Box from '@/styles/Box';
import { Column, ColumnConfig } from '@ant-design/plots';
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ClinicWorkload: React.FC = () => {

	const { t } = useTranslation()
	const { data, isLoading } = useApi(ANALYTICS_LAST_WEEK)
	const records = data?.data

	const mapData = (data: any[]) => {
		return data?.map(item => {
			return {
				...item,
				// @ts-ignore
				weekday: t(`day-${item.weekday}`)
			}
		}) || []
	}


	const config: ColumnConfig = {
		data: mapData(records),
		xField: 'weekday',
		yField: 'count',
		xAxis: {
			grid: null,
			line: null,
			tickLine: null,
		},
		yAxis: {
			grid: null
		},
		meta: {
			count: {
				alias: t("patients"),
			},
		},
		minColumnWidth: 10,
		maxColumnWidth: 10,
		columnStyle: {
			radius: [20, 20, 0, 0],
		},
	};

	return (
		<Box className='chart-box' loading={isLoading}>
			<Typography.Title level={5} className='chart-title'>{t("clinic_workload")}</Typography.Title>
			<Column {...config} height={150} />
		</Box>
	)
}

export default ClinicWorkload