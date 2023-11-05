import page, { redirectTo } from './generator'
import AppLayout from '@/layout'
import { RouteObject } from 'react-router-dom'

const publicRoutes: RouteObject[] = [
	{ path: "/login", element: page("Login") },
	{ path: "*", element: redirectTo("/login", true) }
]

const privateRoutes: RouteObject[] = [
	{ path: "/login", element: redirectTo("/cabinet", true) },
	{ path: "/", element: redirectTo("/cabinet", true) },
	{ path: "*", element: page("Services", "", AppLayout) }
]

export { publicRoutes, privateRoutes }