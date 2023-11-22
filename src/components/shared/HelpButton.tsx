import { CommentOutlined, CustomerServiceOutlined } from '@ant-design/icons'
import { FloatButton } from 'antd'
import React from 'react'

const HelpButton: React.FC = () => {
	return (
		<FloatButton.Group
			trigger="click"
			type="primary"
			style={{ right: 32, bottom: 32 }}
			icon={<CustomerServiceOutlined />}
		>
			<FloatButton />
			<FloatButton icon={<CommentOutlined />} />
		</FloatButton.Group>
	)
}

export default HelpButton