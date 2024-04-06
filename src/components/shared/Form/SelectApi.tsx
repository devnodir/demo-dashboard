import useApi from '@/hooks/useApi'
import { mapSelectData } from '@/utils/methods'
import { Select, SelectProps } from 'antd'
import React from 'react'

interface IProps {
	endpoint: string,
	query?: any
}

const SelectApi: React.FC<IProps & SelectProps> = ({ endpoint, query = {}, ...props }) => {

	const { data, isLoading, isRefetching } = useApi(endpoint, {}, query)

	return (
		<Select
			options={mapSelectData(data)}
			loading={isLoading || isRefetching}
			{...props}
		/>
	)
}

export default SelectApi