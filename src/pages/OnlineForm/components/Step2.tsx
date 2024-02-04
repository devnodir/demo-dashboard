import { DOCTORS, SERVICES } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useT from '@/hooks/useT'
import { Col, Form, Row } from 'antd'

const Step2 = () => {
	const t = useT()
	return (
		<Form
			layout="vertical"
		>
			<Row gutter={20}>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("service")}
					>
						<SelectApi
							endpoint={SERVICES}
							showSearch
							allowClear
						/>
					</Form.Item>
				</Col>
				<Col span={24} xl={12}>
					<Form.Item
						label={t("doctor")}
					>
						<SelectApi
							endpoint={DOCTORS}
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