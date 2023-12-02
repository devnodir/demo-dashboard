import useQueryString from '@/hooks/useQueryString'
import { BarsOutlined, PlusOutlined } from '@ant-design/icons'
import { Drawer, Flex, Segmented } from 'antd'
import { FaFlaskVial } from 'react-icons/fa6'
import ProtocolsTable from './components/Table'
import MyButton from '@/components/antd/MyButton'
import { colors } from '@/utils/theme'
import Style from './Style'
import useToggleState from '@/hooks/useToggleState'
import ProtocolAction from './components/Action'

const items = [
	{ label: 'Protocol', value: 'protocol', icon: <BarsOutlined /> },
	{ label: 'Labaratory', value: 'labaratory', icon: <span className='anticon'><FaFlaskVial /></span> },
]


const Protocols = () => {

	const { value, set } = useQueryString({ type: items[0].value })

	const [isOpen, toggle] = useToggleState(false)

	const selected = items.find(el => el.value === value.type)

	return (
		<Style>
			<Flex justify="space-between" className='mb-2'>
				<Segmented
					value={value.type}
					size="large"
					options={items}
					onChange={(type) => set({ type })}
				/>
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
			<ProtocolsTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={`Create ${selected?.label}`}
				destroyOnClose
				width={700}
				maskClosable
			>
				<ProtocolAction />
			</Drawer>
		</Style>
	)
}

export default Protocols