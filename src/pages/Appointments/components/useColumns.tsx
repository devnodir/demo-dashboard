import TableDate from "@/components/shared/TableComponents/TableDate";
import TableIsDone from "@/components/shared/TableComponents/TableIsDone";
import TableNameRecord from "@/components/shared/TableComponents/TableNameRecord";
import TablePatientStatus from "@/components/shared/TableComponents/TablePatientStatus";
import TableUsersList from "@/components/shared/TableComponents/TableUsersList";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import { STATUS_PRIORITY } from "@/components/variables";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {
	const t = useT()
	const columns = [
		{
			title: t("appointment_stage"),
			dataIndex: 'appointment_stage',
			render: TableStages
		},
		{
			title: t("patient"),
			dataIndex: 'patient',
		},
		{
			title: t("doctor"),
			dataIndex: 'doctor',
		},
		{
			title: t("service"),
			dataIndex: 'service',
		},
		{
			title: t("price"),
			dataIndex: 'price',
		},
		{
			title: t("note"),
			dataIndex: 'note',
		},
		{
			title: t("date"),
			dataIndex: 'date',
		},
		{
			title: t("time"),
			dataIndex: 'time',
		},
		{
			title: t("duration"),
			dataIndex: 'duration',
		},
		{
			title: t("responsible_users"),
			dataIndex: 'responsible_users',
			// render: TableUsersList
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums