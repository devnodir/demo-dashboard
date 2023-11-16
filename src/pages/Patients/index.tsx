import Button from "@/components/form/Button"
import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from "@ant-design/icons"
import { Drawer } from 'antd'
import React, { Fragment } from 'react'
import Table from "./components/Table"

const Patients: React.FC = () => {
	const [isOpen, toggle] = useToggleState(false)
	return (
		<Fragment>
			<div style={{ textAlign: "end", marginBottom: 16 }}>
				<Button onClick={toggle} icon={<PlusOutlined />} color="green" type="primary">Add patient</Button>
			</div>
			<Table />
			{/* <AgTable /> */}
			<Drawer open={isOpen} onClose={toggle} title="New patient" />
		</Fragment>
	)
}

export default Patients