import React, { Fragment, useEffect, useRef } from 'react'
import StyleWrapper from './Style'
import { Button, Input, Modal, Space, theme } from 'antd';
import { BsSearch } from "react-icons/bs"
import useToggleState from '@/hooks/useToggleState';


const HeadSearch: React.FC = () => {

	const { token } = theme.useToken();
	const [isOpen, toggle] = useToggleState(false)

	const inputRef = useRef<any>(null)

	useEffect(() => {
		if (isOpen) setTimeout(() => {
			inputRef.current?.focus()
		}, 0)
	}, [isOpen])

	return (
		<Fragment>
			<StyleWrapper token={token} className='search-button'>
				<div className='keyboard' onClick={toggle}>
					<BsSearch />
					<div>
						⌘ + K
					</div>
				</div>
			</StyleWrapper>
			<Modal open={isOpen} onCancel={toggle} footer={null} closeIcon={null} width={600} destroyOnClose>
				<StyleWrapper token={token}>
					<Space.Compact className='search-wrapper'>
						<Input size="large" ref={inputRef} />
						<Button type="primary" size="large">
							<BsSearch />
						</Button>
					</Space.Compact>
				</StyleWrapper>
			</Modal>
		</Fragment>
	)
}

export default HeadSearch