import { Spin } from 'antd'
import React from 'react'
import Style from './Style'

const ScreenLoader: React.FC = () => {
	return (
		<Style>
			<div className='screen-loader'>
				<div className="screen-loader-content">
					<img src="/logo.svg" alt="" />
					<Spin />
				</div>
			</div>
		</Style>
	)
}

export default ScreenLoader