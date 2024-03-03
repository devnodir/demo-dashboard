import { IVoid } from '@/types/helper.type'
import { colors } from '@/utils/theme'
import { Flex } from 'antd'
import { FaDownload, FaEye, FaMessage, FaPen, FaTrash, FaXmark } from 'react-icons/fa6'
import MyButton from '../../antd/MyButton'

interface Props {
	onDelete?: IVoid
	onUpdate?: IVoid
	onMessage?: IVoid
	onCancel?: IVoid
	onDownload?: IVoid
	onComplateTemplate?: (id?: string) => void
	id?: string
}

const ActionButtons: React.FC<Props> = ({ id, onDelete, onUpdate, onMessage, onCancel, onDownload, onComplateTemplate }) => {

	return (
		<Flex gap={2} justify="center">
			{onMessage && <MyButton type="text" color={colors.secondary} icon={<FaMessage size="16" onClick={onUpdate} />} />}
			{onComplateTemplate && <MyButton type="text" color={colors.success} icon={<FaEye size="20" onClick={() => onComplateTemplate(id)} />} />}
			{onDownload && <MyButton type="text" color={colors.success} icon={<FaDownload size="20" onClick={onDownload} />} />}
			{onUpdate && <MyButton type="text" color={colors.blue} icon={<FaPen size="16" />} onClick={onUpdate} />}
			{onDelete && <MyButton type="text" color={colors.red} icon={<FaTrash size="16" />} onClick={onDelete} />}
			{onCancel && <MyButton type="text" color={colors.red} icon={<FaXmark size="20" onClick={onCancel} />} />}
		</Flex>
	)
}

export default ActionButtons