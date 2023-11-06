import type { MenuProps } from 'antd';
import { FaIdCard, FaHammer, FaUserGear, FaUserDoctor, FaHospitalUser, FaCity, FaClipboardList, FaBookOpen, FaFlaskVial, FaGear } from "react-icons/fa6";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
	{
		label: "Cabinet",
		key: "/cabinet",
		icon: <FaIdCard />,
	},
	{
		label: "Services",
		key: "/services",
		icon: <FaHammer />
	},
	{
		label: "Doctors",
		key: "/doctors",
		icon: <FaUserDoctor />
	},
	{
		label: "Users",
		key: "/user",
		icon: <FaUserGear />
	},
	{
		label: "Patientce",
		key: "/patientce",
		icon: <FaHospitalUser />
	},
	{
		label: "Branches",
		key: "/branches",
		icon: <FaCity />
	},
	{
		label: "Templates",
		key: "/templates",
		icon: <FaBookOpen />
	},
	{
		label: "Tasks",
		key: "/tasks",
		icon: <FaClipboardList />
	},
	{
		label: "Laboratory",
		key: "/laboratory",
		icon: <FaFlaskVial />
	},
	{
		label: "Settings",
		key: "/settings",
		icon: <FaGear />
	},
];


export default items