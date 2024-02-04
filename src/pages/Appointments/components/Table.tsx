import MyTable from "@/components/antd/MyTable";
import { SERVICES } from "@/components/endpoints";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import TableStages from "@/components/shared/TableComponents/TableStages";
import TableUsersList from "@/components/shared/TableComponents/TableUsersList";
import { INIT_PAGE_PARAMS } from "@/components/variables";
import useApi from "@/hooks/useApi";
import useApiMutationID from "@/hooks/useApiMutationID";
import { useQueryParams } from "@/hooks/useQueryParams";
import useT from "@/hooks/useT";
import useTableData from "@/hooks/useTableData";
import React from 'react';

const AppointmentsTable: React.FC = () => {

	const t = useT()

	const [query, setQuery] = useQueryParams(INIT_PAGE_PARAMS)

	const { data, refetch, isLoading, isRefetching } = useApi(SERVICES, {}, query)

	const { records, pagination } = useTableData(data, query, setQuery)

	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", SERVICES)


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
		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <ActionButtons
				onDelete={() => { }}
				onUpdate={() => { }}
				onCancel={() => { }}
			/>
		},
	];

	const mockData = [
		{
			key: 1,
			appointment_stage: "new",
			patient: "Abdunazarov Nodirbek",
			doctor: "Dilshodbek Ismoilov",
			service: "Hear",
			price: "2.000.000",
			note: "Hello world",
			date: "23.03.2024",
			time: "16:00",
			duration: "2 hours",
			responsible_users: ["Nodirbek Abdunazarov", "Dilshodbek Ismoilov"],
			is_active: true
		},
		{
			key: 2,
			appointment_stage: "waiting",
			patient: "Abdunazarov Nodirbek",
			doctor: "Dilshodbek Ismoilov",
			service: "Hear",
			price: "2.000.000",
			note: "Hello world",
			date: "23.03.2024",
			time: "16:00",
			duration: "2 hours",
			responsible_users: ["Nodirbek Abdunazarov", "Dilshodbek Ismoilov"],
			is_active: true
		},
		{
			key: 3,
			appointment_stage: "done",
			patient: "Abdunazarov Nodirbek",
			doctor: "Dilshodbek Ismoilov",
			service: "Hear",
			price: "2.000.000",
			note: "Hello world",
			date: "23.03.2024",
			time: "16:00",
			duration: "2 hours",
			responsible_users: ["Nodirbek Abdunazarov", "Dilshodbek Ismoilov"],
			is_active: true
		},
	]

	return (
		<MyTable
			columns={columns}
			dataSource={mockData}
			rowSelection={{ type: "checkbox" }}
		/>
	);
};

export default AppointmentsTable;
