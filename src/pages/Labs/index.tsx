import { LABS, PATIENTS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'
import useT from '@/hooks/useT'
import { BsSearch } from 'react-icons/bs'

const Tasks: React.FC = () => {
	const t = useT()
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='labs'
			endpoint={LABS}
			filters={[
				{
					key: "search",
					span: 3,
					lg: 5,
					type: "input",
					input: {
						name: "search",
						placeholder: t("search"),
						prefix: <BsSearch />
					}
				},
				{
					key: "patient",
					span: 3,
					lg: 4,
					type: "select-api",
					input: {
						name: "patient",
						placeholder: t("patient"),
						endpoint: PATIENTS
					}
				},
			]}
		/>
	)
}

export default Tasks