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

const ServiceAction: React.FC = () => {


	return (
		<Form
			layout="vertical"
		>
			<Form.Item
				label="Service name"
				name="name"
				rules={[R_REQUIRED]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Price"
				name="price"
				rules={[R_REQUIRED]}
			>
				<InputNumber className='w-100' />
			</Form.Item>
			<Form.Item
				label="Parent service"
				name="parent"
			>
				<Select
					options={[]}
				/>
			</Form.Item>
			<Form.Item
				label="Branches"
				name="branches"
			>
				<Select
					options={branches}
					mode="multiple"
				/>
			</Form.Item>
			<Form.Item
				label="Status"
				name="status"
			>
				<Select
					options={status}
				/>
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				CREATE
			</Button>
		</Form>
	)
}

export default ServiceAction