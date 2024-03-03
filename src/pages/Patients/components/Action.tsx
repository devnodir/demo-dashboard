import { BRANCH, PATIENTS, USERS } from '@/components/endpoints'
import AdditionalContact from '@/components/shared/Form/AdditionalContact'
import SelectApi from '@/components/shared/Form/SelectApi'
import { STATUS_PATIENT } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { phoneFormatter } from '@/utils/formatter'
import { mapSelectData } from '@/utils/methods'
import { R_PASSWORD, R_PHONE, R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Input, InputNumber, Select, Spin, message } from 'antd'
import dayjs from 'dayjs'
import _ from 'lodash'
import React, { useEffect } from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash, FaLocationDot, FaLock, FaPhone, FaUser } from 'react-icons/fa6'

interface IProps {
	id: string | null
	onFinish: IVoid
}

interface IFormData {
	name: string
	phone_number: number
	additional_contact: any[]
	address: string
	birthday: Date
	password: string
	branch: string
	status: string
	responsible_users: string[]
}

const PatientAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data, isLoading } = useApi(`${PATIENTS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(PATIENTS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", PATIENTS)
	const { data: branchData, isLoading: branchLoading } = useApi(BRANCH)


	useEffect(() => {
		if (data) {
			const record = data?.patient
			form.setFieldsValue(_.pick(record, ["name", "address", "additional_contact", "phone_number", "status", "responsible_users", "branch"]))
			if (record.birthday) form.setFieldValue("birthday", dayjs(record.birthday))
		}
	}, [data])

	const submit = (data: IFormData) => {
		const formData: any = {
			...data,
			phone_number: data.phone_number.toString()
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
					label={t("address")}
					name="address"
				>
					<Input
						addonBefore={<FaLocationDot />}
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
					label={t("branches")}
					name="branch"
					rules={[R_REQUIRED]}

				>
					<Select
						options={mapSelectData(branchData)}
						mode="multiple"
						loading={branchLoading}
					/>
				</Form.Item>
				<Form.Item
					label={t("responsible_users")}
					name="responsible_users"
				>
					<SelectApi
						mode="multiple"
						allowClear
						showSearch
						endpoint={USERS}
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
				<Button block type="primary" htmlType="submit" className="text-uppercase" loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default PatientAction