import { LABS, TASKS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'

const Tasks: React.FC = () => {
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='labs'
			endpoint={LABS}
		/>
	)
}

export default Tasks