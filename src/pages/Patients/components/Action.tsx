import MyButton from '@/components/antd/MyButton'
import useT from '@/hooks/useT'
import { phoneFormatter } from '@/utils/formatter'
import { R_PHONE, R_REQUIRED } from '@/utils/rules'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Button, Col, DatePicker, Form, Input, InputNumber, Row, Select, Typography } from 'antd'
import React, { Fragment } from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import { FaLocationDot, FaPhone, FaTrash, FaUser } from 'react-icons/fa6'

const tags = [
	{ label: "VIP", value: "vip", color: "red" },
	{ label: "50%", value: "50" },
	{ label: "70%", value: "70" }
]

const PatientAction: React.FC = () => {

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
				label={t("address")}
				name="address"
				rules={[R_REQUIRED]}
			>
				<Input
					addonBefore={<FaLocationDot />}
				/>
			</Form.Item>
			<Form.Item
				label={t("tags")}
				name="tags"
			>
				<Select
					mode="multiple"
					allowClear
					options={tags}
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


			<Button block type="primary" htmlType="submit" className="text-uppercase">
				{t("create")}
			</Button>
		</Form>
	)
}

export default PatientAction