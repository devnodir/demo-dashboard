import useT from '@/hooks/useT'
import { R_REQUIRED } from '@/utils/rules'
import { Button, Form, Input, InputNumber, Select } from 'antd'
import React from 'react'

const WarehouseAction: React.FC = () => {

	const t = useT()

	return (
		<Form
			layout="vertical"
		>
			<Form.Item
				label={t("name_product")}
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
				label={t("category")}
				name="category"
			>
				<Select
					options={[]}
				/>
			</Form.Item>
			<Form.Item
				label={t("service")}
				name="service"
			>
				<Select
					options={[]}
				/>
			</Form.Item>
			<Form.Item
				label={t("quantity")}
				name="quantity"
				rules={[R_REQUIRED]}
			>
				<InputNumber className='w-100' />
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				{t("create")}
			</Button>
		</Form>
	)
}

export default WarehouseAction