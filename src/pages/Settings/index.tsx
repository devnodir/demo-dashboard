import React, { Suspense } from 'react'
import Style from './Style'
import { Tabs } from 'antd'
import { FaCity, FaCodeFork, FaCoins, FaFileLines, FaMessage, FaSquare, FaUsersGear } from 'react-icons/fa6'
import { BsUiChecks } from 'react-icons/bs'
import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import PageLoader from '@/components/shared/Loaders/PageLoader'
import useT from '@/hooks/useT'

const Settings: React.FC = () => {

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
		{ label: <><FaSquare /> {t("main_settings")}</>, key: "main", },
		{ label: <><FaFileLines />{t("files")}</>, key: "files" },
		{ label: <><FaCity />{t("branches")}</>, key: "branches" },
		{ label: <><FaUsersGear />{t("roles")}</>, key: "roles" },
		{ label: <><BsUiChecks />{t("protocols")}</>, key: "protocols" },
		{ label: <><FaMessage /> {t("sms_template")}</>, key: "sms-template" },
		{ label: <><FaCodeFork />{t("intergrations")}</>, key: "intergrations" },
		{ label: <><FaCoins /> {t("billing")}</>, key: "billing" },
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