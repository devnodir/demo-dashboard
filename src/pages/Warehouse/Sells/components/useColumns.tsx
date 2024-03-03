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
			title: t("stock"),
			dataIndex: 'stock',
		},
		{
			title: t("price"),
			dataIndex: 'amount',
			render: TablePriceCurrency
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums