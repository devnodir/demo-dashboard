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
				label={t("name_category")}
				name="name"
				rules={[R_REQUIRED]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label={t("parent_category")}
				name="parent_category"
			>
				<Select
					options={[]}
				/>
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				{t("create")}
			</Button>
		</Form>
	)
}

export default WarehouseAction