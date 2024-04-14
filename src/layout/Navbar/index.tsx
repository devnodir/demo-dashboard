import MyButton from '@/components/antd/MyButton';
import CompanyImage from '@/components/shared/CompanyImage';
import FullScreenHandler from '@/components/shared/FullScreenHandler';
import LangSelect from '@/components/shared/LangSelect';
import ModeHandler from '@/components/shared/ModeHandler';
import { USER_ID, USER_TOKEN } from '@/components/variables';
import useT from '@/hooks/useT';
import useMainStore from '@/store/main';
import { removeLocalStorage } from '@/utils/localStorage';
import { colors } from '@/utils/theme';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Tag, Typography } from 'antd';
import React from 'react';
import { BsArrowLeftSquareFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import StyleWrapper from './Style';

const Navbar: React.FC = () => {

	const { setMobileMenu } = useMainStore()

	return (
		<StyleWrapper>
			<div className='logo d-lg-flex'>
				<CompanyImage />
			</div>
			<div className='d-lg-none pl-2 menu-btn' onClick={() => setMobileMenu(true)}>
				<MyButton type="primary" icon={<MenuUnfoldOutlined />} />
			</div>
			<div className='content'>
				{/* <HeadSearch /> */}
				<div />
				<div className="content-right">
					<div className="buttons">
						<ModeHandler />
						<FullScreenHandler />
						{/* <Notifications /> */}
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
	const { setIsAuth, userData } = useMainStore()

	const t = useT()

	const items: MenuProps["items"] = [
		// {
		// 	key: "settings",
		// 	label: t("settings"),
		// 	icon: <BsGearWide />,
		// },
		{
			key: "logout",
			label: t("logout"),
			icon: <BsArrowLeftSquareFill />,
			danger: true,
			onClick: () => {
				removeLocalStorage(USER_TOKEN)
				removeLocalStorage(USER_ID)
				setIsAuth(false)
			}
		},
	]

	return (
		<Dropdown menu={{ items }} trigger={["click"]} overlayStyle={{ width: 200 }} placement="bottomRight">
			<div className="user">
				<div className='user-info'>
					<Typography.Text>{userData?.name}</Typography.Text>
					<Tag color={colors.success} className='mr-0'>{userData.role}</Tag>
				</div>
				<div className="user-img">
					<FaUser />
				</div>
			</div>
		</Dropdown>

	)
}