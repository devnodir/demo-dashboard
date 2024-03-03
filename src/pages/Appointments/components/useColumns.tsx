import TableDate from "@/components/shared/TableComponents/TableDate";
import TableNameRecord from "@/components/shared/TableComponents/TableNameRecord";
import TablePriceCurrency from "@/components/shared/TableComponents/TablePriceCurrency";
import TableUsersList from "@/components/shared/TableComponents/TableUsersList";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {
	const t = useT()
	const columns = [
		{
			title: t("patient"),
			dataIndex: 'patient',
			render: TableNameRecord
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

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums