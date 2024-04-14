import MyButton from '@/components/antd/MyButton'
import { INIT_PAGE_PARAMS, STATUS } from "@/components/variables"
import { useQueryParams } from '@/hooks/useQueryParams'
import useToggleState from '@/hooks/useToggleState'
import { colors } from '@/utils/theme'
import { BarsOutlined, PlusOutlined } from '@ant-design/icons'
import { Drawer, Flex, Segmented } from 'antd'
import { FaFlaskVial } from 'react-icons/fa6'
import Style from './Style'
import ProtocolAction from './components/Action'
import ProtocolsTable from './components/Table'
import { useState } from 'react'
import { queryClient } from '@/utils/props'
import qs from "qs"
import { PROTOCOLS } from '@/components/endpoints'
import { useSearchParams } from 'react-router-dom'
import FilterRenderer from '@/components/shared/FilterRenderer'
import useT from '@/hooks/useT'

const items = [
	{ label: 'Protocol', value: 'default', icon: <BarsOutlined /> },
	{ label: 'Labaratory', value: 'lab', icon: <span className='anticon'><FaFlaskVial /></span> },
]

const Protocols = () => {

	const t = useT()

	const [query, setQuery] = useQueryParams({ ...INIT_PAGE_PARAMS, type: items[0].value })

	const [id, setId] = useState<string | null>(null)
	const [isOpen, toggle] = useToggleState(false)

	const [search] = useSearchParams()
	const selected = items.find(el => el.value === query.type)

	const closeModal = () => {
		toggle()
		if (id) setId(null)
	}

	const onActionFinish = () => {
		setId(null)
		toggle()
		queryClient.refetchQueries([PROTOCOLS, qs.parse(search.toString())])
	}

	return (
		<Style>
			<Flex justify="space-between" className='mb-2'>
				<Flex gap={24}>
					<Segmented
						value={query.type}
						size="large"
						options={items}
						onChange={(type) => setQuery({ ...query, type })}
					/>
					<FilterRenderer
						gutter={[12, 12]}
						style={{ flexGrow: 1 }}
						filters={[
							{
								key: "isactive",
								span: 24,
								lg: 24,
								type: "select",
								input: {
									name: "isactive",
									options: STATUS,
									placeholder: t("active")
								}
							},
						]}
					/>
				</Flex>
				<MyButton
					icon={<PlusOutlined />}
					color={colors.success}
					type="primary"
					className="text-uppercase"
					onClick={toggle}
				>
					Add {selected?.label}
				</MyButton>
			</Flex>
			<ProtocolsTable setId={(val) => { setId(val); toggle() }} query={query} setQuery={setQuery} />
			<Drawer
				open={isOpen}
				onClose={closeModal}
				title={`Create ${selected?.label}`}
				destroyOnClose
				width={700}
				maskClosable
			>
				<ProtocolAction query={query} id={id} onFinish={onActionFinish} />
			</Drawer>
		</Style>
	)
}

export default Protocols