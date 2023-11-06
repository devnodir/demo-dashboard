import useToggleState from '@/hooks/useToggleState'
import { Badge, Drawer } from 'antd'
import React, { Fragment } from 'react'
import { FaBell } from 'react-icons/fa6'

const Notifications: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)

	return (
		<Fragment>
			<Badge count={5}>
				<button onClick={toggle}>
					<FaBell />
				</button>
			</Badge>
			<Drawer title="Notifications" open={isOpen} onClose={toggle}>

			</Drawer>
		</Fragment>
	)
}

export default Notifications