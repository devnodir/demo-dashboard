import page, { redirectTo } from './generator'
import { RouteObject } from 'react-router-dom'

const formRotes: RouteObject[] = [
	{ path: "/online/form", element: page(() => import(`@/pages/OnlineForm`)) },
	{ path: "*", element: redirectTo("/online/form", true) }
]

export default formRotes