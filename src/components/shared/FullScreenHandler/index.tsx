import useWindowListener from '@/hooks/useWindowListener'
import React, { useState } from 'react'
import { FaCompress, FaExpand } from 'react-icons/fa6'

const FullScreenHandler: React.FC = () => {
	const [isFull, setFull] = useState<boolean>(false)

	useWindowListener("fullscreenchange", () => {
		setFull(Boolean(document.fullscreenElement))
	})

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
		<button onClick={toggle} className='d-none d-md-block'>
			{isFull ? <FaCompress /> : <FaExpand />}
		</button>
	)
}

export default FullScreenHandler