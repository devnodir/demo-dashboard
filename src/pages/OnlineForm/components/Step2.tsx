import { PUBLIC_DOCTORS, PUBLIC_SERVICES } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useT from '@/hooks/useT'
import { R_REQUIRED } from '@/utils/rules'
import { Col, Form, Row } from 'antd'
import { useState } from 'react'

const Step2 = ({ form }: any) => {
	const t = useT()
	const [service, setService] = useState("")
	return (
		<Form
			layout="vertical"
			id="online-form"
			form={form}
		>
			<Row gutter={20}>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("service")}
						name="service_id"
						rules={[R_REQUIRED]}
					>
						<SelectApi
							endpoint={PUBLIC_SERVICES}
							showSearch
							allowClear
							onChange={(val) => setService(val)}
						/>
					</Form.Item>
				</Col>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("doctor")}
						name="doctor_id"
						rules={[R_REQUIRED]}
					>
						<SelectApi
							endpoint={PUBLIC_DOCTORS}
							query={{ "services[]": service }}
							showSearch
							allowClear
						/>
					</Form.Item>
				</Col>
			</Row>
		</Form>
	)
}

export default Step2