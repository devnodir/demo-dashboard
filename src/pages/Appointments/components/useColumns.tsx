import TableDate from "@/components/shared/TableComponents/TableDate";
import TableNameRecord from "@/components/shared/TableComponents/TableNameRecord";
import TablePriceCurrency from "@/components/shared/TableComponents/TablePriceCurrency";
import TableUsersList from "@/components/shared/TableComponents/TableUsersList";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";
import { Link } from "react-router-dom";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {
	const t = useT()
	const columns = [
		{
			title: t("patient"),
			dataIndex: 'patient',
			render: (patient: any, order: any) => <Link to={`/patients/cabinet/${order.patient_id}`} className="py-3">
				{patient.name}
			</Link>
		},
		{
			title: t("doctor"),
			dataIndex: 'doctor',
			render: TableNameRecord
		},
		{
			title: t("service"),
			dataIndex: 'service',
			render: TableNameRecord
		},
		{
			title: t("price"),
			dataIndex: 'price',
			render: TablePriceCurrency
		},
		{
			title: t("date"),
			dataIndex: 'appointment_date',
			render: TableDate
		},
		{
			title: t("time"),
			dataIndex: 'appointment_time',
		},
		{
			title: t("responsible_users"),
			dataIndex: 'responsible_users',
			render: TableUsersList
		},
	];
	// @ts-ignore
	return useColumnStructure(columns, endpoint, setId, (id: string, record: any) => {
		return {
			allowMessage: true,
			users: [record.patient, record.doctor]
		}
	})
}

export default useComlums