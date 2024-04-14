import useMainStore from '@/store/main'
import React from 'react'

const CompanyImage = () => {
	const { mode, currentCompany } = useMainStore()
	const logo = currentCompany?.logo

	return (
		<img src={logo || `/assets/logo-${mode}.svg`} alt="" />
	)
}

export default CompanyImage