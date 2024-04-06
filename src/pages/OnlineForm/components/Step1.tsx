import { R_REQUIRED } from '@/utils/rules'
import { Col, DatePicker, Form, Row, TimePicker } from 'antd'
import dayjs from 'dayjs'

const Step1 = ({ form }: any) => {
	return (
		<Form
			layout="vertical"
			id="online-form"
			form={form}
		>
			<Row gutter={[24, 24]}>
				<Col lg={12} span={24}>
					<Form.Item
						name="appointment_date"
						rules={[R_REQUIRED]}
					>
						<DatePicker
							defaultOpen={true}
							format="DD.MM.YYYY"
							disabledDate={(current) => {
								return current < dayjs().add(-1, "day")
							}}
						/>
					</Form.Item>
				</Col>
				<Col lg={12} span={24}>
					<Form.Item
						name="appointment_time"
						rules={[R_REQUIRED]}
					>
						<TimePicker format="HH:mm" />
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default Step1