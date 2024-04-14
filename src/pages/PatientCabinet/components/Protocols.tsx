import MyButton from '@/components/antd/MyButton'
import MyTable from '@/components/antd/MyTable'
import TableNameRecord from '@/components/shared/TableComponents/TableNameRecord'
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { colors } from '@/utils/theme'
import { PlusOutlined } from '@ant-design/icons'
import { Flex } from 'antd'
import React, { Fragment, useState } from 'react'
import { FaEye } from 'react-icons/fa6'
import ComplateProtocol from './ComplateProtocol'

interface Props {
	data: any[],
	refetch: any
}

const Protocols: React.FC<Props> = ({ data, refetch }) => {

	const t = useT()
	const [protocolId, setProtocolId] = useState<string | null>(null)
	const [isOpen, toggle] = useToggleState(false)

	const columns = [
		{
			title: t("name"),
			dataIndex: 'assigned_lab',
			render: TableNameRecord
		},
		{
			title: t("type"),
			dataIndex: 'type',
			render: (type: string) => t(type === "default" ? "protocol" : "lab")
		},
		{
			title: t("template"),
			dataIndex: '_id',
			render: (id: string) => (
				<MyButton color={colors.success} type="text" icon={<FaEye />} onClick={() => {
					toggle()
					setProtocolId(id)
				}} />
			)
		}
	]


	return (
		<Fragment>
			<Flex justify="end">
				<MyButton
					onClick={toggle}
					type="primary"
					icon={<PlusOutlined />}
					color={colors.success}
					className="text-uppercase float-right"
				>
					{t("add_protocol")}
				</MyButton>
			</Flex>
			<MyTable
				dataSource={data}
				columns={columns}
			/>
			{isOpen && <ComplateProtocol
				data={data}
				toggle={toggle}
				protocolId={protocolId}
				setProtocolId={setProtocolId}
				refetch={refetch}
			/>}
		</Fragment>
	)
}

export default Protocols