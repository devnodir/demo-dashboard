import React from 'react'
import { Dropdown, MenuProps, Typography, theme } from 'antd';
import StyleWrapper from './Style';
import HeadSearch from '@/components/shared/HeadSearch';
import { FaUser, FaBell, FaExpand } from "react-icons/fa6"
import { BsGearWide, BsArrowLeftSquareFill } from "react-icons/bs"
import LangSelect from '@/components/shared/LangSelect';

const Navbar: React.FC = () => {
	const { token } = theme.useToken();
	return (
		<StyleWrapper token={token} collapsed={false}>
			<div className='logo'>
				<img src='/logo.svg' alt='logo' />
			</div>
			<div className='content'>
				<div className="content-left">
					<HeadSearch />
				</div>
				<div className="content-right">
					<div className="buttons">
						<button>
							<FaExpand />
						</button>
						<button>
							<FaBell />
						</button>
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