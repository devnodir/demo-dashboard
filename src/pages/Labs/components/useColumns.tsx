import MyButton from "@/components/antd/MyButton";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useT from "@/hooks/useT";
import { ISetState } from "@/types/helper.type";
import { colors } from "@/utils/theme";
import { FaEye } from "react-icons/fa6";

const useComlums = (endpoint: string, setId: ISetState<string | null>, props: any) => {

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
		{
			title: t("template"),
			dataIndex: 'protocol_template',
			render: (id: string) => (
				<MyButton color={colors.success} type="text" icon={<FaEye />} onClick={() => {
					props.setProtocolId(id)
				}} />
			)
		},

	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums