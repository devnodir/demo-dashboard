import { PATIENTS } from '@/components/endpoints'
import BackButton from '@/components/shared/BackButton'
import useApi from '@/hooks/useApi'
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import Box from '@/styles/Box'
import { phoneFormatter } from '@/utils/formatter'
import { EditOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Flex, Row, Spin, Typography } from 'antd'
import dayjs from 'dayjs'
import React from 'react'
import { useParams } from 'react-router-dom'
import PatientAction from '../Patients/components/Action'
import Style from './Style'

const PatientCabinet: React.FC = () => {

	const t = useT()

	const { id } = useParams()
	const [isOpen, toggle] = useToggleState(false)

	const { data, refetch, isRefetching } = useApi(`${PATIENTS}/${id}`, { suspense: true })
	const record = data.patient || {}

	const onActionFinish = () => {
		refetch()
		toggle()
	}


	return (
		<Style className='doctor-cabinet'>
			<Flex justify="space-between">
				<BackButton />
				<Button type="primary" className='d-lg-none' icon={<EditOutlined />} onClick={toggle}>Редактировать</Button>
			</Flex>
			<Spin spinning={isRefetching}>
				<Box>
					<Row>
						<Col span={24} md={24} lg={20}>
							<Row gutter={[24, 24]}>
								{
									record.name
									&& <Col lg={5} md={8} span={12} className='info-doctor'>
										<Typography.Text>{t("full_name")}</Typography.Text>
										<Typography.Text>{record.name}</Typography.Text>
									</Col>
								}
								{
									record.phone_number &&
									<Col lg={5} md={8} span={12} className='info-doctor'>
										<Typography.Text>{t("l_phone")}</Typography.Text>
										<Typography.Text>{phoneFormatter(record.phone_number)}</Typography.Text>
									</Col>
								}
								{
									record.address &&
									<Col lg={5} md={8} span={12} className='info-doctor'>
										<Typography.Text>{t("address")}</Typography.Text>
										<Typography.Text>{record.address}</Typography.Text>
									</Col>
								}
								{
									record.birthday && <Col lg={5} md={8} span={12} className='info-doctor'>
										<Typography.Text>{t("birthday")}</Typography.Text>
										<Typography.Text>{dayjs(record.birthday).format("DD.MM.YYYY")}</Typography.Text>
									</Col>
								}
							</Row>
						</Col>
						<Col span={0} md={0} lg={4}>
							<Button type="primary" className='float-right' icon={<EditOutlined />} onClick={toggle}>Редактировать</Button>
						</Col>
					</Row>

				</Box>
			</Spin>
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t(id ? "edit_patient" : "new_patient")}
				destroyOnClose
				width={480}

			>
				<PatientAction id={id ?? null} onFinish={onActionFinish} />
			</Drawer>
		</Style >
	)
}

export default PatientCabinet