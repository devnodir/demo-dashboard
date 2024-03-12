import { PATIENTS, WAREHOUSE_CATEGORY, WAREHOUSE_SELLS } from '@/components/endpoints'
import SelectApi from '@/components/shared/Form/SelectApi'
import useApi from '@/hooks/useApi'
import useApiMutation from '@/hooks/useApiMutation'
import useApiMutationID from '@/hooks/useApiMutationID'
import useT from '@/hooks/useT'
import { IVoid } from '@/types/helper.type'
import { R_REQUIRED } from '@/utils/rules'
import { Button, Checkbox, Form, InputNumber, Spin, message } from 'antd'
import _ from 'lodash'
import React, { useEffect } from 'react'

interface IProps {
	id: string | null
	onFinish: IVoid
}

const WarehouseAction: React.FC<IProps> = ({ id, onFinish }) => {

	const t = useT()

	const [form] = Form.useForm()


	const { data, isLoading } = useApi(`${WAREHOUSE_SELLS}/${id}`, { enabled: Boolean(id), cacheTime: 0 })
	const { mutate: createMutate, isLoading: createLoading } = useApiMutation(WAREHOUSE_SELLS)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", WAREHOUSE_SELLS)

	useEffect(() => {
		if (data) {
			const record = data?.data
			form.setFieldsValue(_.pick(record, ["storage_category", "amount", "stock", "patient", "is_refund"]))
		}
	}, [data])

	const submit = (data: any) => {
		if (id) editMutate({ data, id }, responses)
		else createMutate(data, responses)
	}

	const responses = {
		onSuccess: () => {
			onFinish()
		},
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
			>
				{
					id ?
						<Form.Item
							name="is_refund"
							valuePropName="checked"
						>
							<Checkbox>{t("is_refund")}</Checkbox>
						</Form.Item> :
						<>
							<Form.Item
								label={t("category")}
								name="storage_category"
								rules={[R_REQUIRED]}
							>
								<SelectApi
									endpoint={WAREHOUSE_CATEGORY}
									showSearch
									allowClear
								/>

							</Form.Item>
							<Form.Item
								label={t("price")}
								name="amount"
							>
								<InputNumber style={{ width: "100%" }} />
							</Form.Item>
							<Form.Item
								label={t("stock")}
								name="stock"
							>
								<InputNumber style={{ width: "100%" }} />
							</Form.Item>

							<Form.Item
								label={t("patient")}
								name="patient"
								rules={[R_REQUIRED]}
							>
								<SelectApi
									endpoint={PATIENTS}
									showSearch
									allowClear
								/>

							</Form.Item>
						</>
				}

				<Button block type="primary" htmlType="submit" className='mt-2' loading={createLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}

export default WarehouseAction