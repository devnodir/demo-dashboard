import i18n from '@/i18n'
import { Tag } from 'antd'

const TableIsDone = (is_done: boolean) => {
	return <Tag color={is_done ? "green" : "red"} className="text-capitalize" style={{ width: "60px", textAlign: "center" }}>
		{i18n.t(is_done ? "yes" : "no")}
	</Tag>
}

export default TableIsDone