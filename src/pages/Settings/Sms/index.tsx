import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import ActionButtons from "@/components/shared/TableComponents/ActionButtons";
import useToggleState from "@/hooks/useToggleState";
import { R_REQUIRED } from "@/utils/rules";
import { colors } from "@/utils/theme";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Drawer, Form, Input } from "antd";
import React from 'react';

const Sms: React.FC = () => {

	const [isOpen, toggle] = useToggleState(false)


	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Text',
			dataIndex: 'text',
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
			name: "Template 1",
			text: "SMS templates are pre-written text messages that you can use and customise for different situations",
			key: "1"
		},
		{
			name: "Template 1",
			text: "SMS templates are pre-written text messages that you can use and customise for different situations",
			key: "2"
		},
		{
			name: "Template 1",
			text: "SMS templates are pre-written text messages that you can use and customise for different situations",
			key: "3"
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
				Add template
			</MyButton>
			<MyTable
				columns={columns}
				dataSource={data}
				rowSelection={{ type: "checkbox" }}
			/>
			<Drawer
				open={isOpen}
				onClose={toggle}
				title="New template"
				destroyOnClose
			>
				<Action />
			</Drawer>
		</div>
	);
};

export default Sms;


const Action: React.FC = () => {

	return (
		<Form
			layout="vertical"
		>
			<Form.Item
				label="Name"
				name="name"
				rules={[R_REQUIRED]}
			>
				<Input />
			</Form.Item>
			<Form.Item
				label="Text"
				name="text"
				rules={[R_REQUIRED]}
			>
				<Input.TextArea rows={5} />
			</Form.Item>
			<Button block type="primary" htmlType="submit" className='mt-2'>
				CREATE
			</Button>
		</Form>
	)
}