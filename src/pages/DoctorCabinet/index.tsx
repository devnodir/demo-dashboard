import Box from '@/styles/Box'
import { Button, Col, DatePicker, Row, Typography } from 'antd'
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
			<BackButton />
			<Box>
				<Row gutter={[24, 24]}>
					<Col lg={5} className='info-doctor'>
						<Typography.Text>Ф.И.О врача</Typography.Text>
						<Typography.Text>Абдуназаров Нодирбек</Typography.Text>
					</Col>
					<Col lg={5} className='info-doctor'>
						<Typography.Text>Cпециальность</Typography.Text>
						<Typography.Text>Терапевт</Typography.Text>
					</Col>
					<Col lg={4} className='info-doctor'>
						<Typography.Text>Стаж работы</Typography.Text>
						<Typography.Text>15 лет </Typography.Text>
					</Col>
					<Col lg={5} className='info-doctor'>
						<Typography.Text>Номер телефона </Typography.Text>
						<Typography.Text>+998 (99) 008-27-35 </Typography.Text>
					</Col>
					<Col lg={5}>
						<Button type="primary" className='float-right' icon={<EditOutlined />}>Редактировать</Button>
					</Col>
					<Col lg={5} className='info-doctor'>
						<Typography.Text>День рождения </Typography.Text>
						<Typography.Text>20.05.1985</Typography.Text>
					</Col>
					<Col lg={5} className='info-doctor'>
						<Typography.Text>Филиал</Typography.Text>
						<Typography.Text>Yunusobod filiali</Typography.Text>
					</Col>
					<Col lg={5} className='info-doctor'>
						<Typography.Text>Рабочее время</Typography.Text>
						<Typography.Text>08:00 - 20:00</Typography.Text>
					</Col>
				</Row>
			</Box>
			<Box className='mt-4'>
				<DatePicker.RangePicker style={{ maxWidth: 320 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
				<MyButton type="primary" className='ml-4' icon={<FaFilter />}>Фильтр</MyButton>
			</Box>
		</Style>
	)
}

export default DoctorCabinet