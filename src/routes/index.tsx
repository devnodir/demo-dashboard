import page, { redirectTo } from './generator'
import AppLayout from '@/layout'
import { RouteObject } from 'react-router-dom'

const publicRoutes: RouteObject[] = [
	{ path: "/login", element: page("Login") },
	{ path: "*", element: redirectTo("/login", true) }
]

const privateRoutes: RouteObject[] = [
	{ path: "/dashboard", element: page("Dashboard", AppLayout) },
	{ path: "/patients", element: page("Patients", AppLayout) },
	{ path: "/404", element: page("404", AppLayout) },
	{ path: "/login", element: redirectTo("/dashboard", true) },
	{ path: "/", element: redirectTo("/dashboard", true) },
	{ path: "*", element: redirectTo("/404", true) }
]

export { publicRoutes, privateRoutes }