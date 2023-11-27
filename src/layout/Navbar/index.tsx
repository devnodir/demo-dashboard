import FullScreenHandler from '@/components/shared/FullScreenHandler';
import HeadSearch from '@/components/shared/HeadSearch';
import LangSelect from '@/components/shared/LangSelect';
import ModeHandler from '@/components/shared/ModeHandler';
import Notifications from '@/components/shared/Notifications';
import useMainStore from '@/store/main';
import { colors } from '@/utils/theme';
import { Dropdown, MenuProps, Tag, Typography } from 'antd';
import React from 'react';
import { BsArrowLeftSquareFill, BsGearWide } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import StyleWrapper from './Style';

const Navbar: React.FC = () => {

	const { mode } = useMainStore()

	return (
		<StyleWrapper>
			<div className='logo'>
				<img src={`/assets/logo-${mode}.svg`} alt='logo' />
			</div>
			<div className='content'>
				<div className="content-left">
					<HeadSearch />
				</div>
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

	const items: MenuProps["items"] = [
		{
			key: "settings",
			label: "Settings",
			icon: <BsGearWide />,
		},
		{
			key: "logout",
			label: "Logout",
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