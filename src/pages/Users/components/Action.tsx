import MyButton from '@/components/antd/MyButton'
import useT from '@/hooks/useT'
import { phoneFormatter } from '@/utils/formatter'
import { R_PASSWORD, R_PHONE, R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Typography } from 'antd'
import React, { Fragment } from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import { FaEye, FaEyeSlash, FaLock, FaPhone, FaTrash, FaUser } from 'react-icons/fa6'

const role = [
	{ label: "Admin", value: "1" },
	{ label: "Moderator", value: "2" },
	{ label: "Contributor", value: "3" }
]

const branches = [
	{ label: "Yunusobod Filial", value: "1" },
	{ label: "Mirobod Filial", value: "2" },
	{ label: "Yakkasaroy Filial", value: "3" },
	{ label: "Uchtepa Filial", value: "4" },
]

const status = [
	{ label: "Active", value: "active" },
	{ label: "Inactive", value: "inactive" },
]

const UsersAction: React.FC = () => {

	const t = useT()


	return (
		<Form
			layout="vertical"
			initialValues={{
				addtion_phones: [{}]
			}}
		>
			<Form.Item
				label={t("full_name")}
				name="name"
				rules={[R_REQUIRED]}
			>
				<Input
					addonBefore={<FaUser />}
				/>
			</Form.Item>
			<Form.Item
				label={t("l_phone")}
				name="phone"
				rules={[R_REQUIRED, R_PHONE]}
				validateFirst
			>
				<InputNumber
					placeholder="+998 ** *** ** **"
					formatter={phoneFormatter}
					addonBefore={<FaPhone />}
				/>
			</Form.Item>
			<Form.Item
				label={t("role")}
				name="rol"
			>
				<Select
					options={role}
				/>
			</Form.Item>
			<Form.Item
				label={t("branches")}
				name="branches"
			>
				<Select
					options={branches}
					mode="multiple"
				/>
			</Form.Item>
			<Form.Item
				label={t("birthday")}
				name="birthday"
			>
				<DatePicker
					format="DD.MM.YYYY"
					style={{ width: "100%" }}
					suffixIcon={<BsCalendarFill />}
				/>
			</Form.Item>
			<Form.Item
				label={t("status")}
				name="status"
			>
				<Select
					options={status}
				/>
			</Form.Item>
			<Form.Item
				label={t("l_password")}
				name="password"
				validateFirst
				rules={[R_REQUIRED, R_PASSWORD]}
			>
				<Input.Password
					addonBefore={<FaLock />}
					iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
					placeholder="********"
				/>
			</Form.Item>
			<Form.List
				name="addtion_phones"
			>
				{(fields, { add, remove }) => (
					<Fragment>
						<Typography.Text className='mb-2 d-inline-block'>{t("addtional_phones")}</Typography.Text>
						{
							fields.map(({ key, name }) => (
								<Form.Item
									name={[name, "additional_phone"]}
									rules={[R_PHONE]}
									validateFirst
									key={key}
								>
									<Row
										gutter={4}
									>
										<Col span={20}>
											<InputNumber
												placeholder="+998 ** *** ** **"
												formatter={phoneFormatter}
												addonBefore={<FaPhone />}
											/>
										</Col>
										<Col span={4}>
											<Button danger disabled={fields.length === 1} type="text" className='float-right' onClick={() => remove(name)}>
												<FaTrash />
											</Button>
										</Col>
									</Row>
								</Form.Item>
							))
						}
						<MyButton color={colors.success} shape="circle" className='mb-4 float-right' type="primary" onClick={add}>
							<PlusOutlined />
						</MyButton>
					</Fragment>
				)}
			</Form.List>
			<Button block type="primary" htmlType="submit" className='mt-2 text-uppercase'>
				{t("create")}
			</Button>
		</Form>
	)
}

export default UsersAction