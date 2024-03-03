import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";

const useComlums = (endpoint: string, setId: ISetState<string | null>, options?: Record<string, any>) => {

	const t = useT()
	const columns = [
		{
			title: t("name"),
			dataIndex: 'name',
		},
		{
			title: t("patient"),
			dataIndex: 'patient_name',
		},
	];

	return useColumnStructure(columns, endpoint, setId, {
		onComplateTemplate: (id: string) => {

		}
	})
}

export default useComlums