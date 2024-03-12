import { BONUS, SMS_TEMPLATES } from '@/components/endpoints'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Input, InputNumber, Spin, message } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { useEffect } from 'react'

interface IFormData {
	name: string
	description: string
	amount: number
	valid_from: Date
	valid_to: Date
}

interface IProps {
	id: string | null
	onFinish: IVoid
}

const BonusAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${BONUS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(BONUS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", BONUS)

	useEffect(() => {
		if (data) {
			const record: any = data?.data
			form.setFieldsValue(_.pick(record, ["name", "description", "amount"]))
			form.setFieldValue("valid_from", dayjs(record.valid_from))
			form.setFieldValue("valid_to", dayjs(record.valid_to))
		}
	}, [data])

	const submit = (formData: IFormData) => {
		const data = {
			...formData,
			valid_from: dayjs(formData.valid_from).format("YYYY-MM-DD"),
			valid_to: dayjs(formData.valid_to).format("YYYY-MM-DD")
		}
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
					label={t("name")}
					name="name"
					rules={[R_REQUIRED]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label={t("description")}
					name="description"
				>
					<Input.TextArea />
				</Form.Item>
				<Form.Item
					label={t("price")}
					name="amount"
					rules={[R_REQUIRED]}
				>
					<InputNumber style={{ width: "100%" }} />
				</Form.Item>
				<Form.Item
					label={t("from")}
					name="valid_from"
					rules={[R_REQUIRED]}
				>
					<DatePicker />
				</Form.Item>
				<Form.Item
					label={t("to")}
					name="valid_to"
					rules={[R_REQUIRED]}
				>
					<DatePicker />
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default BonusAction