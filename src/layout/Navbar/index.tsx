import MyButton from '@/components/antd/MyButton';
import FullScreenHandler from '@/components/shared/FullScreenHandler';
import HeadSearch from '@/components/shared/HeadSearch';
import LangSelect from '@/components/shared/LangSelect';
import ModeHandler from '@/components/shared/ModeHandler';
import Notifications from '@/components/shared/Notifications';
import useT from '@/hooks/useT';
import useMainStore from '@/store/main';
import { colors } from '@/utils/theme';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Tag, Typography } from 'antd';
import React from 'react';
import { BsArrowLeftSquareFill, BsGearWide } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import StyleWrapper from './Style';

const Navbar: React.FC = () => {

	const { mode, setMobileMenu } = useMainStore()

	return (
		<StyleWrapper>
			<div className='logo d-lg-flex'>
				<img src={`/assets/logo-${mode}.svg`} alt='logo' />
			</div>
			<div className='d-lg-none pl-2 menu-btn' onClick={() => setMobileMenu(true)}>
				<MyButton type="primary" icon={<MenuUnfoldOutlined />} />
			</div>
			<div className='content'>
				<HeadSearch />
				<div className="content-right">
					<div className="buttons">
						<ModeHandler />
						<FullScreenHandler />
						<Notifications />
						<LangSelect />
					</div>
					<UserMenu />
				</div>
			</div>
		</StyleWrapper>
	)
}

export default Navbar


const UserMenu: React.FC = () => {
	const { setIsAuth } = useMainStore()
	const t = useT()

	const items: MenuProps["items"] = [
		{
			key: "settings",
			label: t("settings"),
			icon: <BsGearWide />,
		},
		{
			key: "logout",
			label: t("logout"),
			icon: <BsArrowLeftSquareFill />,
			danger: true,
			onClick: () => {
				setIsAuth(false)
			}
		},
	]

	return (
		<Dropdown menu={{ items }} trigger={["click"]} overlayStyle={{ width: 200 }} placement="bottomRight">
			<div className="user">
				<div className='user-info'>
					<Typography.Text>Nodirbek Abdunazarov</Typography.Text>
					<Tag color={colors.success} className='mr-0'>ADMIN</Tag>
				</div>
				<div className="user-img">
					<FaUser />
				</div>
			</div>
		</Dropdown>

	)
}