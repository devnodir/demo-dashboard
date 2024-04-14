import MyButton from '@/components/antd/MyButton'
import { INTEGRATION, INTEGRATION_SMS } from '@/components/endpoints'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import Box from '@/styles/Box'
import { R_REQUIRED } from '@/utils/rules'
import { SaveFilled } from '@ant-design/icons'
import { Col, Form, Input, Row, message } from 'antd'
import _ from 'lodash'
import { useEffect } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const Intergrations = () => {

	const [form] = Form.useForm()
	const { data, isLoading } = useApi(INTEGRATION_SMS)
	const { mutate, isLoading: isCreating } = useApiMutation(INTEGRATION)

	const record = data?.data
	useEffect(() => {
		if (record) form.setFieldsValue(_.pick(record, ["provider", "login", "password", "orginator"]))
	}, [record])

	const submit = (data: any) => {
		mutate(data, {
			onSuccess: () => {
				message.success("OK")
			},
			onError: (err) => {
				message.success(err?.message)
			}
		})
	}

	return (
		<Box style={{ maxWidth: 700 }} loading={isLoading}>
			<Form
				layout="vertical"
				form={form}
				onFinish={submit}
			>
				<Row gutter={{ xs: 12, sm: 12, md: 24 }}>
					<Col md={12} span={24}>
						<Form.Item
							label="Provider"
							name="provider"
							rules={[R_REQUIRED]}
						>
							<Input />
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
				<MyButton htmlType="submit" type="primary" className='float-right mt-4' icon={<SaveFilled />} style={{ minWidth: 150 }} loading={isCreating}>SAVE</MyButton>
			</Form>
		</Box>
	)
}

export default Intergrations