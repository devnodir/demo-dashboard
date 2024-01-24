import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import WarehouseTable from './components/Table'
import { Drawer } from 'antd'
import WarehouseAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'

const Warehouse: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
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
			<WarehouseTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t("new_service")}
				destroyOnClose
				width={480}
			>
				<WarehouseAction />
			</Drawer>
		</div>
	)
}

export default Warehouse