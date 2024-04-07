import { PATIENTS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import PatientAction from './components/Action'
import PatientsTable from './components/Table'
import { STATUS, STATUS_PATIENT } from '@/components/variables'
import useT from '@/hooks/useT'
import { BsSearch } from 'react-icons/bs'

const Patient = () => {

	const t = useT()

	return (
		<PageStructure
			Table={PatientsTable}
			Action={PatientAction}
			endpoint={PATIENTS}
			langKey="patient"
			userFunc={(data) => {
				return data.map(item => {
					return {
						name: item.name,
						phone: item.phone_number
					}
				})
			}}
			filters={[
				{
					key: "search",
					span: 3,
					lg: 5,
					type: "input",
					input: {
						name: "search",
						placeholder: t("search"),
						prefix: < BsSearch />
					}
				},
				{
					key: "isactive",
					span: 3,
					lg: 3,
					type: "select",
					input: {
						name: "isactive",
						options: STATUS,
						placeholder: t("active")
					}
				},
				{
					key: "status",
					span: 3,
					lg: 3,
					type: "select",
					input: {
						name: "status",
						options: STATUS_PATIENT,
						placeholder: t("status")
					}
				},
			]}
		/>
	)
}

export default Patient