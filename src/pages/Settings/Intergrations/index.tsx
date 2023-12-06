import MyButton from '@/components/antd/MyButton'
import Box from '@/styles/Box'
import { R_REQUIRED } from '@/utils/rules'
import { SaveFilled } from '@ant-design/icons'
import { Col, Form, Input, Row, Select } from 'antd'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const options = [
	{ label: "Eskiz.uz", value: "1" },
	{ label: "Sms.to", value: "2" },
	{ label: "Getsms.uz", value: "3" },
]

const Intergrations = () => {
	return (
		<Box style={{ maxWidth: 700 }}>
			<Form
				layout="vertical"
			>
				<Row gutter={{ xs: 12, sm: 12, md: 24 }}>
					<Col md={12} span={24}>
						<Form.Item
							label="Provider"
							name="provider"
							rules={[R_REQUIRED]}
						>
							<Select options={options} showSearch />
						</Form.Item>
					</Col>
					<Col md={12} span={24}>
						<Form.Item
							label="Login"
							name="login"
							rules={[R_REQUIRED]}
						>
							<Input />
						</Form.Item>
					</Col>
					<Col md={12} span={24}>
						<Form.Item
							label="Password"
							name="password"
							rules={[R_REQUIRED]}
						>
							<Input.Password
								iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
							/>
						</Form.Item>
					</Col>
					<Col md={12} span={24}>
						<Form.Item
							label="Orginator"
							name="orginator"
							rules={[R_REQUIRED]}
						>
							<Input />
						</Form.Item>
					</Col>
				</Row>
				<MyButton type="primary" className='float-right mt-4' icon={<SaveFilled />} style={{ minWidth: 150 }}>SAVE</MyButton>
			</Form>
		</Box>
	)
}

export default Intergrations