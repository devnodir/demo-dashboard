import TableUsersList from "@/components/shared/TableComponents/TableUsersList";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {
	const t = useT()
	const columns = [
		{
			title: t("name"),
			dataIndex: 'name',
		},
		{
			title: t("stock"),
			dataIndex: 'stock',
		},
		{
			title: t("parent_category"),
			dataIndex: 'parent_category',
			render: TableUsersList
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums