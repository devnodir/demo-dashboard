import React, { useState } from 'react'
import { FaExpand, FaCompress } from 'react-icons/fa6'

const FullScreenHandler: React.FC = () => {
	const [isFull, setFull] = useState<boolean>(false)

	const toggle = () => {
		if (isFull) {
			document.exitFullscreen().then(() => {
				setFull(false)
			})
		} else {
			document.body.requestFullscreen().then(() => {
				setFull(true)
			})
		}
	}

	return (
		<button onClick={toggle}>
			{isFull ? <FaCompress /> : <FaExpand />}
		</button>
	)
}

export default FullScreenHandler