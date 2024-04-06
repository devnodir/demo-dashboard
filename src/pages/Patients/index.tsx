import { PATIENTS } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import PatientAction from './components/Action'
import PatientsTable from './components/Table'

const Patient = () => {
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
		/>
	)
}

export default Patient