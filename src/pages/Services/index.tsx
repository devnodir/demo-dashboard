import Table from '@/components/Table'
import Box from '@/styles/Box'
import TopBtns from '@/styles/TopBtns'
import { Button } from 'antd'
import React from 'react'
import { PlusOutlined, ArrowLeftOutlined } from '@ant-design/icons';

const Services: React.FC = () => {
	return (
		<div>
			<TopBtns>
				<Button type="text" icon={<ArrowLeftOutlined />}>
					Back
				</Button>
				<Button type="primary" icon={<PlusOutlined />}>
					Create
				</Button>
			</TopBtns>
			<Box>
				<Table />
			</Box>
		</div>
	)
}

export default Services