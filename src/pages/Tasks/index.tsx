import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import TasksTable from './components/Table'
import { Drawer } from 'antd'
import TasksAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'

const Tasks: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	return (
		<div className='services'>
			<Button
				onClick={toggle}
				icon={<PlusOutlined />}
				color={colors.success}
				type="primary"
				className="text-uppercase float-right"
			>
				{t("add_service")}
			</Button>
			<TasksTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t("new_service")}
				destroyOnClose
				width={480}
			>
				<TasksAction />
			</Drawer>
		</div>
	)
}

export default Tasks