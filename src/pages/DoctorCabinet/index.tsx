import Box from '@/styles/Box'
import { Button, Col, DatePicker, Drawer, Flex, Row, Spin, Typography } from 'antd'
import React from 'react'
import Style from './Style'
import { EditOutlined } from '@ant-design/icons'
import { BsCalendarFill } from 'react-icons/bs'
import { FaFilter } from 'react-icons/fa6'
import MyButton from '@/components/antd/MyButton'
import BackButton from '@/components/shared/BackButton'
import { useParams } from 'react-router-dom'
import useApi from '@/hooks/useApi'
import { DOCTORS } from '@/components/endpoints'
import useT from '@/hooks/useT'
import { phoneFormatter } from '@/utils/formatter'
import dayjs from 'dayjs'
import DoctorAction from '../Doctors/components/Action'
import useToggleState from '@/hooks/useToggleState'

const DoctorCabinet: React.FC = () => {

	const t = useT()

	const { id } = useParams()
	const [isOpen, toggle] = useToggleState(false)

	const { data, refetch, isRefetching } = useApi(`${DOCTORS}/${id}`, { suspense: true })
	const record = data.data || {}

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
					<Row gutter={[24, 24]}>
						{
							record.name
							&& <Col lg={5} md={8} span={12} className='info-doctor'>
								<Typography.Text>{t("full_name")}</Typography.Text>
								<Typography.Text>{record.name}</Typography.Text>
							</Col>
						}
						{record.role &&
							<Col lg={5} md={8} span={12} className='info-doctor'>
								<Typography.Text>{t("specialty")}</Typography.Text>
								<Typography.Text>{record.role}</Typography.Text>
							</Col>
						}
						{
							record.experience && <Col lg={4} md={8} span={12} className='info-doctor'>
								<Typography.Text>{t("working_experience")}</Typography.Text>
								<Typography.Text>{`${record.experience} ${t("years")}`}</Typography.Text>
							</Col>
						}
						{
							record.phone_number &&
							<Col lg={5} md={8} span={12} className='info-doctor'>
								<Typography.Text>{t("l_phone")}</Typography.Text>
								<Typography.Text>{phoneFormatter(record.phone_number)}</Typography.Text>
							</Col>
						}
						<Col lg={5} md={8} span={12} className='d-none d-lg-block'>
							<Button type="primary" className='float-right' icon={<EditOutlined />} onClick={toggle}>Редактировать</Button>
						</Col>
						{
							record.birthday && <Col lg={5} md={8} span={12} className='info-doctor'>
								<Typography.Text>{t("birthday")}</Typography.Text>
								<Typography.Text>{dayjs(record.birthday).format("DD.MM.YYYY")}</Typography.Text>
							</Col>
						}
						{
							record.branch_name && <Col lg={5} md={8} span={12} className='info-doctor'>
								<Typography.Text>{t("branch")}</Typography.Text>
								<Typography.Text>{record.branch_name}</Typography.Text>
							</Col>
						}
						<Col lg={5} md={8} span={12} className='info-doctor'>
							<Typography.Text>{t("working_time")}</Typography.Text>
							<Typography.Text>{`${dayjs(record.start_of_working_day).format("HH:mm")} - ${dayjs(record.end_of_working_day).format("HH:mm")}`}</Typography.Text>
						</Col>
					</Row>
				</Box>
			</Spin>
			<Box className='mt-4'>
				<Flex align="center">
					<DatePicker.RangePicker style={{ maxWidth: 320 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<MyButton type="primary" className='ml-2 ml-md-4' icon={<FaFilter />}>Фильтр</MyButton>
				</Flex>
			</Box>
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t(id ? "edit_doctor" : "new_doctor")}
				destroyOnClose
				width={480}

			>
				<DoctorAction id={id ?? null} onFinish={onActionFinish} />
			</Drawer>
		</Style >
	)
}

export default DoctorCabinet