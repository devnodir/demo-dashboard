import { WAREHOUSE_CATEGORY } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'

const WarehouseProducts: React.FC = () => {
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='category'
			endpoint={WAREHOUSE_CATEGORY}
		/>
	)
}

export default WarehouseProducts