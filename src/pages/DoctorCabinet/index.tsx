import Box from '@/styles/Box'
import { Button, Col, DatePicker, Flex, Row, Typography } from 'antd'
import React from 'react'
import Style from './Style'
import { EditOutlined } from '@ant-design/icons'
import { BsCalendarFill } from 'react-icons/bs'
import { FaFilter } from 'react-icons/fa6'
import MyButton from '@/components/antd/MyButton'
import BackButton from '@/components/shared/BackButton'

const DoctorCabinet: React.FC = () => {
	return (
		<Style className='doctor-cabinet'>
			<Flex justify="space-between">
				<BackButton />
				<Button type="primary" className='d-lg-none' icon={<EditOutlined />}>Редактировать</Button>
			</Flex>
			<Box>
				<Row gutter={[24, 24]}>
					<Col lg={5} md={8} span={12} className='info-doctor'>
						<Typography.Text>Ф.И.О врача</Typography.Text>
						<Typography.Text>Абдуназаров Нодирбек</Typography.Text>
					</Col>
					<Col lg={5} md={8} span={12} className='info-doctor'>
						<Typography.Text>Cпециальность</Typography.Text>
						<Typography.Text>Терапевт</Typography.Text>
					</Col>
					<Col lg={4} md={8} span={12} className='info-doctor'>
						<Typography.Text>Стаж работы</Typography.Text>
						<Typography.Text>15 лет </Typography.Text>
					</Col>
					<Col lg={5} md={8} span={12} className='info-doctor'>
						<Typography.Text>Номер телефона </Typography.Text>
						<Typography.Text>+998 (99) 008-27-35 </Typography.Text>
					</Col>
					<Col lg={5} md={8} span={12} className='d-none d-lg-block'>
						<Button type="primary" className='float-right' icon={<EditOutlined />}>Редактировать</Button>
					</Col>
					<Col lg={5} md={8} span={12} className='info-doctor'>
						<Typography.Text>День рождения </Typography.Text>
						<Typography.Text>20.05.1985</Typography.Text>
					</Col>
					<Col lg={5} md={8} span={12} className='info-doctor'>
						<Typography.Text>Филиал</Typography.Text>
						<Typography.Text>Yunusobod filiali</Typography.Text>
					</Col>
					<Col lg={5} md={8} span={12} className='info-doctor'>
						<Typography.Text>Рабочее время</Typography.Text>
						<Typography.Text>08:00 - 20:00</Typography.Text>
					</Col>
				</Row>
			</Box>
			<Box className='mt-4'>
				<Flex align="center">
					<DatePicker.RangePicker style={{ maxWidth: 320 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<MyButton type="primary" className='ml-2 ml-md-4' icon={<FaFilter />}>Фильтр</MyButton>
				</Flex>
			</Box>
		</Style>
	)
}

export default DoctorCabinet