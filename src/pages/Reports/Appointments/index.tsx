import MyTable from '@/components/antd/MyTable';
import { APPOINTMENTS_LAST_MONTH } from '@/components/endpoints';
import FilterRenderer from '@/components/shared/FilterRenderer';
import useApi from '@/hooks/useApi';
import useApiMutationID from '@/hooks/useApiMutationID';
import { useQueryParams } from '@/hooks/useQueryParams';
import useT from '@/hooks/useT';
import { mapTableData } from '@/utils/methods';
import React from 'react';
import Style from './Style';
import dayjs from 'dayjs';


const getDefaultValues = () => {
	return { startDate: dayjs().startOf("month").format("YYYY-MM-DD"), endDate: dayjs().endOf("month").format("YYYY-MM-DD") }
}

const Files: React.FC = () => {
	const t = useT();
	const [query] = useQueryParams(getDefaultValues())

	const { data, isLoading, isRefetching, isFetching } = useApi(APPOINTMENTS_LAST_MONTH, {}, { ...query })
	const { isLoading: isDeleting } = useApiMutationID("delete", APPOINTMENTS_LAST_MONTH)

	const records = mapTableData(data?.data)


	const columns = [
		{
			title: t('date'),
			dataIndex: 'dayOfMonth',
		},
		{
			title: t('date'),
			dataIndex: 'dayOfMonth',
		},
	];

	return (
		<Style className='settings-files mt-4'>
			<div className='mb-2'>
				<FilterRenderer
					gutter={[12, 12]}
					style={{ flexGrow: 1 }}
					defaultValues={getDefaultValues()}
					filters={[
						{
							key: "startDate",
							span: 4,
							lg: 4,
							type: "date",
							input: {
								name: "startDate",
								placeholder: t("date"),
							}
						},
						{
							key: "endDate",
							span: 4,
							lg: 4,
							type: "date",
							input: {
								name: "endDate",
								placeholder: t("date"),
							}
						},
					]}
				/>
			</div>
			<MyTable
				pagination={false}
				columns={columns}
				dataSource={records}
				loading={isLoading || isRefetching || isFetching || isDeleting}
			/>
		</Style>
	)
}

export default Files