import Button from '@/components/antd/MyButton'
import { DOCTORS } from '@/components/endpoints'
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { queryClient } from '@/utils/props'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Drawer } from 'antd'
import qs from "qs"
import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import DoctorAction from './components/Action'
import DoctorsTable from './components/Table'

const Doctors: React.FC = () => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)

	const [search] = useSearchParams()

	const closeModal = () => {
		toggle()
		if (id) setId(null)
	}

	const onActionFinish = () => {
		setId(null)
		toggle()
		queryClient.refetchQueries([DOCTORS, qs.parse(search.toString())])
	}

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
			<DoctorsTable setId={(val) => { setId(val); toggle() }} />
			<Drawer
				open={isOpen}
				onClose={closeModal}
				title={t(id ? "edit_doctor" : "new_doctor")}
				destroyOnClose
				width={480}

			>
				<DoctorAction id={id} onFinish={onActionFinish} />
			</Drawer>
		</div>
	)
}

export default Doctors