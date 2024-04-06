import { APPOINTMENTS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'

const Appointments: React.FC = () => {
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='appointments'
			endpoint={APPOINTMENTS}
			userFunc={(data) => {
				return data.map(item => item.patient)
			}}
		/>
	)
}

export default Appointments