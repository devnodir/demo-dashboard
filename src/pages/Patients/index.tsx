import Table from '@/pages/Patients/components/Table'
import Box from '@/styles/Box'
import React, { Fragment } from 'react'
import { PlusOutlined } from "@ant-design/icons"
import Button from "@/components/form/Button"
import useToggleState from '@/hooks/useToggleState'
import { Drawer } from 'antd'

const Patients: React.FC = () => {
	const [isOpen, toggle] = useToggleState(false)
	return (
		<Fragment>
			<div style={{ textAlign: "end", marginBottom: 16 }}>
				<Button onClick={toggle} icon={<PlusOutlined />} color="green" type="primary">Add patient</Button>
			</div>
			<Box>
				<Table />
			</Box>
			<Drawer open={isOpen} onClose={toggle} title="New patient" />
		</Fragment>
	)
}

export default Patients