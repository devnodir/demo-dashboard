import i18n from '@/i18n'
import { colors } from '@/utils/theme'
import { Tag } from 'antd'

const TableStages = (stage: "new" | "waiting" | "done") => {

	const stages = {
		"new": { color: colors.blue, text: "new" },
		"waiting": { color: colors.yellow, text: "waiting" },
		"done": { color: colors.success, text: "done" },
	}

	return <Tag color={stages[stage].color} className="text-capitalize" style={{ width: 80, textAlign: "center", padding: "2px 0" }}>
		{/* @ts-ignore */}
		{i18n.t(stages[stage].text)}
	</Tag>
}

export default TableStages