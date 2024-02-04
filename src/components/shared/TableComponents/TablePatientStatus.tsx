import i18n from '@/i18n'
import { Tag } from 'antd'

const TablePatientStatus = (status: "patient" | "lead") => {
	return <Tag color={status === "patient" ? "orange" : "blue"} className="text-capitalize" style={{ width: "70px", textAlign: "center" }}>
		{i18n.t(status)}
	</Tag>
}

export default TablePatientStatus