import useActivePath from '@/hooks/useActivePath';
import items, { MenuItem } from '@/routes/navItems';
import { Drawer, Menu } from 'antd';
import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import StyleWrapper from "./Style";
import useMainStore from '@/store/main';

const Sidebar: React.FC = () => {

	const navigate = useNavigate()
	const { active } = useActivePath(items)
	const { t } = useTranslation()
	const { isMobileMenu, setMobileMenu } = useMainStore()

	const itemsLocale: MenuItem[] = items.map((el: any) => {
		return {
			...el,
			label: t(el.label)
		}
	})

	const menuRender = () => {
		return <Menu
			mode="inline"
			items={itemsLocale}
			selectedKeys={active}
			onSelect={(item) => {
				navigate(item?.key)
				setMobileMenu(false)
			}}
		/>
	}

	return (
		<Fragment>
			<StyleWrapper className='d-none d-lg-block' width={120}>
				{menuRender()}
			</StyleWrapper>
			<Drawer
				open={isMobileMenu}
				onClose={() => setMobileMenu(false)}
				// title={<img src={`/assets/logo-${mode}.svg`} style={{ width: 120, display: "flex" }} />}
				placement="left"
				width={120}
				styles={{ body: { padding: 0 } }}
			>
				<StyleWrapper width={120}>
					{menuRender()}
				</StyleWrapper>
			</Drawer>
		</Fragment >
	)
}

export default Sidebar