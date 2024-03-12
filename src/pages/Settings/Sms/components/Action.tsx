import { PATIENTS, SMS_TEMPLATES, TASKS, USERS } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import { STATUS_DONE, STATUS_PATIENT, STATUS_PRIORITY } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Input, Select, Spin, message } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { useEffect } from 'react'
import { BsCalendarFill } from 'react-icons/bs'

interface IFormData {
	name: string
	text: string
}

interface IProps {
	id: string | null
	onFinish: IVoid
}

const SmsAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${SMS_TEMPLATES}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(SMS_TEMPLATES)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", SMS_TEMPLATES)

	useEffect(() => {
		if (data) {
			const record: any = data?.data
			form.setFieldsValue(_.pick(record, ["name", "text"]))
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
					label={t("name")}
					name="name"
					rules={[R_REQUIRED, { min: 2 }]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label={t("text")}
					name="text"
					rules={[R_REQUIRED, { min: 2 }]}
				>
					<Input.TextArea />
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default SmsAction