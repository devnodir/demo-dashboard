import { DOCTORS, FINANCES, PATIENTS, SERVICES, TASKS, USERS } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import { STATUS_DONE, STATUS_PATIENT, STATUS_PRIORITY } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Input, InputNumber, Select, Spin, message } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { useEffect } from 'react'
import { BsCalendarFill } from 'react-icons/bs'

interface IFormData {
	patient_id: string
	doctor_ids: string[]
	service_ids: string[]
	paid_amount: number
	isPayment: string
	isWithdraw: string
}

interface IProps {
	id: string | null
	onFinish: IVoid
}

const FinanceAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${FINANCES}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(FINANCES)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", FINANCES)

	useEffect(() => {
		if (data) {
			const record = data?.data
			form.setFieldsValue(_.pick(record, ["patient_id", "doctor_ids", "service_ids", "paid_amount", "isPayment", "isWithdraw"]))
			if (record.deadline) form.setFieldValue("deadline", dayjs(record.deadline))
		}
	}, [data])

	const submit = (data: IFormData) => {
		if (id) editMutate({ data, id }, responses)
		else createMutate(data, responses)
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
					label={t("doctors")}
					name="doctor_ids"
					rules={[R_REQUIRED]}
				>
					<SelectApi
						endpoint={DOCTORS}
						showSearch
						allowClear
						mode="multiple"
					/>
				</Form.Item>
				<Form.Item
					label={t("services")}
					name="service_ids"
					rules={[R_REQUIRED]}
				>
					<SelectApi
						endpoint={SERVICES}
						showSearch
						allowClear
						mode="multiple"
					/>
				</Form.Item>

				<Form.Item
					label={t("price")}
					name="paid_amount"
					rules={[R_REQUIRED]}
				>
					<InputNumber className='w-100' />
				</Form.Item>
				<Form.Item
					// @ts-ignore
					label={t("isPayment")}
					name="isPayment"
					rules={[R_REQUIRED]}
				>
					<Select
						options={STATUS_DONE}
					/>
				</Form.Item>
				<Form.Item
					// @ts-ignore
					label={t("isWithdraw")}
					name="isWithdraw"
					rules={[R_REQUIRED]}
				>
					<Select
						options={STATUS_DONE}
					/>
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default FinanceAction