import TableDate from "@/components/shared/TableComponents/TableDate";
import TablePriceCurrency from "@/components/shared/TableComponents/TablePriceCurrency";
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
			title: t("text"),
			dataIndex: 'description',
		},
		{
			title: t("price"),
			dataIndex: 'amount',
			render: TablePriceCurrency
		},
		{
			title: t("from"),
			dataIndex: 'valid_from',
			render: TableDate
		},
		{
			title: t("to"),
			dataIndex: 'valid_to',
			render: TableDate
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums