import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import useApiMutationID from "@/hooks/useApiMutationID";
import { ISetState } from "@/types/helper.type";
import { queryClient } from "@/utils/props";
import { message } from "antd";
import qs from "qs";
import { useSearchParams } from "react-router-dom";

const useColumnStructure = (columns: any[], endpoint: string, setId: ISetState<string | null>) => {

	const [search] = useSearchParams()
	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", endpoint)


	columns.push(
		{
			title: '',
			dataIndex: '_id',
			render: (id: string) => <ActionButtons
				onDelete={() => deleteItem(id)}
				onUpdate={() => setId(id)}
			/>
		}
	)

	const deleteItem = (id: string) => {
		mutate({ id }, {
			onSuccess: () => {
				queryClient.refetchQueries([endpoint, qs.parse(search.toString())])
			},
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}
	return { isDeleting, columns }
}

export default useColumnStructure