import useT from '@/hooks/useT'
import { phoneFormatter } from '@/utils/formatter'
import { Col, Form, Input, InputNumber, Row } from 'antd'
import { FaPhone } from 'react-icons/fa6'

const Step3 = () => {
	const t = useT()
	return (
		<Form
			layout="vertical"
		>
			<Row gutter={20}>
				<Col span={24} xl={12}>
					<Form.Item
						label="First name"
						name="name"
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={24} xl={12}>
					<Form.Item
						label="Last name"
						name="name2"
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("l_phone")}
						name="phone_number"
						validateFirst
					>
						<InputNumber
							placeholder="+998 ** *** ** **"
							formatter={phoneFormatter}
							addonBefore={<FaPhone />}
						/>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default Step3