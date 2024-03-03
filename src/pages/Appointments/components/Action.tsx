import { APPOINTMENTS, DOCTORS, PATIENTS, SERVICES, USERS } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Spin, TimePicker, message } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect } from 'react'
import _ from 'lodash'

interface Props {
	id: string | null
	onFinish: IVoid
}

interface IFormData {
	patient_id: string
	doctor_id: string
	service_id: string
	appointment_date: Date
	appointment_time: Date
	responsible_users: any[]
}

const AppointmentsAction: React.FC<Props> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${APPOINTMENTS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(APPOINTMENTS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", APPOINTMENTS)


	useEffect(() => {
		if (data) {
			const record = data?.data
			form.setFieldsValue(_.pick(record, ["patient_id", "doctor_id", "service_id", "responsible_users"]))
			form.setFieldValue("appointment_date", dayjs(record.appointment_date))
			form.setFieldValue("appointment_time", dayjs(record.appointment_date_time))
		}
	}, [data])

	const submit = (data: IFormData) => {
		const formData: any = {
			...data,
			appointment_date: dayjs(data.appointment_date).format("YYYY-MM-DD"),
			appointment_time: dayjs(data.appointment_time).format("HH:mm")
		}
		if (id) editMutate({ data: formData, id }, responses)
		else createMutate(formData, responses)
	}

	const responses = {
		onSuccess: () => onFinish(),
		onError: (err: any) => {
			message.error(err.message)
		}
	}

	return (
		<Spin spinning={isLoading}>
			<Form
				layout="vertical"
				form={form}
				onFinish={submit}
			>
				<Form.Item
					label={t("patient")}
					name="patient_id"
					rules={[R_REQUIRED]}

				>
					<SelectApi
						endpoint={PATIENTS}
						showSearch
						allowClear
					/>
				</Form.Item>
				<Form.Item
					label={t("doctor")}
					name="doctor_id"
					rules={[R_REQUIRED]}

				>
					<SelectApi
						endpoint={DOCTORS}
						showSearch
						allowClear
					/>
				</Form.Item>
				<Form.Item
					label={t("service")}
					name="service_id"
					rules={[R_REQUIRED]}

				>
					<SelectApi
						endpoint={SERVICES}
						showSearch
						allowClear
					/>
				</Form.Item>
				<Form.Item
					label={t("date")}
					name="appointment_date"
					rules={[R_REQUIRED]}

				>
					<DatePicker format="DD.MM.YYYY" allowClear />
				</Form.Item>
				<Form.Item
					label={t("time")}
					name="appointment_time"
					rules={[R_REQUIRED]}

				>
					<TimePicker format="HH:mm" allowClear />
				</Form.Item>
				<Form.Item
					label={t("responsible_users")}
					name="responsible_users"
					rules={[R_REQUIRED]}

				>
					<SelectApi
						endpoint={USERS}
						showSearch
						allowClear
						mode="multiple"
					/>
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default AppointmentsAction