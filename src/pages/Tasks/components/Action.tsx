import { PATIENTS, TASKS, USERS } from '@/components/endpoints'
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
	responsible_users: string[]
	patient_id: string
	deadline: Date
	is_done: boolean
	text: string
	status: string
	priority: string
}

interface IProps {
	id: string | null
	onFinish: IVoid
}

const TasksAction: React.FC<IProps> = ({ id, onFinish }) => {

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
					label={t("task_name")}
					name="text"
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
				<Form.Item
					label={t("deadline")}
					name="deadline"
					rules={[R_REQUIRED]}
				>
					<DatePicker
						format="DD.MM.YYYY"
						style={{ width: "100%" }}
						suffixIcon={<BsCalendarFill />}
					/>
				</Form.Item>
				<Form.Item
					label={t("priority")}
					name="priority"
					rules={[R_REQUIRED]}
				>
					<Select
						options={STATUS_PRIORITY}
					/>
				</Form.Item>
				<Form.Item
					label={t("done")}
					name="is_done"
					rules={[R_REQUIRED]}
				>
					<Select
						options={STATUS_DONE}
					/>
				</Form.Item>
				<Form.Item
					label={t("status")}
					name="status"
					rules={[R_REQUIRED]}
				>
					<Select
						options={STATUS_PATIENT}
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