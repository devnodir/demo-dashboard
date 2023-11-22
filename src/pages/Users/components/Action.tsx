import MyButton from '@/components/antd/MyButton'
import { phoneFormatter } from '@/utils/formatter'
import { R_PASSWORD, R_PHONE, R_REQUIRED } from '@/utils/rules'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select } from 'antd'
import React, { useState } from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash, FaLock, FaPhone, FaTrash, FaUser } from 'react-icons/fa6'

const role = [
	{ label: "Admin", value: "1" },
	{ label: "Moderator", value: "2" },
	{ label: "Contributor", value: "3" }
]

const branches = [
	{ label: "Yunusobod Filial", value: "1" },
	{ label: "Mirobod Filial", value: "2" },
	{ label: "Yakkasaroy Filial", value: "3" },
	{ label: "Uchtepa Filial", value: "4" },
]

const status = [
	{ label: "Active", value: "active" },
	{ label: "Inactive", value: "inactive" },
]

const UsersAction: React.FC = () => {


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
				label="Rol"
				name="rol"
			>
				<Select
					options={role}
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
				label="Birthday"
				name="birthday"
			>
				<DatePicker
					format="DD.MM.YYYY"
					style={{ width: "100%" }}
					suffixIcon={<BsCalendarFill />}
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
			<Form.Item
				label="Password"
				name="password"
				validateFirst
				rules={[R_REQUIRED, R_PASSWORD]}
			>
				<Input.Password
					addonBefore={<FaLock />}
					iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
					placeholder="********"
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
			<MyButton color='green' shape="circle" className='mb-4 float-right' type="primary" onClick={addPhone}>
				<PlusOutlined />
			</MyButton>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				CREATE
			</Button>
		</Form>
	)
}

export default UsersAction