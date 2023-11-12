/* eslint-disable @typescript-eslint/ban-ts-comment */
import Table from '@/pages/Patients/components/Table'
import Box from '@/styles/Box'
import TopBtns from '@/styles/TopBtns'
import React, { Fragment } from 'react'
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import MyCalendar from '@/components/MyCalendar'
import Button from '@/components/form/Button';
import { Drawer } from 'antd';
import useToggleState from '@/hooks/useToggleState';

const Services: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)

	return (
		<Fragment>
			<TopBtns>
				<Button type="text" icon={<ArrowLeftOutlined />}>
					Back
				</Button>
				<Button type="primary" color="green6" icon={<PlusOutlined />} onClick={toggle}>
					Create
				</Button>
			</TopBtns>
			<Box>
				<Table />
			</Box>
			<Box>
				<MyCalendar />
			</Box>
			<Drawer title="Form" open={isOpen} onClose={toggle} width={600}>

			</Drawer>
		</Fragment>
	)
}

export default Services