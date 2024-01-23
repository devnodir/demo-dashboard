import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import AppointmentsTable from './components/Table'
import { Drawer } from 'antd'
import AppointmentsAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'

const Appointments: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)


	return (
		<div className='appointments'>
			<Button
				onClick={toggle}
				icon={<PlusOutlined />}
				color={colors.success}
				type="primary"
				className="text-uppercase float-right"
			>
				{t("add_appointments")}
			</Button>
			<AppointmentsTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t(id ? "edit_appointments" : "new_appointments")}
				destroyOnClose
				width={480}
			>
				<AppointmentsAction id={id} />
			</Drawer>
		</div>
	)
}

export default Appointments