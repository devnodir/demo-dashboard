import Box from '@/styles/Box';
import { Column, ColumnConfig } from '@ant-design/plots';
import { Typography } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';

const ClinicWorkload: React.FC = () => {

	const { t } = useTranslation()

	const data = [
		{
			type: t("mon"),
			sales: 38,
		},
		{
			type: t("tue"),
			sales: 52,
		},
		{
			type: t("wed"),
			sales: 61,
		},
		{
			type: t("thu"),
			sales: 145,
		},
		{
			type: t("fri"),
			sales: 48,
		},
		{
			type: t("sat"),
			sales: 38,
		},
		{
			type: t("sun"),
			sales: 38,
		},
	];
	const config: ColumnConfig = {
		data,
		xField: 'type',
		yField: 'sales',
		xAxis: {
			grid: null,
			line: null,
			tickLine: null,
		},
		yAxis: {
			grid: null
		},
		meta: {
			sales: {
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
		<Box className='chart-box'>
			<Typography.Title level={5} className='chart-title'>{t("clinic_workload")}</Typography.Title>
			<Column {...config} height={150} />
		</Box>
	)
}

export default ClinicWorkload