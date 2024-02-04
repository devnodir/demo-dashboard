import { PATIENTS, SERVICES, TASKS } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import { STATUS } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, Form, Input, Select, Spin } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { useEffect } from 'react'

interface IFormData {
	name: string
	patient: string
	template: string
	services: string
	status: string
}

interface IProps {
	id: string | null
	onFinish: IVoid
}

const TasksAction: React.FC<IProps> = ({ id }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${TASKS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(TASKS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", TASKS)

	useEffect(() => {
		if (data) {
			const record = data?.data
			form.setFieldsValue(_.pick(record, ["responsible_users", "patient_id", "is_done", "text", "status", "priority"]))
			if (record.deadline) form.setFieldValue("deadline", dayjs(record.deadline))
		}
	}, [data])

	const submit = (data: IFormData) => {
		if (id) editMutate({ data, id }, responses)
		else createMutate(data, responses)
	}

	const responses = {
		// onSuccess: () => onFinish(),
		// onError: (err: any) => {
		// 	message.error(err.message)
		// }
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
					label={t("template")}
					name="template"
					rules={[R_REQUIRED]}
				>
					<Select
						showSearch
						allowClear
						options={[]}
					/>
				</Form.Item>
				<Form.Item
					label={t("services")}
					name="services"
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
					label={t("status")}
					name="status"
					rules={[R_REQUIRED]}
				>
					<Select
						options={STATUS}
					/>
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default TasksAction