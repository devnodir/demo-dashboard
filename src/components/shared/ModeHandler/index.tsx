import useMainStore from '@/store/main'
import React from 'react'
import { BsBrightnessHighFill } from 'react-icons/bs'
import { FaMoon } from 'react-icons/fa6'

const ModeHandler: React.FC = () => {

	const { mode, setMode } = useMainStore()


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