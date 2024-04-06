import useT from '@/hooks/useT'
import { phoneFormatter } from '@/utils/formatter'
import { R_REQUIRED } from '@/utils/rules'
import { Col, Form, Input, InputNumber, Row } from 'antd'
import { FaPhone } from 'react-icons/fa6'

const Step3 = ({ form }: any) => {
	const t = useT()
	return (
		<Form
			layout="vertical"
			form={form}
			id="online-form"
		>
			<Row gutter={20}>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("full_name")}
						name="name"
						rules={[R_REQUIRED]}
					>
						<Input />
					</Form.Item>
				</Col>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("l_phone")}
						name="phone_number"
						rules={[R_REQUIRED]}
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