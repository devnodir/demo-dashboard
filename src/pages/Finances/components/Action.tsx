import { DOCTORS, FINANCES, PATIENTS, SERVICES } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, Form, Input, InputNumber, Spin, message } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { Fragment, useEffect } from 'react'

interface IFormData {
	patient_id: string
	doctor_ids: string[]
	service_ids: string[]
	paid_amount: number
	amount: number
	memo: string
	isPayment: boolean
	isWithdraw: boolean
	isExpense: boolean
}

interface IProps {
	id: string | null
	onFinish: IVoid
	type: string
}

const FinanceAction: React.FC<IProps> = ({ id, onFinish, type }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${FINANCES}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(FINANCES)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", FINANCES)

	useEffect(() => {
		if (data) {
			const record = data?.data
			if (type === "withdraw") {
				form.setFieldsValue(_.pick(record, ["patient_id", "doctor_ids", "service_ids", "paid_amount",]))
				if (record.deadline) form.setFieldValue("deadline", dayjs(record.deadline))
			} else {
				form.setFieldsValue(_.pick(record, ["amount", "memo"]))
			}
		}
	}, [data])

	const submit = (data: IFormData) => {

		if (id) editMutate({ data, id }, responses)
		else {
			data.isPayment = false
			if (type === "withdraw") {
				data.isWithdraw = true
				data.isExpense = false
			} else {
				data.isWithdraw = false
				data.isExpense = true
			}
			createMutate(data, responses)
		}
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
				{
					type === "withdraw" ?
						<Fragment>
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
						</Fragment> :
						<Fragment>
							<Form.Item
								label={t("price")}
								name="amount"
								rules={[R_REQUIRED]}
							>
								<InputNumber className='w-100' />
							</Form.Item>
							<Form.Item
								label={t("text")}
								name="memo"
								rules={[R_REQUIRED]}
							>
								<Input.TextArea className='w-100' rows={3} />
							</Form.Item>
						</Fragment>
				}
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default FinanceAction