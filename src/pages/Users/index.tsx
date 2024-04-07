import Button from '@/components/antd/MyButton'
import { USERS } from '@/components/endpoints'
import SuspenseWrapper from '@/components/shared/TableComponents/SuspenseWrapper'
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { queryClient } from '@/utils/props'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Drawer, Flex } from 'antd'
import qs from "qs"
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import UsersAction from './components/Action'
import UsersTable from './components/Table'
import MyButton from '@/components/antd/MyButton'
import { FaMessage } from 'react-icons/fa6'
import SendMessageStructure from '@/components/shared/structurs/SendMessageStructure'
import { BsSearch } from 'react-icons/bs'
import FilterRenderer from '@/components/shared/FilterRenderer'

const Users: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)
	const [isOpenMessage, toggleMessage] = useToggleState(false)
	const [selectedKeys, setSelectedKeys] = useState([])

	const [search] = useSearchParams()

	const closeModal = () => {
		toggle()
		if (id) setId(null)
	}

	const onActionFinish = () => {
		setId(null)
		toggle()
		queryClient.refetchQueries([USERS, qs.parse(search.toString())])
	}

	return (
		<div className='users'>
			<Flex gap={12} justify="space-between">
				<FilterRenderer
					gutter={[12, 12]}
					style={{ flexGrow: 1 }}
					filters={[
						{
							key: "search",
							span: 3,
							lg: 5,
							type: "input",
							input: {
								name: "search",
								placeholder: t("search"),
								prefix: < BsSearch />
							}
						},
					]}
				/>
				<Flex
					gap={8}
				>
					{selectedKeys.length ? <MyButton
						color={colors.secondary}
						type="primary"
						icon={<FaMessage />}
						onClick={toggleMessage}
					>
						{t("send_message")}
					</MyButton> : null}
					<Button
						onClick={toggle}
						icon={<PlusOutlined />}
						color={colors.success}
						type="primary"
						className="text-uppercase float-right"
					>
						{t("add_user")}
					</Button>
				</Flex>
			</Flex>


			<UsersTable
				setId={(val) => { setId(val); toggle() }}
				tableProps={{
					rowSelection: {
						type: "checkbox",
						// @ts-ignore
						onChange: setSelectedKeys,
						selectedRowKeys: selectedKeys
					}
				}}
			/>
			<Drawer
				open={isOpen}
				onClose={closeModal}
				title={t(id ? "edit_user" : "new_user")}
				destroyOnClose
				width={480}
			>
				<SuspenseWrapper>
					<UsersAction id={id} onFinish={onActionFinish} />
				</SuspenseWrapper>
			</Drawer>
			{isOpenMessage && <SendMessageStructure
				endpoint={USERS}
				toggle={toggleMessage}
			/>}
		</div>
	)
}

export default Users