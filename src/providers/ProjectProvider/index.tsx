import RenderRoutes from '@/components/shared/RenderRoutes'
import formRotes from '@/routes/form'
import { IChildren } from '@/types/helper.type'
import React from 'react'

interface Props {
	children: IChildren
}

const ProjectProvider: React.FC<Props> = ({ children }) => {

	// const isFrom = window.location.hostname === "yd-form.devnodir.uz"
	const isFrom = true

	return (
		isFrom ? <RenderRoutes routes={formRotes} /> : children
	)
}

export default ProjectProvider