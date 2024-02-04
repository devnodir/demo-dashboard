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
			title: t("task_name"),
			dataIndex: 'text',
		},
		{
			title: t("responsible_users"),
			dataIndex: 'responsible_users',
			render: TableUsersList
		},
		{
			title: t("patient"),
			dataIndex: 'patient',
			render: TableNameRecord
		},
		{
			title: t("priority"),
			dataIndex: 'priority',
			render: (val: string) => STATUS_PRIORITY.find(el => el.value === val)?.label
		},
		{
			title: t("deadline"),
			dataIndex: 'deadline',
			render: TableDate
		},
		{
			title: t("done"),
			dataIndex: 'is_done',
			render: TableIsDone
		},
		{
			title: t("status"),
			dataIndex: 'status',
			render: TablePatientStatus
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums