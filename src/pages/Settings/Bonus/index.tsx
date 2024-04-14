import { BONUS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'
import { STATUS } from '@/components/variables'
import useT from '@/hooks/useT'

const Bonus: React.FC = () => {
	const t = useT()
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='bonus'
			endpoint={BONUS}
			filters={[
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

export default Bonus