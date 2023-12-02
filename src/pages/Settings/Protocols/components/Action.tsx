import MyButton from '@/components/antd/MyButton'
import useMainStore from '@/store/main'
import { toCapitalize } from '@/utils/methods'
import { R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Card, Checkbox, Col, Dropdown, Flex, Form, Input, Row, Select, Typography } from 'antd'
import { useForm } from 'antd/es/form/Form'
import { MenuProps } from 'antd/lib'
import { Fragment } from 'react'
import { BsListUl } from 'react-icons/bs'
import { FaAnglesDown, FaAnglesUp, FaCircleDot, FaFont, FaSquareCheck, FaTrash } from 'react-icons/fa6'

const services = [
	{ label: "Health care", value: "1" },
	{ label: "Health care", value: "2" },
	{ label: "Health care", value: "3" },
]

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

const ProtocolAction = () => {

	const [form] = useForm()
	const { mode } = useMainStore()

	const submit = (value: any) => {
		console.log(value);
	}

	return (
		<Form
			layout="vertical"
			form={form}
			onFinish={submit}
			initialValues={{ items: [{ field_type: "input" }] }}
		>
			<Row gutter={24}>
				<Col md={12} span={24}>
					<Form.Item
						label="Template name"
						rules={[R_REQUIRED]}
						name="name"
					>
						<Input />
					</Form.Item>
				</Col>
				<Col md={12} span={24}>
					<Form.Item
						label="Service"
						rules={[R_REQUIRED]}
						name="service"
					>
						<Select options={services} showSearch />
					</Form.Item>
				</Col>
			</Row>

			<Form.List
				name="items"
			>
				{(fields, { add, remove, move }) => (
					<Fragment>
						{
							fields.map(({ key, name }) => {
								const type = form.getFieldValue("items")[name]?.field_type
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
													<MyButton icon={<FaTrash />} type="text" danger className="float-right" onClick={() => remove(name)} />
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
							<MyButton htmlType="submit" type="primary" color={colors.success} className='text-uppercase'>Create Protocol</MyButton>
						</Flex>
					</Fragment>

				)}
			</Form.List>
		</Form >
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