import { phoneFormatter } from '@/utils/formatter'
import { R_PASSWORD, R_PHONE, R_REQUIRED } from '@/utils/rules'
import { Button, DatePicker, Form, Input, InputNumber, Radio, Select, TimePicker } from 'antd'
import React from 'react'
import { BsCalendarFill, BsClockFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash, FaLock, FaPhone, FaUser } from 'react-icons/fa6'

const specialties = [
	{ label: "Physical therapy", value: "Physical therapy" },
	{ label: "Dermatology", value: "Dermatology" },
	{ label: "Anesthesiology", value: "Anesthesiology" }
]

const status = [
	{ label: "Active", value: "active" },
	{ label: "Inactive", value: "inactive" },
]

const DoctorAction: React.FC = () => {


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
				label="Specialty"
				name="specialty"
			>
				<Select
					showSearch
					allowClear
					options={specialties}
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
				label="Working experience"
				name="experience"
			>
				<InputNumber type="number" className='w-100' />
			</Form.Item>
			<Form.Item
				label="Working time"
				name="time"
			>
				<TimePicker.RangePicker
					style={{ width: "100%" }}
					format="HH:mm"
					suffixIcon={<BsClockFill />}
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
			<Form.Item
				label="Branch"
				name="branch"
			>
				<Radio.Group>
					<Radio value={1} className='mb-2'>Yunusobod Filial</Radio>
					<Radio value={2} className='mb-2'>Mirobod Filial</Radio>
					<Radio value={3} className='mb-2'>Yakkasaroy Filial</Radio>
					<Radio value={4} className='mb-2'>Uchtepa Filial</Radio>
				</Radio.Group>
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-4'>
				CREATE
			</Button>
		</Form>
	)
}

export default DoctorAction