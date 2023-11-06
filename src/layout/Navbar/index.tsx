import FullScreenHandler from '@/components/shared/FullScreenHandler';
import HeadSearch from '@/components/shared/HeadSearch';
import LangSelect from '@/components/shared/LangSelect';
import Notifications from '@/components/shared/Notifications';
import { Dropdown, MenuProps, Typography } from 'antd';
import React from 'react';
import { BsArrowLeftSquareFill, BsGearWide } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import StyleWrapper from './Style';

const Navbar: React.FC = () => {

	return (
		<StyleWrapper>
			<div className='logo'>
				<img src='/logo.svg' alt='logo' />
			</div>
			<div className='content'>
				<div className="content-left">
					<HeadSearch />
				</div>
				<div className="content-right">
					<div className="buttons">
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
			danger: true
		},
	]

	return (
		<Dropdown menu={{ items }} trigger={["click"]} overlayStyle={{ width: 200 }} placement="bottomRight">
			<div className="user">
				<div className='user-info'>
					<Typography.Text>Nodirbek Abdunazarov</Typography.Text>
					<Typography.Text >admin</Typography.Text>
				</div>
				<div className="user-img">
					<FaUser />
				</div>
			</div>
		</Dropdown>

	)
}