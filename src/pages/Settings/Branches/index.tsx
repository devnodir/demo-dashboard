import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import useToggleState from "@/hooks/useToggleState";
import { R_REQUIRED } from "@/utils/rules";
import { colors } from "@/utils/theme";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input } from "antd";
import React from 'react';

const Branches: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)


	const columns = [
		{
			title: 'Branch name',
			dataIndex: 'name',
		},
		{
			title: '',
			dataIndex: 'actions',
			key: 'actions',
			render: () => <ActionButtons
				onDelete={() => { }}
				onUpdate={() => { }}
			/>
		},
	];

	const data = [
		{
			name: "Yunusobod Filiali",
			key: "1"
		},
		{
			name: "Yunusobod Filiali",
			key: "2"
		},
		{
			name: "Yunusobod Filiali",
			key: "3"
		},
		{
			name: "Yunusobod Filiali",
			key: "4"
		},
		{
			name: "Yunusobod Filiali",
			key: "5"
		},
	]

	return (
		<div>
			<MyButton
				onClick={toggle}
				icon={<PlusOutlined />}
				color={colors.success}
				type="primary"
				className="text-uppercase float-right"
			>
				Add branch
			</MyButton>
			<MyTable
				columns={columns}
				dataSource={data}
				rowSelection={{ type: "checkbox" }}
			/>
			<Drawer
				open={isOpen}
				onClose={toggle}
				title="New service"
				destroyOnClose
			>
				<Action />
			</Drawer>
		</div>
	);
};

export default Branches;


const Action: React.FC = () => {

	return (
		<Form
			layout="vertical"
		>
			<Form.Item
				label="Brach name"
				name="name"
				rules={[R_REQUIRED]}
			>
				<Input />
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				CREATE
			</Button>
		</Form>
	)
}