import { CURRENT_COMPANY } from '@/components/endpoints'
import ErrorMessage from '@/components/shared/ErrorMessage'
import useApi from '@/hooks/useApi'
import useMainStore from '@/store/main'
import { IChildren } from '@/types/helper.type'
import React, { useEffect } from 'react'

interface Props {
	children: IChildren
}

const CheckCompanyProvider: React.FC<Props> = ({ children }) => {

	const { setCurrentCompany } = useMainStore()
	const { isSuccess, isError, data } = useApi(CURRENT_COMPANY, { suspense: true })

	useEffect(() => {
		if (isSuccess) setCurrentCompany(data?.data)
	}, [isError])

	return (
		isSuccess ? children : <ErrorMessage text="This company not found" title="404" />
	)
}

export default CheckCompanyProvider