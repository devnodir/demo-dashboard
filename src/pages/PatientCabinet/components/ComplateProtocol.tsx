import MyButton from '@/components/antd/MyButton'
import { PROTOCOLS, PROTOCOLS_ASSIGN, PROTOCOL_LABS } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { ISetState } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { Checkbox, Drawer, Form, Input, Radio, Select, Spin, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Props {
	data: any[]
	protocolId: string | null
	setProtocolId: ISetState<string | null>
	refetch: any,
	toggle: any
}

const ComplateProtocol: React.FC<Props> = ({ data, protocolId, setProtocolId, refetch, toggle }) => {
	const t = useT()
	const { id } = useParams()
	const [form] = Form.useForm()
	const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)


	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(PROTOCOLS_ASSIGN)
	const { mutate: editMutate, isLoading: isEditing } = useApiMutationID("patch", PROTOCOLS_ASSIGN)

	const { data: protocolsData, isLoading, isRefetching } = useApi(`${PROTOCOLS}/${selectedTemplate}`, { enabled: Boolean(selectedTemplate), cacheTime: 0 })

	const record = data?.find(el => el._id === protocolId)

	const form_fields = record?.assigned_lab.fields || protocolsData?.data?.fields

	useEffect(() => {
		if (form_fields) form.setFieldValue("fields", record?.fields || protocolsData?.data?.fields)
	}, [form_fields])

	const submit = (formData: any) => {
		const data = {
			patient: id,
			...formData,
		}
		if (protocolId) {
			editMutate({ data, id: protocolId }, responses)
		} else {
			data.type = "default"
			createMutate(data, responses)
		}
	}

	const onClose = () => {
		setProtocolId(null)
		form.resetFields()
		toggle()
	}

	const responses = {
		onSuccess: () => {
			onClose()
			refetch()
		},
		onError: (err: any) => {
			message.error(err.message)
		}
	}

	return (
		<Drawer
			open
			onClose={onClose}
			title={t("template")}
		>
			<Spin spinning={isLoading || isRefetching}>
				<Form
					layout="vertical"
					form={form}
					onFinish={submit}
					noValidate
				>
					{!protocolId && <Form.Item
						label={t("template")}
						name="assigned_lab"
						rules={[R_REQUIRED]}
					>
						<SelectApi
							endpoint={PROTOCOL_LABS}
							showSearch
							allowClear
							onChange={setSelectedTemplate}
						/>
					</Form.Item>}
					{
						<Form.List
							name="fields"
						>
							{(fields) => {
								return (
									fields?.map(({ key, name }) => {
										const item = form_fields[name]
										const is_checkbox = item.field_type === "checkbox"
										return <Form.Item
											key={key}
											label={is_checkbox ? "" : item.field_name}
											name={[name, "value"]}
											rules={item.required ? [R_REQUIRED] : undefined}
											valuePropName={is_checkbox ? "checked" : undefined}
										>
											<FieldRendered item={item} />
										</Form.Item>
									})

								)
							}}

						</Form.List>
					}
					<MyButton htmlType="submit" type="primary" color={colors.success} block className='text-uppercase' loading={isEditing || createLoading}>{t(protocolId ? "save" : "create")}</MyButton>
				</Form>
			</Spin>
		</Drawer>
	)
}

export default ComplateProtocol


const FieldRendered = ({ item, ...props }: any) => {

	const makeOptions = (options: any[]) => {
		return options.map(item => {
			return {
				value: item,
				lable: item
			}
		})
	}

	switch (item.field_type) {
		case "input":
			return <Input type={item.type} {...props} />
		case "select":
			return <Select options={makeOptions(item.options)} {...props} />
		case "radio":
			return <Radio.Group {...props}>
				{
					item.options.map((item: string, index: number) => (
						<Radio value={item} key={index}>{item}</Radio>
					))
				}
			</Radio.Group>
		case "checkbox":
			return <Checkbox value={item.field_name} {...props}>{item.field_name}</Checkbox>
	}
}