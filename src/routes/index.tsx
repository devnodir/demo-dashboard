import page, { redirectTo } from './generator'
import AppLayout from '@/layout'
import { RouteObject } from 'react-router-dom'

const publicRoutes: RouteObject[] = [
	{ path: "/login", element: page(() => import(`@/pages/Login`)) },
	{ path: "*", element: redirectTo("/login", true) }
]

const privateRoutes: RouteObject[] = [
	{ path: "/dashboard", element: page(() => import(`@/pages/Dashboard`), AppLayout) },
	{ path: "/patients", element: page(() => import(`@/pages/Patients`), AppLayout) },
	{ path: "/patients/cabinet/:id", element: page(() => import(`@/pages/PatientCabinet`), AppLayout) },
	{ path: "/doctors", element: page(() => import(`@/pages/Doctors`), AppLayout) },
	{ path: "/doctors/cabinet/:id", element: page(() => import(`@/pages/DoctorCabinet`), AppLayout) },
	{ path: "/users", element: page(() => import(`@/pages/Users`), AppLayout) },
	{ path: "/services", element: page(() => import(`@/pages/Services`), AppLayout) },
	{
		path: "/warehouse", element: page(() => import(`@/pages/Warehouse`), AppLayout),
		children: [
			{ path: "/warehouse/products", element: page(() => import(`@/pages/Warehouse/Products`)) },
			{ path: "/warehouse/sells", element: page(() => import(`@/pages/Warehouse/Sells`)) },
			{ path: "/warehouse", element: redirectTo("/warehouse/products", true) },
		]
	},
	{ path: "/tasks", element: page(() => import(`@/pages/Tasks`), AppLayout) },
	{ path: "/labs", element: page(() => import(`@/pages/Labs`), AppLayout) },
	{ path: "/appointments", element: page(() => import(`@/pages/Appointments`), AppLayout) },
	{ path: "/finances", element: page(() => import(`@/pages/Finances`), AppLayout) },
	{
		path: "/settings", element: page(() => import(`@/pages/Settings`), AppLayout),
		children: [
			{ path: "/settings/main", element: page(() => import(`@/pages/Settings/Main`)) },
			{ path: "/settings/files", element: page(() => import(`@/pages/Settings/Files`)) },
			{ path: "/settings/branches", element: page(() => import(`@/pages/Settings/Branches`)) },
			{ path: "/settings/roles", element: page(() => import(`@/pages/Settings/Roles`)) },
			{ path: "/settings/protocols", element: page(() => import(`@/pages/Settings/Protocols`)) },
			{ path: "/settings/sms-template", element: page(() => import(`@/pages/Settings/Sms`)) },
			{ path: "/settings/intergrations", element: page(() => import(`@/pages/Settings/Intergrations`)) },
			{ path: "/settings/billing", element: page(() => import(`@/pages/Settings/Billing`)) },
			{ path: "/settings/bonus", element: page(() => import(`@/pages/Settings/Bonus`)) },
			{ path: "/settings", element: redirectTo("/settings/main", true) },
		]
	},
	{ path: "/404", element: page(() => import(`@/pages/404`), AppLayout) },
	{ path: "/login", element: redirectTo("/dashboard", true) },
	{ path: "/", element: redirectTo("/dashboard", true) },
	{ path: "*", element: redirectTo("/404", true) }
]

export { publicRoutes, privateRoutes }