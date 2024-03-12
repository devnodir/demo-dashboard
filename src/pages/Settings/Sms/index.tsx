import { SMS_TEMPLATES } from '@/components/endpoints'
import PageStructure from '@/components/shared/structurs/PageStructure'
import React from 'react'
import TasksAction from './components/Action'
import TasksTable from './components/Table'

const SMSTemplates: React.FC = () => {
	return (
		<PageStructure
			Table={TasksTable}
			Action={TasksAction}
			langKey='sms'
			endpoint={SMS_TEMPLATES}
			noPagination
		/>
	)
}

export default SMSTemplates