import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from "@ant-design/icons"
import { Drawer } from 'antd'
import React, { Fragment } from 'react'
import PatientsTable from "./components/Table"
import PatientAction from "./components/Action"
import MyButton from "@/components/antd/MyButton"
import { colors } from '@/utils/theme'

const Patients: React.FC = () => {
	const [isOpen, toggle] = useToggleState(false)
	return (
		<Fragment>
			<MyButton
				color={colors.success}
				type="primary"
				onClick={toggle}
				icon={<PlusOutlined />}
				className="text-uppercase float-right"
			>
				Add patient
			</MyButton>
			<PatientsTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title="New patient"
				destroyOnClose
			>
				<PatientAction />
			</Drawer>
		</Fragment>
	)
}

export default Patients