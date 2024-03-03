import { WAREHOUSE_SELLS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'

const WarehouseSells: React.FC = () => {
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='sells'
			endpoint={WAREHOUSE_SELLS}
		/>
	)
}

export default WarehouseSells