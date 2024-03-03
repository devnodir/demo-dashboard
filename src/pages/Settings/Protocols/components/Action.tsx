import MyButton from '@/components/antd/MyButton'
import { PROTOCOLS } from '@/components/endpoints'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import useMainStore from '@/store/main'
import { IQueryParams, IVoid } from '@/types/helper.type'
import { toCapitalize } from '@/utils/methods'
import { R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Card, Checkbox, Dropdown, Flex, Form, Input, Select, Spin, Typography, message } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { MenuProps } from 'antd/lib'
import _ from 'lodash'
import { Fragment, useEffect } from 'react'
import { BsListUl } from 'react-icons/bs'
import { FaAnglesDown, FaAnglesUp, FaCircleDot, FaFont, FaSquareCheck, FaTrashCan } from 'react-icons/fa6'


const props: any = {
	select: {
		options: ["multiple", "searchable", "required"],
		values: true
	},
	input: {
		options: ["required"],
		types: ["text", "number", "date", "textarea", "phone", "email"]
	},
	radio: {
		options: ["required"],
		values: true
	},
	checkbox: {
		options: []
	}
}

interface Props {
	query: IQueryParams,
	id: string | null
	onFinish: IVoid
}

const ProtocolAction: React.FC<Props> = ({ query, id, onFinish }) => {

	const t = useT()

	const [form] = useForm()
	const { mode } = useMainStore()

	const { data: protocolData, isLoading } = useApi(`${PROTOCOLS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })

	const { mutate: createMutate, isLoading: isCreating } = useApiMutation(PROTOCOLS)
	const { mutate: editMutate, isLoading: isEditing } = useApiMutationID("patch", PROTOCOLS)

	useEffect(() => {
		if (protocolData) {
			const data = protocolData?.data
			form.setFieldsValue(_.pick(data, ["name", "fields"]))
		}
	}, [protocolData])

	const submit = (formData: any) => {
		const data = { ...formData, type: query.type }
		if (id) editMutate({ data, id }, responses)
		else createMutate(data, responses)
	}

	const responses = {
		onSuccess: () => onFinish(),
		onError: (err: any) => {
			message.error(err.message)
		}
	}

	return (
		<Spin spinning={isLoading}>
			<Form
				layout="vertical"
				form={form}
				onFinish={submit}
				initialValues={{ fields: [{ field_type: "input" }] }}
			>
				<Form.Item
					label="Template name"
					rules={[R_REQUIRED]}
					name="name"
				>
					<Input />
				</Form.Item>

				<Form.List
					name="fields"
				>
					{(fields, { add, remove, move }) => (
						<Fragment>
							{
								fields.map(({ key, name }) => {
									const type = form.getFieldValue("fields")[name]?.field_type
									const prop = props[type] ?? {}
									return (
										<Card
											key={key}
											className='mb-4'
											headStyle={{ background: colors[mode].body }}
											bodyStyle={{ paddingBottom: 0 }}
											style={{ borderColor: colors[mode].border }}
											title={
												<Flex justify="space-between" align="center">
													<Typography.Title level={5} className='mb-0' style={{ width: 100 }}>{toCapitalize(type)}</Typography.Title>
													<div>
														<MyButton icon={< FaAnglesDown />} type="text" color={colors.primary} onClick={() => move(name, name + 1)} disabled={name + 1 === fields.length} />
														<MyButton icon={< FaAnglesUp />} type="text" color={colors.primary} onClick={() => move(name, name - 1)} disabled={name === 0} />
													</div>
													<div style={{ width: 100 }}>
														<MyButton icon={<FaTrashCan />} type="text" danger className="float-right" onClick={() => remove(name)} />
													</div>
												</Flex>
											}
										>
											<Form.Item
												label="Field name"
												rules={[R_REQUIRED]}
												name={[name, "field_name"]}
											>
												<Input />
											</Form.Item>
											{
												prop.types ?
													<Form.Item
														label="Field type"
														rules={[R_REQUIRED]}
														name={[name, "type"]}
													>
														<Select showSearch options={prop.types.map((el: string) => { return { label: toCapitalize(el), value: el } })} />
													</Form.Item>
													: null
											}
											{prop.values ?
												<Form.Item
													label="Field options"
													rules={[R_REQUIRED]}
													name={[name, "options"]}
												>
													<Select
														mode="tags"
														open={false}
														suffixIcon={false}
														aria-rowcount={2}
													/>
												</Form.Item>

												: null}
											<Flex gap={8}>
												{
													prop.options?.map((option: string, ix: number) => (
														<Form.Item
															key={ix}
															name={[name, option]}
															style={{ marginBottom: 0 }}
															valuePropName="checked"
															initialValue={false}
														>
															<Checkbox className="text-capitalize">{option}</Checkbox>
														</Form.Item>
													))
												}
											</Flex>
										</Card>
									)
								})
							}
							<Flex justify="space-between" align="center">
								<AddButton onClick={({ key }) => add({ field_type: key })} />
								<MyButton htmlType="submit" type="primary" color={colors.success} className='text-uppercase' loading={isCreating || isEditing}>{t(id ? "save" : "create")}</MyButton>
							</Flex>
						</Fragment>

					)}
				</Form.List>
			</Form >
		</Spin>
	)
}

export default ProtocolAction


const AddButton = ({ onClick }: { onClick: MenuProps["onClick"] }) => {

	const items: MenuProps["items"] = [
		{ label: "Input", icon: <FaFont />, key: "input" },
		{ label: "Select", icon: <BsListUl />, key: "select" },
		{ label: "Radio", icon: <FaCircleDot />, key: "radio" },
		{ label: "Checkbox", icon: <FaSquareCheck />, key: "checkbox" },
	]

	return (
		<Dropdown menu={{ items, onClick }} trigger={["click"]} overlayStyle={{ width: 150 }} arrow >
			<MyButton shape="circle" icon={<PlusOutlined />} type="primary" className='mt-2 mb-4' />
		</Dropdown>
	)
}