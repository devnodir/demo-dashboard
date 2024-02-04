import TableDate from "@/components/shared/TableComponents/TableDate";
import TableIsPayment from "@/components/shared/TableComponents/TableIsPayment";
import TableNameRecord from "@/components/shared/TableComponents/TableNameRecord";
import TableTime from "@/components/shared/TableComponents/TableTime";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";
import { Timeline } from "antd";
import { FaArrowRight, FaMoneyBill, FaUserDoctor } from "react-icons/fa6";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {
	const t = useT()
	const columns = [
		{
			title: t("patient"),
			dataIndex: 'patient',
			render: TableNameRecord
		},
		{
			title: t("services"),
			dataIndex: 'services',
			render: (service: any[]) => (
				<Timeline
					items={service.map((el) => {
						return {
							children: el.name,
							dot: <FaArrowRight />
						}
					})}
				/>
			)
		},
		{
			title: t("price"),
			dataIndex: 'services',
			render: (service: any[]) => (
				<Timeline
					items={service.map((el) => {
						return {
							children: el.price,
							dot: <FaMoneyBill />
						}
					})}
				/>
			)
		},
		{
			title: t("doctors"),
			dataIndex: 'doctors',
			render: (doctors: any[]) => (
				<Timeline
					items={doctors.map(el => {
						return {
							children: el.name,
							dot: <FaUserDoctor />
						}
					})}
				/>
			)
		},

		{
			title: t("date"),
			dataIndex: 'createdAt',
			render: TableDate
		},
		{
			title: t("time"),
			dataIndex: 'createdAt',
			render: TableTime
		},
		{
			title: t("status"),
			dataIndex: 'isPayment',
			render: TableIsPayment
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums