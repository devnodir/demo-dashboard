import type { MenuProps } from 'antd';
import { BsGridFill } from "react-icons/bs";
import { FaChartLine, FaGear, FaHammer, FaHospitalUser, FaUserDoctor, FaUserGear } from "react-icons/fa6";

export type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
	{
		label: "dashboard",
		key: "/dashboard",
		icon: <BsGridFill />,
	},
	{
		label: "patients",
		key: "/patients",
		icon: <FaHospitalUser />
	},
	{
		label: "doctors",
		key: "/doctors",
		icon: <FaUserDoctor />
	},
	{
		label: "users",
		key: "/users",
		icon: <FaUserGear />
	},
	{
		label: "services",
		key: "/services",
		icon: <FaHammer />
	},
	{
		label: "finances",
		key: "/finances",
		icon: <FaChartLine />
	},
	{
		label: "settings",
		key: "/settings",
		icon: <FaGear />
	},
	// {
	// 	label: "branches",
	// 	key: "/branches",
	// 	icon: <FaCity />
	// },
	// {
	// 	label: "templates",
	// 	key: "/templates",
	// 	icon: <FaBookOpen />
	// },
	// {
	// 	label: "tasks",
	// 	key: "/tasks",
	// 	icon: <FaClipboardList />
	// },
	// {
	// 	label: "laboratory",
	// 	key: "/laboratory",
	// 	icon: <FaFlaskVial />
	// },

];


export default items