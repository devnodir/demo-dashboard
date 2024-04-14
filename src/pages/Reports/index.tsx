import React, { Suspense } from 'react'
import Style from './Style'
import { Tabs } from 'antd'
import { FaCity, FaCodeFork, FaCoins, FaFileLines, FaMessage, FaMoneyBill, FaSquare, FaUsersGear } from 'react-icons/fa6'
import { BsUiChecks } from 'react-icons/bs'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import PageLoader from '@/components/shared/Loaders/PageLoader'
import useT from '@/hooks/useT'

const Reports: React.FC = () => {

	const t = useT()
	const navigate = useNavigate()
	const { pathname } = useLocation()

	const activeTab = pathname.split("/")[2]

	const Childten = () => (
		<Suspense fallback={<PageLoader />}>
			<Outlet />
		</Suspense>
	)

	const items = [
		{ label: <><FaSquare /> {t("appointments")}</>, key: "appointments", },
	]


	return (
		<Style className='reports'>
			<Tabs
				items={items.map((item) => {
					return { ...item, children: Childten() }
				})}
				onChange={(key) => {
					navigate(`/reports/${key}`)
				}}
				activeKey={activeTab}
				tabPosition="top"
			/>

		</Style>
	)
}

export default Reports