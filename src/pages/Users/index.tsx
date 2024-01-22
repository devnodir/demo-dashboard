import Button from '@/components/antd/MyButton'
import { USERS } from '@/components/endpoints'
import SuspenseWrapper from '@/components/shared/TableComponents/SuspenseWrapper'
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { queryClient } from '@/utils/props'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import qs from "qs"
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import UsersAction from './components/Action'
import UsersTable from './components/Table'

const Users: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)
	const [search] = useSearchParams()

	const onActionFinish = () => {
		setId(null)
		toggle()
		queryClient.refetchQueries([USERS, qs.parse(search.toString())])
	}

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
			<UsersTable setId={(val) => { setId(val); toggle() }} />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t(id ? "edit_user" : "new_user")}
				destroyOnClose
				width={480}
			>
				<SuspenseWrapper>
					<UsersAction id={id} onFinish={onActionFinish} />
				</SuspenseWrapper>
			</Drawer>
		</div>
	)
}

export default Users