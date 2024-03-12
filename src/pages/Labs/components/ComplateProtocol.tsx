import MyButton from '@/components/antd/MyButton'
import { PATIENTS, PROTOCOLS, PROTOCOLS_ASSIGN } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { ISetState } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { Checkbox, Drawer, Form, Input, Radio, Select, Spin, message } from 'antd'
import _ from 'lodash'
import React, { useEffect } from 'react'

interface Props {
	protocolId: string | null
	setProtocolId: ISetState<string | null>
}

const ComplateProtocol: React.FC<Props> = ({ protocolId, setProtocolId }) => {
	const t = useT()
	const [form] = Form.useForm()

	const { data, isLoading, isSuccess } = useApi(`${PROTOCOLS}/${protocolId}`, { enabled: Boolean(protocolId), cacheTime: 0 })

	const { data: protocol, isLoading: isProtocolLoading, isSuccess: isCreated } = useApi(`${PROTOCOLS_ASSIGN}/${protocolId}?type=lab`, { enabled: isSuccess, cacheTime: 0 })

	const { mutate: createMutate, isLoading: isCreating } = useApiMutation(PROTOCOLS_ASSIGN)
	const { mutate: editMutate, isLoading: isEditing } = useApiMutationID("patch", PROTOCOLS_ASSIGN)

	const form_fields = Array.isArray(data?.data?.fields) ? data?.data?.fields : null

	const protocolData = protocol?.data


	useEffect(() => {
		if (protocolData) {
			form.setFieldsValue(_.pick(protocolData, ["patient", "fields"]))
		}
	}, [protocolData])

	useEffect(() => {
		if (form_fields) form.setFieldValue("fields", form_fields)
	}, [form_fields])

	const submit = (formData: any) => {
		const data = {
			...formData,
			type: "lab",
			assigned_lab: protocolId,
		}

		if (isCreated) editMutate({ data, id: protocolData._id }, responses)
		else createMutate(data, responses)
	}

	const onClose = () => {
		setProtocolId(null)
		form.resetFields()
	}

	const responses = {
		onSuccess: () => onClose(),
		onError: (err: any) => {
			message.error(err.message)
		}
	}

	return (
		<Drawer
			open={Boolean(protocolId)}
			onClose={onClose}
			title={t("template")}
		>
			<Spin spinning={isLoading || isProtocolLoading}>
				<Form
					layout="vertical"
					form={form}
					onFinish={submit}
					noValidate
				>
					<Form.Item
						name="patient"
						label={t("patient")}
					>
						<SelectApi
							endpoint={PATIENTS}
							showSearch
							allowClear
						/>
					</Form.Item>
					{
						form_fields && <Form.List
							name="fields"
						>
							{(fields) => (
								fields.map(({ key, name }) => {
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

							)}

						</Form.List>
					}
					<MyButton htmlType="submit" type="primary" color={colors.success} block className='text-uppercase' loading={isCreating || isEditing}>{t(isCreated ? "save" : "create")}</MyButton>
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