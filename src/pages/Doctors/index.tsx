import Button from '@/components/antd/MyButton'
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from '@ant-design/icons'
import React from 'react'
import DoctorsTable from './components/Table'
import { Drawer } from 'antd'
import DoctorAction from './components/Action'

const Doctors: React.FC = () => {
	const [isOpen, toggle] = useToggleState(false)
	return (
		<div className='doctors'>
			<Button
				onClick={toggle}
				icon={<PlusOutlined />}
				color="green"
				type="primary"
				className="text-uppercase float-right"
			>
				Add doctor
			</Button>
			<DoctorsTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title="New doctor"
				destroyOnClose
			>
				<DoctorAction />
			</Drawer>
		</div>
	)
}

export default Doctors