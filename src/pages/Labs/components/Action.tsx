import useT from '@/hooks/useT'
import { R_REQUIRED } from '@/utils/rules'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import React from 'react'

const status = [
	{ label: "Active", value: "active" },
	{ label: "Inactive", value: "inactive" },
]

const branches = [
	{ label: "Yunusobod Filial", value: "1" },
	{ label: "Mirobod Filial", value: "2" },
	{ label: "Yakkasaroy Filial", value: "3" },
	{ label: "Uchtepa Filial", value: "4" },
]

const LabsAction: React.FC = () => {

	const t = useT()

	return (
		<Form
			layout="vertical"
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
				label={t("parent_service")}
				name="parent"
			>
				<Select
					options={[]}
				/>
			</Form.Item>
			<Form.Item
				label={t("branches")}
				name="branches"
			>
				<Select
					options={branches}
					mode="multiple"
				/>
			</Form.Item>
			<Form.Item
				label={t("status")}
				name="status"
			>
				<Select
					options={status}
				/>
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				{t("create")}
			</Button>
		</Form>
	)
}

export default LabsAction