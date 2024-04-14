import { WAREHOUSE_SELLS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'
import useT from '@/hooks/useT'
import { BsSearch } from 'react-icons/bs'
import { STATUS } from '@/components/variables'

const WarehouseSells: React.FC = () => {
	const t = useT()
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='sells'
			endpoint={WAREHOUSE_SELLS}
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

export default WarehouseSells