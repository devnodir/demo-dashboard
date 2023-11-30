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
	{ path: "/doctors", element: page("Doctors", AppLayout) },
	{ path: "/doctors/cabinet/:id", element: page("DoctorCabinet", AppLayout) },
	{ path: "/users", element: page("Users", AppLayout) },
	{ path: "/services", element: page("Services", AppLayout) },
	{ path: "/finances", element: page("Finances", AppLayout) },
	{
		path: "/settings", element: page("Settings", AppLayout),
		children: [
			{ path: "/settings/main", element: page("Settings/Main") },
			{ path: "/settings/files", element: page("Settings/Files") },
			{ path: "/settings/branches", element: page("Settings/Branches") },
			{ path: "/settings/protocols", element: page("Settings/Protocols") },
			{ path: "/settings/sms-template", element: page("Settings/Sms") },
			{ path: "/settings/intergrations", element: page("Settings/Intergrations") },
			{ path: "/settings/billing", element: page("Settings/Billing") },
			{ path: "/settings", element: redirectTo("/settings/main", true) },
		]
	},
	{ path: "/404", element: page("404", AppLayout) },
	{ path: "/login", element: redirectTo("/dashboard", true) },
	{ path: "/", element: redirectTo("/dashboard", true) },
	{ path: "*", element: redirectTo("/404", true) }
]

export { publicRoutes, privateRoutes }