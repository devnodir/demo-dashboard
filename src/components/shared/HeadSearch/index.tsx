import React, { Fragment, useEffect, useRef } from 'react'
import StyleWrapper from './Style'
import { Button, Input, Modal, Space } from 'antd';
import { BsSearch } from "react-icons/bs"
import useToggleState from '@/hooks/useToggleState';
import useWindowListener from '@/hooks/useWindowListener';


const HeadSearch: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)

	const inputRef = useRef<any>(null)

	useWindowListener("keydown", (e) => e.keyCode === 75 && e.metaKey && toggle(e))


	useEffect(() => {
		if (isOpen) setTimeout(() => {
			inputRef.current?.focus()
		}, 0)
	}, [isOpen])


	return (
		<Fragment>
			<StyleWrapper className='search-button'>
				<div className='keyboard' onClick={toggle}>
					<BsSearch />
					<div>
						⌘ + K
					</div>
				</div>
			</StyleWrapper>
			<Modal open={isOpen} onCancel={toggle} footer={null} closeIcon={null} width={600} destroyOnClose>
				<StyleWrapper>
					<Space.Compact className='search-wrapper'>
						<Input ref={inputRef} />
						<Button type="primary">
							<BsSearch />
						</Button>
					</Space.Compact>
				</StyleWrapper>
			</Modal>
		</Fragment>
	)
}

export default HeadSearch