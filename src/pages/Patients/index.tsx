import useToggleState from '@/hooks/useToggleState'
import { PlusOutlined } from "@ant-design/icons"
import { Drawer } from 'antd'
import React, { Fragment } from 'react'
import PatientsTable from "./components/Table"
import PatientAction from "./components/Action"
import MyButton from "@/components/antd/MyButton"
import { colors } from '@/utils/theme'
import useT from '@/hooks/useT'

const Patients: React.FC = () => {
	const t = useT()
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
				{t("add_patient")}
			</MyButton>
			<PatientsTable />
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t("new_patient")}
				width={480}
				destroyOnClose
			>
				<PatientAction />
			</Drawer>
		</Fragment>
	)
}

export default Patients