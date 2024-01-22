import { Table, TableProps } from 'antd'
import Lottie from 'lottie-react'
import React from 'react'
import EmptyData from "@/assets/lottie/empty-table.json";


const MyTable: React.FC<TableProps<any>> = (props) => {
	return (
		<Table
			scroll={{ x: "max-content" }}
			locale={{
				emptyText: <div className='empty'>
					<Lottie className='empty-anim' animationData={EmptyData} loop />
					<span className='empty-text'>No data</span>
				</div>
			}}
			{...props}
		/>
	)
}

export default MyTable