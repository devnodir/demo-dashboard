import useQueryString from '@/hooks/useQueryString'
import { BarsOutlined, PlusOutlined } from '@ant-design/icons'
import { Flex, Segmented } from 'antd'
import { FaFlaskVial } from 'react-icons/fa6'
import ProtocolsTable from './components/Table'
import MyButton from '@/components/antd/MyButton'
import { colors } from '@/utils/theme'

const items = [
	{ label: 'Protocol', value: 'protocol', icon: <BarsOutlined /> },
	{ label: 'Labaratory', value: 'labaratory', icon: <span className='anticon'><FaFlaskVial /></span> },
]


const Protocols = () => {
	const { value, set } = useQueryString()


	const selected = value.type ? value.type : items[0].value


	return (
		<div>
			<Flex justify="space-between" className='mb-2'>
				<Segmented
					value={selected}
					size="large"
					options={items}
					onChange={(type) => set({ type })}
				/>
				<MyButton
					icon={<PlusOutlined />}
					color={colors.success}
					type="primary"
					className="text-uppercase"
				>
					Add {items.find(el => el.value === selected)?.label}
				</MyButton>
			</Flex>
			<ProtocolsTable />
		</div>
	)
}

export default Protocols