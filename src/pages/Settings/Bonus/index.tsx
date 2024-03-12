import { BONUS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'

const Bonus: React.FC = () => {
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='bonus'
			endpoint={BONUS}
		/>
	)
}

export default Bonus