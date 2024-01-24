import type { MenuProps } from 'antd';
import { BsGridFill } from "react-icons/bs";
import { FaCalendarCheck, FaChartLine, FaClipboardList, FaFlaskVial, FaGear, FaHammer, FaHospitalUser, FaUserDoctor, FaUserGear, FaWarehouse } from "react-icons/fa6";

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
		label: "appointments",
		key: "/appointments",
		icon: <FaCalendarCheck />
	},
	{
		label: "warehouse",
		key: "/warehouse",
		icon: <FaWarehouse />
	},
	{
		label: "tasks",
		key: "/tasks",
		icon: <FaClipboardList />
	},
	{
		label: "laboratory",
		key: "/labs",
		icon: <FaFlaskVial />
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

];


export default items