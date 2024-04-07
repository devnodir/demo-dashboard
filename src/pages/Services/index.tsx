import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import ServicesTable from './components/Table'
import { Drawer, Flex } from 'antd'
import ServiceAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'
import { useSearchParams } from 'react-router-dom'
import { queryClient } from '@/utils/props'
import { SERVICES } from '@/components/endpoints'
import qs from "qs"
import FilterRenderer from '@/components/shared/FilterRenderer'
import { BsSearch } from 'react-icons/bs'

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
			<Flex justify="space-between" gap={8}>
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
								prefix: <BsSearch />
							}
						},
					]}
				/>
				<Button
					onClick={toggle}
					icon={<PlusOutlined />}
					color={colors.success}
					type="primary"
					className="text-uppercase float-right"
				>
					{t("add_service")}
				</Button>
			</Flex>

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