import MyButton from "@/components/antd/MyButton"
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { ISetState, IVoid } from '@/types/helper.type'
import { queryClient } from '@/utils/props'
import { colors } from '@/utils/theme'
import { PlusOutlined } from "@ant-design/icons"
import { Drawer, Flex } from 'antd'
import qs from "qs"
import React, { Fragment, useState } from 'react'
import { FaMessage } from "react-icons/fa6"
import { useSearchParams } from 'react-router-dom'
import SendMessageStructure from "./SendMessageStructure"

interface IProps {
	Table: React.FC<{ setId: ISetState<string | null>, noPagination?: boolean }>,
	Action: React.FC<{ id: string | null, onFinish: IVoid }>
	endpoint: string
	langKey: string,
	noPagination?: boolean
	userFunc?: (data: any[]) => any[]
}

const PageStructure: React.FC<IProps> = ({
	Table,
	Action,
	endpoint,
	langKey,
	noPagination,
	userFunc
}) => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)
	const [isOpenMessage, toggleMessage] = useToggleState(false)


	const [search] = useSearchParams()

	const [selectedKeys, setSelectedKeys] = useState([])

	const closeModal = () => {
		toggle()
		if (id) setId(null)
	}

	const onActionFinish = () => {
		setId(null)
		toggle()
		queryClient.refetchQueries([endpoint, qs.parse(search.toString())])
	}

	return (
		<Fragment>
			<Flex
				justify="flex-end"
				gap={8}
			>
				{(selectedKeys.length > 0 && userFunc) && <MyButton
					color={colors.secondary}
					type="primary"
					icon={<FaMessage />}
					onClick={toggleMessage}
				>
					{t("send_message")}
				</MyButton>}
				<MyButton
					color={colors.success}
					type="primary"
					onClick={toggle}
					icon={<PlusOutlined />}
					className="text-uppercase"
				>
					{/*  @ts-ignore */}
					{t(`add_${langKey}`)}
				</MyButton>
			</Flex>
			<Table
				setId={(val) => { setId(val); toggle() }}
				noPagination={noPagination}
				// @ts-ignore
				rowSelection={{
					type: "checkbox",
					onChange: setSelectedKeys,
					selectedRowKeys: selectedKeys
				}}
			/>
			<Drawer
				open={isOpen}
				onClose={closeModal}
				// @ts-ignore
				title={t(id ? `edit_${langKey}` : `new_${langKey}`)}
				width={480}
				destroyOnClose
			>
				<Action id={id} onFinish={onActionFinish} />
			</Drawer>
			{(isOpenMessage && userFunc) && <SendMessageStructure
				endpoint={endpoint}
				toggle={toggleMessage}
				userFunc={userFunc}
			/>}
		</Fragment>
	)
}

export default PageStructure