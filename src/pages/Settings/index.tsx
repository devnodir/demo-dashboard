import React, { Suspense } from 'react'
import Style from './Style'
import { Tabs } from 'antd'
import { FaCity, FaCodeFork, FaCoins, FaFileLines, FaMessage, FaSquare } from 'react-icons/fa6'
import { BsUiChecks } from 'react-icons/bs'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import PageLoader from '@/components/shared/Loaders/PageLoader'

const Settings: React.FC = () => {

	const navigate = useNavigate()
	const { pathname } = useLocation()

	const activeTab = pathname.split("/")[2]

	const Childten = () => (
		<Suspense fallback={<PageLoader />}>
			<Outlet />
		</Suspense>
	)

	const items = [
		{ label: <><FaSquare /> Main settings</>, key: "main", },
		{ label: <><FaFileLines />Files</>, key: "files" },
		{ label: <><FaCity />Branches</>, key: "branches" },
		{ label: <><BsUiChecks />Protocols</>, key: "protocols" },
		{ label: <><FaMessage /> SMS template</>, key: "sms-template" },
		{ label: <><FaCodeFork />Intergrations</>, key: "intergrations" },
		{ label: <><FaCoins /> Billing</>, key: "billing" },
	]


	return (
		<Style className='settings'>
			<Tabs
				items={items.map((item) => {
					return { ...item, children: Childten() }
				})}
				onChange={(key) => {
					navigate(`/settings/${key}`)
				}}
				activeKey={activeTab}
				tabPosition="top"
			/>

		</Style>
	)
}

export default Settings