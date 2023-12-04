import { IChildren } from '@/types/helper.type';
import React from 'react';
import StyleWrapper from './Style';


interface IProps {
	children: IChildren
}

const Pages: React.FC<IProps> = ({ children }) => {
	return (
		<StyleWrapper className='pages' id='app-pages'>
			<div style={{ padding: 24 }}>
				{children}
			</div>
			{/* <div className="footer">
				<Typography.Text>©2023 Created by <a href='https://devnodir.uz'>DEVNODIR</a></Typography.Text>
			</div> */}
		</StyleWrapper>
	)
}

export default Pages