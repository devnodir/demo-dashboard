import { BRANCH, ROLES, USERS } from '@/components/endpoints'
import AdditionalContact from '@/components/shared/Form/AdditionalContact'
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
import { FaEye, FaEyeSlash, FaLock, FaPhone, FaUser } from 'react-icons/fa6'

interface IFormData {
	name: string
	phone_number: number
	role: string
	branch: string
	birthday: string
	is_active: boolean
	password: string
	additional_contact: {
		type: "phone_number" | "email" | "telegram",
		value: string | number
	}
}

interface IProps {
	id: string | null
	onFinish: IVoid
}

const UsersAction: React.FC<IProps> = ({ onFinish, id }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()


	const { data: userData, isLoading: getLoading } = useApi(`${USERS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { data: branchData, isLoading: branchLoading } = useApi(BRANCH)
	const { data: rolesData, isLoading: rolesLoading } = useApi(ROLES)

	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(USERS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", USERS)

	useEffect(() => {
		if (userData) {
			const data = userData?.data
			form.setFieldsValue(_.pick(data, ["name", "phone_number", "role", "branch", "birthday", "is_active", "additional_contact"]))
		}
	}, [userData])

	const submit = (data: IFormData) => {
		const formData: any = {
			...data,
			phone_number: data.phone_number.toString()
		}
		if (data.birthday) {
			formData.birthday = dayjs(data.birthday).toISOString()
		}
		if (id) editMutate({ data, id }, responses)
		else createMutate(formData, responses)
	}

	const responses = {
		onSuccess: () => onFinish(),
		onError: (err: any) => {
			message.error(err.message)
		}
	}

	return (
		<Spin spinning={getLoading}>
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
					label={t("role")}
					name="role"
					rules={[R_REQUIRED]}
				>
					<Select
						options={mapSelectData(rolesData)}
						showSearch
						loading={rolesLoading}
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
					label={t("l_password")}
					name="password"
					validateFirst
					rules={id ? [R_PASSWORD] : [R_REQUIRED, R_PASSWORD]}
				>
					<Input.Password
						addonBefore={<FaLock />}
						iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
						placeholder="********"
					/>
				</Form.Item>
				<AdditionalContact form={form} />
				<Button block type="primary" htmlType="submit" className='mt-2 text-uppercase' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default UsersAction