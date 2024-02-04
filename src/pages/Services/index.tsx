import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import ServicesTable from './components/Table'
import { Drawer } from 'antd'
import ServiceAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'
import { useSearchParams } from 'react-router-dom'
import { queryClient } from '@/utils/props'
import { SERVICES } from '@/components/endpoints'
import qs from "qs"

const Users: React.FC = () => {
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
		queryClient.refetchQueries([SERVICES, qs.parse(search.toString())])
	}

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
			<ServicesTable setId={(val) => { setId(val); toggle() }} />
			<Drawer
				open={isOpen}
				onClose={closeModal}
				title={t(id ? "edit_service" : "new_service")}
				destroyOnClose
				width={480}
			>
				<ServiceAction id={id} onFinish={onActionFinish} />
			</Drawer>
		</div>
	)
}

export default Users