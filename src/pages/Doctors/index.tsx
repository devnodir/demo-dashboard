import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import DoctorsTable from './components/Table'
import { Drawer } from 'antd'
import DoctorAction from './components/Action'
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'

const Doctors: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	return (
		<div className='doctors'>
			<Button
				onClick={toggle}
				icon={<PlusOutlined />}
				color={colors.success}
				type="primary"
				className="text-uppercase float-right"
			>
				{t("add_doctor")}
			</Button>
			<DoctorsTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t("new_doctor")}
				destroyOnClose
				width={480}

			>
				<DoctorAction />
			</Drawer>
		</div>
	)
}

export default Doctors