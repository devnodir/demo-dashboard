import MyButton from "@/components/antd/MyButton"
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { ISetState, IVoid } from '@/types/helper.type'
import { queryClient } from '@/utils/props'
import { colors } from '@/utils/theme'
import { PlusOutlined } from "@ant-design/icons"
import { Drawer } from 'antd'
import qs from "qs"
import React, { Fragment, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IProps {
	Table: React.FC<{ setId: ISetState<string | null> }>,
	Action: React.FC<{ id: string | null, onFinish: IVoid }>
	endpoint: string
	langKey: string
}

const PageStructure: React.FC<IProps> = ({
	Table,
	Action,
	endpoint,
	langKey
}) => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)

	const [search] = useSearchParams()

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
			<MyButton
				color={colors.success}
				type="primary"
				onClick={toggle}
				icon={<PlusOutlined />}
				className="text-uppercase float-right"
			>
				{/*  @ts-ignore */}
				{t(`add_${langKey}`)}
			</MyButton>
			<Table setId={(val) => { setId(val); toggle() }} />
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
		</Fragment>
	)
}

export default PageStructure