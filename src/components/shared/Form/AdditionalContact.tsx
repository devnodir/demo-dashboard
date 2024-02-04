import MyButton from '@/components/antd/MyButton'
import useT from '@/hooks/useT'
import { phoneFormatter } from '@/utils/formatter'
import { R_EMAIL, R_PHONE, R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, Dropdown, Form, Input, InputNumber, Row, Typography } from 'antd'
import { MenuProps } from 'antd/lib'
import React, { Fragment } from 'react'
import { FaEnvelope, FaPhone, FaTelegram, FaTrash } from 'react-icons/fa6'

interface Props {
	form: any
}

const AdditionalContact: React.FC<Props> = ({ form }) => {

	const t = useT()

	return (
		<Form.List
			name="additional_contact"
		>
			{(fields, { add, remove }) => (
				<Fragment>
					<Typography.Text className='mb-2 d-inline-block'>{t("addtional_contact")}</Typography.Text>
					{
						fields.map(({ key, name }) => {
							const type = form.getFieldValue("additional_contact")[name]?.type
							return (
								<Row
									gutter={2}
									key={key}
								>
									<Col span={21}>
										{
											type === "phone_number" &&
											<Form.Item
												name={[name, "value"]}
												rules={[R_REQUIRED, R_PHONE]}
												validateFirst
												key={key}
											>
												<InputNumber
													placeholder="+998 ** *** ** **"
													formatter={phoneFormatter}
													addonBefore={<FaPhone />}
												/>


											</Form.Item>
										}
										{
											type === "email" &&
											<Form.Item
												name={[name, "value"]}
												rules={[R_REQUIRED, R_EMAIL]}
												validateFirst
												key={key}
											>
												<Input
													placeholder="example@gmail.com"
													addonBefore={<FaEnvelope />}
												/>
											</Form.Item>
										}
										{
											type === "telegram" &&
											<Form.Item
												name={[name, "value"]}
												rules={[R_REQUIRED]}
												validateFirst
												key={key}
											>
												<Input
													placeholder="@example"
													addonBefore={<FaTelegram />}
												/>
											</Form.Item>
										}
									</Col>
									<Col span={3}>
										<Button danger type="text" className='float-right' onClick={() => remove(name)}>
											<FaTrash />
										</Button>
									</Col>
								</Row>
							)
						})
					}
					<AddButton onClick={({ key }) => add({ type: key })} />
				</Fragment>
			)}
		</Form.List>
	)
}

export default AdditionalContact

const AddButton = ({ onClick }: { onClick: MenuProps["onClick"] }) => {

	const t = useT()

	const items: MenuProps["items"] = [
		{ label: t("l_phone"), icon: <FaPhone />, key: "phone_number" },
		{ label: "Email", icon: <FaEnvelope />, key: "email" },
		{ label: "Telegram", icon: <FaTelegram />, key: "telegram" },
	]

	return (
		<Dropdown menu={{ items, onClick }} trigger={["click"]} overlayStyle={{ width: 200 }} arrow >
			<MyButton color={colors.success} shape="circle" className='mb-4 float-right' type="primary">
				<PlusOutlined />
			</MyButton>
		</Dropdown>
	)
}