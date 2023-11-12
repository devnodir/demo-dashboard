import { Navigate } from "react-router-dom"
import React, { lazy } from "react"
import { ILayout } from "@/types/general.type"

// generate that lazy imported page
const generatePage = (folderPath: string, Layout?: React.FC<ILayout>, title?: string) => {
	const Page = lazy(() => import(`../pages/${folderPath}/index.tsx`))
	return Layout ? <Layout title={title}><Page /></Layout> : <Page />
}

// generate redirect component
const redirectTo = (path: string, replace?: boolean) => {
	return <Navigate to={path} replace={replace} />
}

export { redirectTo }
export default generatePage