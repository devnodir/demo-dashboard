import PageLoader from "@/components/shared/Loaders/PageLoader";
import useT from "@/hooks/useT";
import { Tabs } from "antd";
import React, { Suspense } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Style from "./Style";

const Warehouse: React.FC = () => {
	const t = useT();
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const activeTab = pathname.split("/")[2];

	const Childten = () => (
		<Suspense fallback={<PageLoader />}>
			<Outlet />
		</Suspense>
	);

	const items = [
		{
			label: t("products"),
			key: "products",
		},
		{
			label: t("categories"),
			key: "categories",
		},
		{
			label: t("sells"),
			key: "sells",
		},
	];

	return (
		<Style className="warehouse">
			<Tabs
				items={items.map((item) => {
					return { ...item, children: Childten() };
				})}
				onChange={(key) => {
					navigate(`/warehouse/${key}`);
				}}
				activeKey={activeTab}
				tabPosition="top"
			/>
		</Style>
	);
};

export default Warehouse;
