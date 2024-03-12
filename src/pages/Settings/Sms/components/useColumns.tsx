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
			dataIndex: 'text',
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums