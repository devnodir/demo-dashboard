import ErrorMessage from '@/components/shared/ErrorMessage'
import RenderRoutes from '@/components/shared/RenderRoutes'
import formRotes from '@/routes/form'
import useMainStore from '@/store/main'
import { IChildren } from '@/types/helper.type'
import React from 'react'

interface Props {
	children: IChildren
}

const ProjectProvider: React.FC<Props> = ({ children }) => {

	const { currentCompany } = useMainStore()

	const isFrom = window.location.hostname === "yd-form.devnodir.uz"
	const isAllowed = currentCompany?.is_online_form_active

	return (
		isFrom ? isAllowed ? <RenderRoutes routes={formRotes} /> : <ErrorMessage title="401" text="Not allowed to online form" /> : children
	)
}

export default ProjectProvider