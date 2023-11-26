import useAppSelector from '@/hooks/useAppSelector'
import { setMode } from '@/utils/dispatch'
import React from 'react'
import { BsBrightnessHighFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa6'

const ModeHandler: React.FC = () => {

	const mode = useAppSelector(state => state.auth.mode)

	const toggle = () => {
		setMode(mode === "dark" ? "light" : "dark")
	}

	return (
		<button onClick={toggle}>
			{mode === "dark" ? <FaMoon /> : <BsBrightnessHighFill />}
		</button>
	)
}

export default ModeHandler