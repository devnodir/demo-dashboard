import { IChildren } from '@/types/helper.type'
import { Spin } from 'antd'
import React, { Suspense } from 'react'

interface Props {
	children: IChildren
}

const SuspenseWrapper: React.FC<Props> = ({ children }) => {
	return (
		<Suspense fallback={
			<div className='d-flex justify-content-center py-4'>
				<Spin spinning />
			</div>
		}>
			{children}
		</Suspense>
	)
}

export default SuspenseWrapper