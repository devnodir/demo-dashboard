import { SMS_SEND, SMS_TEMPLATES } from '@/components/endpoints'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useT from '@/hooks/useT'
import { Toggle } from '@/hooks/useToggleState'
import { queryClient } from '@/utils/props'
import { R_REQUIRED } from '@/utils/rules'
import { Form, Input, Modal, Radio, Spin, Typography, message } from 'antd'
import qs from 'qs'
import React, { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'

interface IMessageSender {
	endpoint: string
	toggle: Toggle
	userFunc?: (data: any[]) => any[]

}

const SendMessageStructure: React.FC<IMessageSender> = ({ toggle, endpoint, userFunc }) => {
	const t = useT()
	const [form] = Form.useForm()

	const { mutate, isLoading } = useApiMutation(SMS_SEND)


	const { data, isLoading: getLoading } = useApi(SMS_TEMPLATES)
	const templates = data?.data

	const [search] = useSearchParams()
	const records: any = queryClient.getQueryData([endpoint, qs.parse(search.toString())])
	const users = userFunc ? userFunc(records?.data) : records?.data.map((item: any) => {
		return {
			name: item.name,
			phone: item.phone_number
		}
	})


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
		<Spin spinning={getLoading}>
			<Form
				layout="vertical"
				title={t("send_message")}
				onFinish={submit}
				style={{ margin: "16px 0" }}
				id="send_message_modal"
				form={form}
			>
				<Form.Item
					name="text"
					label={t("text")}
					rules={[R_REQUIRED, { min: 2 }]}
				>
					<Input.TextArea rows={3} />
				</Form.Item>
			</Form>
			{templates && <Fragment>
				<Typography style={{ marginBottom: 4 }}>{t("templates")}</Typography>
				<Radio.Group defaultValue={""} onChange={(e: any) => {
					const text = e.target.value
					form.setFieldValue("text", text)
				}}>
					{templates.map((item: any, index: number) => (
						<Radio value={item.text} key={index}>{item.name}</Radio>
					))}
				</Radio.Group>
			</Fragment>}
		</Spin>
	</Modal>
}

export default SendMessageStructure