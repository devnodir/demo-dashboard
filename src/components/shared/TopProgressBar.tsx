import { IChildren } from '@/types/helper.type'
import { colors } from '@/utils/theme'
import React, { Fragment, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import TopBarProgress from "react-topbar-progress-indicator"

interface IProps {
	children: IChildren
}

const TopProgressBar: React.FC<IProps> = ({ children }) => {
	const [progress, setProgress] = useState(false)
	const [prevLoc, setPrevLoc] = useState("")
	const location = useLocation()

	useEffect(() => {
		setPrevLoc(location.pathname)
		setProgress(true)
		if (location.pathname === prevLoc) {
			setPrevLoc('')
		}
	}, [location])

	useEffect(() => {
		setProgress(false)
	}, [prevLoc])

	TopBarProgress.config({
		barColors: {
			"0": colors.primary,
			"1.0": colors.primary
		},
		shadowBlur: 0,
		barThickness: 2.5
	});

	return (
		<Fragment>
			{progress && <TopBarProgress />}
			{children}
		</Fragment>
	)
}

export default TopProgressBar