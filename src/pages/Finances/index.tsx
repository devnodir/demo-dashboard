import React, { useState } from 'react'
import Style from './Style'
import FinaceHead from './components/Head'
import FinanceTable from './components/Table'
import FinanceFilter from './components/Filter'
import { useSearchParams } from 'react-router-dom'
import useToggleState from '@/hooks/useToggleState'
import useT from '@/hooks/useT'
import { queryClient } from '@/utils/props'
import { FINANCES } from '@/components/endpoints'
import qs from "qs"
import { Drawer } from 'antd'
import FinanceAction from './components/Action'

const Finances: React.FC = () => {

	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const [id, setId] = useState<string | null>(null)

	const [search] = useSearchParams()

	const closeModal = () => {
		toggle()
		if (id) setId(null)
	}

	const onActionFinish = () => {
		setId(null)
		toggle()
		queryClient.refetchQueries([FINANCES, qs.parse(search.toString())])
	}

	return (
		<Style className='finances' id="finances">
			<FinaceHead />
			<FinanceFilter toggle={toggle} />
			<FinanceTable setId={(val) => { setId(val); toggle() }} />
			<Drawer
				open={isOpen}
				onClose={closeModal}
				title={t(id ? `edit_payment` : `new_payment`)}
				width={480}
				destroyOnClose
			>
				<FinanceAction id={id} onFinish={onActionFinish} />
			</Drawer>
		</Style>
	)
}

export default Finances