import React, { Fragment, useEffect, useRef } from 'react'
import StyleWrapper from './Style'
import { Button, Input, Modal, Space } from 'antd';
import { BsSearch } from "react-icons/bs"
import useToggleState from '@/hooks/useToggleState';


const HeadSearch: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)

	const inputRef = useRef<any>(null)

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