import i18n from '@/i18n'
import { Tag } from 'antd'
import React from 'react'

const TableIsActive = (is_active: boolean) => {
	return <Tag color={is_active ? "green" : "red"} className="text-capitalize">
		{i18n.t(is_active ? "active" : "inactive")}
	</Tag>
}

export default TableIsActive