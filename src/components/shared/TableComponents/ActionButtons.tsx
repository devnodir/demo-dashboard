import { IVoid } from '@/types/helper.type'
import { colors } from '@/utils/theme'
import { Flex } from 'antd'
import { FaMessage, FaPen, FaTrash, FaXmark } from 'react-icons/fa6'
import MyButton from '../../antd/MyButton'

interface Props {
	onDelete?: IVoid
	onUpdate?: IVoid
	onMessage?: IVoid
	onCancel?: IVoid
}

const ActionButtons: React.FC<Props> = ({ onDelete, onUpdate, onMessage, onCancel }) => {

	return (
		<Flex gap={2} justify="center">
			{onMessage && <MyButton type="text" color={colors.secondary} icon={<FaMessage size="16" onClick={onUpdate} />} />}
			{onUpdate && <MyButton type="text" color={colors.blue} icon={<FaPen size="16" />} onClick={onUpdate} />}
			{onDelete && <MyButton type="text" color={colors.red} icon={<FaTrash size="16" />} onClick={onDelete} />}
			{onCancel && <MyButton type="text" color={colors.red} icon={<FaXmark size="20" onClick={onCancel} />} />}
		</Flex>
	)
}

export default ActionButtons