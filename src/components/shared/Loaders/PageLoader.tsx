import { Spin } from 'antd'
import React from 'react'
import Style from './Style'

const PageLoader: React.FC = () => {
	return (
		<Style>
			<div className='page-loader'>
				<Spin />
			</div>
		</Style>
	)
}

export default PageLoader