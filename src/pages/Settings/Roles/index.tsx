import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import { ROLES } from "@/components/endpoints";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import useApi from "@/hooks/useApi";
import useApiMutation from "@/hooks/useApiMutation";
import useApiMutationID from "@/hooks/useApiMutationID";
import useT from "@/hooks/useT";
import useToggleState from "@/hooks/useToggleState";
import { IVoid } from "@/types/helper.type";
import { R_REQUIRED } from "@/utils/rules";
import { colors } from "@/utils/theme";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input, Spin, message } from "antd";
import dayjs from "dayjs";
import React, { useEffect, useState } from 'react';


const Roles: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)
	const { data, isLoading, isRefetching, refetch } = useApi(ROLES)
	const { mutate, isLoading: deleteLoading } = useApiMutationID("delete", ROLES)
	const [editingItem, setEditingItem] = useState<string | null>(null)

	const t = useT()

	const columns = [
		{
			title: t("role_name"),
			dataIndex: 'name',
		},
		{
			title: t("date"),
			dataIndex: 'createdAt',
			render: (date: string) => dayjs(date).format("DD.MM.YYYY")
		},
		{
			title: '',
			dataIndex: '_id',
			render: (id: string) => <ActionButtons
				onDelete={() => deleteItem(id)}
				onUpdate={() => {
					setEditingItem(id)
					toggle()
				}}
			/>
		},
	];

	const onFinish = () => {
		refetch()
		toggle()
		if (editingItem) setEditingItem(null)
	}

	const deleteItem = (id: string) => {
		mutate({ id }, {
			onSuccess: () => refetch(),
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}

	return (
		<div>
			<MyButton
				onClick={toggle}
				icon={<PlusOutlined />}
				color={colors.success}
				type="primary"
				className="text-uppercase float-right"
			>
				{t("add_role")}
			</MyButton>
			<MyTable
				columns={columns}
				dataSource={data?.data}
				rowSelection={{ type: "checkbox" }}
				loading={isLoading || isRefetching || deleteLoading}
			/>
			<Drawer
				open={isOpen}
				onClose={toggle}
				title={t(editingItem ? "edit_role" : "new_role")}
				destroyOnClose
			>
				<Action onFinish={onFinish} id={editingItem} />
			</Drawer>
		</div>
	);
};

export default Roles;


interface IFormData {
	name: string
}

interface IActionProps {
	onFinish: IVoid
	id: string | null
}

const Action: React.FC<IActionProps> = ({ onFinish, id }) => {
	const t = useT()

	const [form] = Form.useForm<IFormData>()

	const { mutate, isLoading } = useApiMutation(ROLES)
	const { mutate: editMutate, isLoading: editLoading } = useApiMutationID("patch", ROLES)
	const { isLoading: getLoading, data } = useApi(`${ROLES}/${id}`, { enabled: Boolean(id), cacheTime: 0 })

	useEffect(() => {
		if (data) {
			form.setFieldValue("name", data?.data.name)
		}
	}, [data])


	const submit = (data: IFormData) => {
		if (id) {
			editMutate({ data, id }, responses)
		} else {
			mutate(data, responses)
		}
	}

	const responses = {
		onSuccess: () => {
			onFinish()
		},
		onError: (err: any) => {
			message.error(err?.message)
		}
	}


	return (
		<Spin spinning={getLoading}>
			<Form
				form={form}
				layout="vertical"
				onFinish={submit}
			>
				<Form.Item
					label={t("role_name")}
					name="name"
					rules={[R_REQUIRED]}
				>
					<Input />
				</Form.Item>
				<Button block type="primary" htmlType="submit" className='mt-2' loading={isLoading || editLoading}>
					{t(id ? "save" : "create")}
				</Button>
			</Form>
		</Spin>
	)
}