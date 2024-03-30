import { IVoid } from '@/types/helper.type'
import { colors } from '@/utils/theme'
import { Flex, Form, Input, Modal, message } from 'antd'
import { FaDownload, FaEye, FaMessage, FaPen, FaTrash, FaXmark } from 'react-icons/fa6'
import MyButton from '../../antd/MyButton'
import { Fragment } from 'react'
import useToggleState, { Toggle } from '@/hooks/useToggleState'
import useT from '@/hooks/useT'
import useApiMutation from '@/hooks/useApiMutation'
import { SMS_SEND } from '@/components/endpoints'
import { R_REQUIRED } from '@/utils/rules'

interface Props {
	onDelete?: IVoid
	onUpdate?: IVoid
	onCancel?: IVoid
	onDownload?: IVoid
	onComplateTemplate?: (id?: string) => void
	allowMessage?: boolean
	id?: string
	users?: any[]
}

const ActionButtons: React.FC<Props> = ({ id, users, allowMessage, onDelete, onUpdate, onCancel, onDownload, onComplateTemplate }) => {

	const [isOpen, toggle] = useToggleState(false)
	console.log(isOpen);

	return (
		<Fragment>
			<Flex gap={2} justify="center">
				{allowMessage && <MyButton type="text" color={colors.secondary} icon={<FaMessage size="16" />} onClick={() => toggle()} />}
				{onComplateTemplate && <MyButton type="text" color={colors.success} icon={<FaEye size="20" />} onClick={() => onComplateTemplate(id)} />}
				{onDownload && <MyButton type="text" color={colors.success} icon={<FaDownload size="20" />} onClick={onDownload} />}
				{onUpdate && <MyButton type="text" color={colors.blue} icon={<FaPen size="16" />} onClick={onUpdate} />}
				{onDelete && <MyButton type="text" color={colors.red} icon={<FaTrash size="16" />} onClick={onDelete} />}
				{onCancel && <MyButton type="text" color={colors.red} icon={<FaXmark size="20" onClick={onCancel} />} />}
			</Flex>
			{isOpen && allowMessage && <MessageSender toggle={toggle} users={users} />}
		</Fragment>
	)
}

export default ActionButtons


interface IMessageSender {
	users?: any[],
	toggle: Toggle
}

const MessageSender: React.FC<IMessageSender> = ({ users, toggle }) => {

	const t = useT()
	const { mutate, isLoading } = useApiMutation(SMS_SEND)

	const submit = (formData: any) => {
		formData.users = JSON.stringify(users)
		mutate(formData, {
			onSuccess: () => {
				message.success("OK")
				toggle()
			},
			onError: () => {
				message.error("Error")
			}
		})
	}


	return <Modal
		open={true}
		onCancel={toggle}
		title={t("send_message")}
		okButtonProps={{
			loading: isLoading,
			style: { minWidth: 100 },
			htmlType: "submit",
			form: "send_message_modal"
		}}
		okText={t("send")}
	>
		<Form
			layout="vertical"
			title={t("send_message")}
			onFinish={submit}
			style={{ margin: "16px 0" }}
			id="send_message_modal"
		>
			<Form.Item
				name="text"
				label={t("text")}
				rules={[R_REQUIRED, { min: 2 }]}
			>
				<Input />
			</Form.Item>
		</Form>
	</Modal>
}