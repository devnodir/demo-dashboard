import { TASKS, USERS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'
import useT from '@/hooks/useT'
import { BsSearch } from 'react-icons/bs'
import { STATUS, STATUS_DONE, STATUS_PRIORITY } from '@/components/variables'

const Tasks: React.FC = () => {
	const t = useT()
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='tasks'
			endpoint={TASKS}
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
					key: "priority",
					span: 3,
					lg: 3,
					type: "select",
					input: {
						name: "priority",
						options: STATUS_PRIORITY,
						placeholder: t("priority")
					}
				},
				{
					key: "isdone",
					span: 3,
					lg: 3,
					type: "select",
					input: {
						name: "isdone",
						options: STATUS_DONE,
						placeholder: t("done")
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
					key: "deadline",
					span: 3,
					lg: 4,
					type: "date",
					input: {
						name: "deadline",
						placeholder: t("deadline"),
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
			]}
		/>
	)
}

export default Tasks