import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import UsersTable from './components/Table'
import { Drawer } from 'antd'
import UsersAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'

const Users: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	return (
		<div className='users'>
			<Button
				onClick={toggle}
				icon={<PlusOutlined />}
				color={colors.success}
				type="primary"
				className="text-uppercase float-right"
			>
				{t("add_user")}
			</Button>
			<UsersTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t("new_user")}
				destroyOnClose
				width={480}
			>
				<UsersAction />
			</Drawer>
		</div>
	)
}

export default Users