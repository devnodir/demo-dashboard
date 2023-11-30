import useActivePath from '@/hooks/useActivePath';
import items, { MenuItem } from '@/routes/navItems';
import { Menu } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import StyleWrapper from "./Style";

const Sidebar: React.FC = () => {

	const navigate = useNavigate()
	const { active } = useActivePath(items)
	const { t } = useTranslation()

	const itemsLocale: MenuItem[] = items.map((el: any) => {
		return {
			...el,
			label: t(el.label)
		}
	})

	return (
		<StyleWrapper width={120}>
			<Menu
				mode="inline"
				items={itemsLocale}
				selectedKeys={active}
				onSelect={(item) => {
					navigate(item?.key)
				}}
			/>
		</StyleWrapper>
	)
}

export default Sidebar