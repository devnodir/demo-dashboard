import { Spin } from 'antd'
import React from 'react'
import logo from "@/assets/logo.svg"
import Style from './Style'

const ScreenLoader: React.FC = () => {
	return (
		<Style>
			<div className='screen-loader'>
				<div className="screen-loader-content">
					<img src={logo} alt="" />
					<Spin />
				</div>
			</div>
		</Style>
	)
}

export default ScreenLoader