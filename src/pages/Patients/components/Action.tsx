import MyButton from '@/components/antd/MyButton'
import { phoneFormatter } from '@/utils/formatter'
import { R_PHONE, R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd'
import React, { useState } from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import { FaLocationDot, FaPhone, FaTrash, FaUser } from 'react-icons/fa6'

const tags = [
	{ label: "VIP", value: "vip", color: "red" },
	{ label: "50%", value: "50" },
	{ label: "70%", value: "70" }
]

const PatientAction: React.FC = () => {

	const [phones, setPhones] = useState<number[]>([1])

	const addPhone = () => {
		phones.push(phones[phones.length - 1] + 1)
		setPhones([...phones])
	}

	const deletePhone = (index: number) => {
		phones.splice(index, 1)
		setPhones([...phones])
	}

	return (
		<Form
			layout="vertical"
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[R_REQUIRED]}
			>
				<Input
					addonBefore={<FaUser />}
				/>
			</Form.Item>
			<Form.Item
				label="Phone number"
				name="phone"
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
				label="Address"
				name="address"
				rules={[R_REQUIRED]}
			>
				<Input
					addonBefore={<FaLocationDot />}
				/>
			</Form.Item>
			<Form.Item
				label="Tags"
				name="tags"
			>
				<Select
					mode="multiple"
					allowClear
					options={tags}
				/>
			</Form.Item>
			<Form.Item
				label="Birthday"
				name="birthday"
			>
				<DatePicker
					format="DD.MM.YYYY"
					style={{ width: "100%" }}
					suffixIcon={<BsCalendarFill />}
				/>
			</Form.Item>
			{
				phones.map((item, index) => (
					<Form.Item
						label={`Additional phone (${index + 1})`}
						name={["additional_phone", item]}
						rules={[R_PHONE]}
						validateFirst
						key={item}
					>
						<Row
							gutter={4}
						>
							<Col span={20}>
								<InputNumber
									placeholder="+998 ** *** ** **"
									formatter={phoneFormatter}
									addonBefore={<FaPhone />}
								/>
							</Col>
							<Col span={4}>
								<Button danger disabled={phones.length === 1} type="text" className='float-right' onClick={() => deletePhone(index)}>
									<FaTrash />
								</Button>
							</Col>
						</Row>
					</Form.Item>

				))
			}

			<MyButton color={colors.success} shape="circle" className='mb-4 float-right' type="primary" onClick={addPhone}>
				<PlusOutlined />
			</MyButton>
			<Button block type="primary" htmlType="submit" >
				CREATE
			</Button>
		</Form>
	)
}

export default PatientAction