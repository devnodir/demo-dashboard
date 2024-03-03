import { DOCTORS, ROLES } from '@/components/endpoints'
import AdditionalContact from '@/components/shared/Form/AdditionalContact'
import SelectApi from '@/components/shared/Form/SelectApi'
import { STATUS } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { phoneFormatter } from '@/utils/formatter'
import { R_PASSWORD, R_PHONE, R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Input, InputNumber, Select, Spin, TimePicker, message } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { useEffect } from 'react'
import { BsCalendarFill, BsClockFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash, FaLock, FaPhone, FaUser } from 'react-icons/fa6'

interface IProps {
	id: string | null
	onFinish: IVoid
}

interface IFormData {
	name: string
	role_id: string
	additional_contact: number
	phone_number: string
	birthday: Date
	password: string
	time: Date[]
	experience: string
	is_active: string
}

const DoctorAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()

	const { data, isLoading, isRefetching } = useApi(`${DOCTORS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(DOCTORS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", DOCTORS)

	useEffect(() => {
		if (data) {
			const record = data?.data
			form.setFieldsValue(_.pick(record, ["name", "role_id", "additional_contact", "phone_number", "experience", "is_active"]))
			if (record.birthday) form.setFieldValue("birthday", dayjs(record.birthday))
			form.setFieldValue("time", [dayjs(record.start_of_working_day), dayjs(record.end_of_working_day)])
		}
	}, [data])

	const submit = ({ time, ...data }: IFormData) => {

		const formData: any = {
			...data,
			experience: data.experience.toString(),
			phone_number: data.phone_number.toString(),
			start_of_working_day: dayjs(time[0]).toISOString(),
			end_of_working_day: dayjs(time[1]).toISOString(),
		}
		if (data.birthday) {
			formData.birthday = dayjs(data.birthday).toISOString()
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
		<Spin spinning={isLoading || isRefetching}>
			<Form
				layout="vertical"
				form={form}
				onFinish={submit}
			>
				<Form.Item
					label={t("full_name")}
					name="name"
					rules={[R_REQUIRED]}

				>
					<Input
						addonBefore={<FaUser />}
					/>
				</Form.Item>
				<Form.Item
					label={t("l_phone")}
					name="phone_number"
					rules={[R_REQUIRED, R_PHONE]}
					validateFirst
				>
					<InputNumber
						placeholder="+998 ** *** ** **"
						formatter={phoneFormatter}
						addonBefore={<FaPhone />}
					/>
				</Form.Item>
				<Form.Item
					label={t("specialty")}
					name="role_id"
					rules={[R_REQUIRED]}

				>
					<SelectApi
						showSearch
						allowClear
						endpoint={ROLES}
					/>
				</Form.Item>
				<Form.Item
					label={t("birthday")}
					name="birthday"
				>
					<DatePicker
						format="DD.MM.YYYY"
						style={{ width: "100%" }}
						suffixIcon={<BsCalendarFill />}
					/>
				</Form.Item>
				<Form.Item
					label={t("working_experience")}
					name="experience"
					rules={[R_REQUIRED]}
				>
					<InputNumber type="number" className='w-100' />
				</Form.Item>
				<Form.Item
					label={t("working_time")}
					name="time"
					rules={[R_REQUIRED]}
				>
					<TimePicker.RangePicker
						style={{ width: "100%" }}
						format="HH:mm"
						suffixIcon={<BsClockFill />}
					/>
				</Form.Item>
				<Form.Item
					label={t("status")}
					name="is_active"
				>
					<Select
						options={STATUS}
					/>
				</Form.Item>
				<Form.Item
					label={t("l_password")}
					name="password"
					validateFirst
					rules={[R_PASSWORD]}
				>
					<Input.Password
						addonBefore={<FaLock />}
						iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
						placeholder="********"
					/>
				</Form.Item>
				<AdditionalContact form={form} />
				<Button block type="primary" htmlType="submit" className='mt-4 text-uppercase' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default DoctorAction