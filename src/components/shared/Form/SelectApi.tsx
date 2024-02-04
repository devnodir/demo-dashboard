import useApi from '@/hooks/useApi'
import { mapSelectData } from '@/utils/methods'
import { Select, SelectProps } from 'antd'
import React from 'react'

interface IProps {
	endpoint: string
}

const SelectApi: React.FC<IProps & SelectProps> = ({ endpoint, ...props }) => {

	const { data, isLoading } = useApi(endpoint)

	return (
		<Select
			options={mapSelectData(data)}
			loading={isLoading}
			{...props}
		/>
	)
}

export default SelectApi