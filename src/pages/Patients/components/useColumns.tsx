import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import TableAdditionalContact from "@/components/shared/TableComponents/TableAdditionalContact";
import TableDate from "@/components/shared/TableComponents/TableDate";
import TablePatientStatus from "@/components/shared/TableComponents/TablePatientStatus";
import TablePhone from "@/components/shared/TableComponents/TablePhone";
import useApiMutationID from "@/hooks/useApiMutationID";
import useT from "@/hooks/useT";
import { message } from "antd";
import { useSearchParams } from "react-router-dom";
import qs from "qs"
import { ISetState } from "@/types/helper.type";
import { queryClient } from "@/utils/props";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {

	const t = useT()
	const [search] = useSearchParams()
	const { mutate, isLoading: isDeleting } = useApiMutationID("delete", endpoint)

	const columns = [
		{
			title: t("full_name"),
			dataIndex: 'name',
		},
		{
			title: t("l_phone"),
			dataIndex: 'phone_number',
			render: TablePhone
		},
		{
			title: t("birthday"),
			dataIndex: 'birthday',
			render: TableDate
		},
		{
			title: t("address"),
			dataIndex: 'address',
		},
		{
			title: t("addtional_contact"),
			dataIndex: 'additional_contact',
			render: TableAdditionalContact
		},
		{
			title: t("status"),
			dataIndex: 'status',
			render: TablePatientStatus
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id: string) => <ActionButtons
				onDelete={() => deleteItem(id)}
				onUpdate={() => setId(id)}
			/>
		},
	];

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

export default useComlums