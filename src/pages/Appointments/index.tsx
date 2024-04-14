import { APPOINTMENTS, DOCTORS, SERVICES, USERS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'
import useT from '@/hooks/useT'
import { BsSearch } from 'react-icons/bs'
import { STATUS } from '@/components/variables'

const Appointments: React.FC = () => {
	const t = useT()
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='appointments'
			endpoint={APPOINTMENTS}
			userFunc={(data) => {
				return data.map(item => item.patient)
			}}
			filters={[
				{
					key: "search",
					span: 3,
					lg: 4,
					type: "input",
					input: {
						name: "search",
						placeholder: t("search"),
						prefix: <BsSearch />
					}
				},
				{
					key: "doctor",
					span: 3,
					lg: 4,
					type: "select-api",
					input: {
						name: "doctor",
						placeholder: t("doctor"),
						endpoint: DOCTORS
					}
				},
				{
					key: "service",
					span: 3,
					lg: 4,
					type: "select-api",
					input: {
						name: "service",
						placeholder: t("service"),
						endpoint: SERVICES
					}
				},
				{
					key: "date",
					span: 3,
					lg: 4,
					type: "date",
					input: {
						name: "date",
						placeholder: t("date"),
					}
				},
				{
					key: "responsibleUsers",
					span: 3,
					lg: 4,
					type: "select-api",
					input: {
						name: "responsibleUsers",
						placeholder: t("responsible_users"),
						endpoint: USERS,
					}
				},
				{
					key: "isactive",
					span: 3,
					lg: 3,
					type: "select",
					input: {
						name: "isactive",
						options: STATUS,
						placeholder: t("active")
					}
				},
				{
					key: "priceFrom",
					span: 3,
					lg: 4,
					type: "input",
					input: {
						name: "priceFrom",
						placeholder: t("priceFrom"),
						type: "number",
						allowClear: false
					}
				},
				{
					key: "priceTo",
					span: 3,
					lg: 4,
					type: "input",
					input: {
						name: "priceTo",
						placeholder: t("priceTo"),
						type: "number",
						allowClear: false
					}
				},
			]}
		/>
	)
}

export default Appointments