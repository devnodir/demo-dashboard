import React from 'react'
import StyleWrapper from './Style'
import { theme } from 'antd';
import { BsSearch } from "react-icons/bs"


const HeadSearch: React.FC = () => {

	const { token } = theme.useToken();

	return (
		<StyleWrapper token={token}>
			<div className='keyboard' onClick={(e) => e.stopPropagation()}>
				<BsSearch />
				<div>
					⌘ + K
				</div>
			</div>
		</StyleWrapper>
	)
}

export default HeadSearch