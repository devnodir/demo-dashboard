import React from 'react'
import { Menu, theme } from 'antd';
import StyleWrapper from "./Style"
import items from '@/routes/navItems'
import useActivePath from '@/hooks/useActivePath';
import { useNavigate } from 'react-router-dom';


const Sidebar: React.FC = () => {

	const navigate = useNavigate()
	const { active } = useActivePath(items)
	const { token } = theme.useToken();


	return (
		<StyleWrapper token={token} width={120}>
			<Menu
				mode="inline"
				items={items}
				selectedKeys={active}
				onSelect={({ key }) => {
					navigate(key)
				}}
			/>
		</StyleWrapper>
	)
}

export default Sidebar