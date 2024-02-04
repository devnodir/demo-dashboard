import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import PatientsTable from './components/Table'
import PatientAction from './components/Action'
import { PATIENTS } from '@/components/endpoints'

const Patient = () => {
	return (
		<PageStructure
			Table={PatientsTable}
			Action={PatientAction}
			endpoint={PATIENTS}
			langKey="patient"
		/>
	)
}

export default Patient