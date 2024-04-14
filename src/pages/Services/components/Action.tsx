import { BRANCH, SERVICES } from '@/components/endpoints'
import { CURRENCIES } from '@/components/variables'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { mapSelectData } from '@/utils/methods'
import { R_REQUIRED } from '@/utils/rules'
import { Button, Checkbox, Form, Input, InputNumber, Select, Spin, message } from 'antd'
import _ from 'lodash'
import React, { useEffect } from 'react'

interface IProps {
	id: string | null
	onFinish: IVoid
}

interface IFormData {
	name: string
	price: string
	currency: string
	branch: string[]
	is_active: boolean
}

const ServiceAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm<IFormData>()

	const { data: branchData, isLoading: branchLoading } = useApi(BRANCH)
	const { data: serviceData, isLoading: serviceLoading } = useApi(`${SERVICES}/${id}`, { enabled: Boolean(id), cacheTime: 0 })

	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(SERVICES)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", SERVICES)

	useEffect(() => {
		if (serviceData) {
			const data = serviceData?.data
			form.setFieldsValue(_.pick(data, ["name", "price", "currency", "branch"]))
		}
	}, [serviceData])

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
		<Spin spinning={serviceLoading}>
			<Form
				layout="vertical"
				form={form}
				onFinish={submit}
			>
				<Form.Item
					label={t("service_name")}
					name="name"
					rules={[R_REQUIRED]}
				>
					<Input />
				</Form.Item>
				<Form.Item
					label={t("price")}
					name="price"
					rules={[R_REQUIRED]}
				>
					<InputNumber className='w-100' />
				</Form.Item>
				<Form.Item
					label={t("branches")}
					name="branch"
				>
					<Select
						options={mapSelectData(branchData)}
						mode="multiple"
						loading={branchLoading}
					/>
				</Form.Item>
				<Form.Item
					label={t("currency")}
					name="currency"
				>
					<Select
						options={CURRENCIES}
					/>
				</Form.Item>
				<Form.Item
					valuePropName="checked"
					name="is_on_online_form"
				>
					<Checkbox>{t("is_on_online_form")}</Checkbox>
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default ServiceAction