import { IVoid } from '@/types/helper.type'
import { colors } from '@/utils/theme'
import { Flex } from 'antd'
import { FaMessage, FaPen, FaTrash } from 'react-icons/fa6'
import MyButton from '../../antd/MyButton'

interface Props {
	onDelete?: IVoid
	onUpdate?: IVoid
	onMessage?: IVoid
}

const ActionButtons: React.FC<Props> = ({ onDelete, onUpdate, onMessage }) => {

	return (
		<Flex gap={2} justify="center">
			{onMessage && <MyButton type="text" color={colors.secondary} icon={<FaMessage size="16" />} onClick={onDelete} />}
			{onUpdate && <MyButton type="text" color={colors.blue} icon={<FaPen size="16" />} />}
			{onDelete && <MyButton type="text" color={colors.red} icon={<FaTrash size="16" />} />}
		</Flex>
	)
}

export default ActionButtons