import { IChildren } from '@/types/helper.type'
import React from 'react'
import StyleWrapper from './Style'
import { Typography } from "antd";


interface IProps {
	children: IChildren
}

const Pages: React.FC<IProps> = ({ children }) => {
	return (
		<StyleWrapper>
			<div style={{ padding: 24, textAlign: 'center' }}>
				{children}
			</div>
			<div className="footer">
				<Typography.Text>©2023 Created by DEVNODIR</Typography.Text>
			</div>
		</StyleWrapper>
	)
}

export default Pages