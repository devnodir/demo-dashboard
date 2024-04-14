/* eslint-disable react-refresh/only-export-components */
import MyButton from "@/components/antd/MyButton";
import MyTable from "@/components/antd/MyTable";
import { FINANCES } from "@/components/endpoints";
import TableDate from "@/components/shared/TableComponents/TableDate";
import TableIsPayment from "@/components/shared/TableComponents/TableIsPayment";
import TableNameRecord from "@/components/shared/TableComponents/TableNameRecord";
import TablePriceCurrency from "@/components/shared/TableComponents/TablePriceCurrency";
import TableTime from "@/components/shared/TableComponents/TableTime";
import useColumnStructure from "@/components/shared/structurs/useColumnStructure";
import useApi from "@/hooks/useApi";
import useApiMutation from "@/hooks/useApiMutation";
import useApiMutationID from "@/hooks/useApiMutationID";
import useT from "@/hooks/useT";
import useToggleState from "@/hooks/useToggleState";
import useMainStore from "@/store/main";
import { ISetState } from "@/types/helper.type";
import { colors } from "@/utils/theme";
import { Flex, Input, Modal, Popconfirm, Timeline, message } from "antd";
import { Fragment, useState } from "react";
import { FaArrowRight, FaEye, FaMoneyBill, FaUserDoctor } from "react-icons/fa6";
import { HiMiniReceiptRefund } from "react-icons/hi2";

const useComlums = (endpoint: string, setId: ISetState<string | null>) => {
	const t = useT()
	const columns = [
		{
			title: t("patient"),
			dataIndex: 'patient',
			render: TableNameRecord
		},
		{
			title: t("services"),
			dataIndex: 'services',
			render: (service: any[]) => (
				<Timeline
					items={service.map((el) => {
						return {
							children: el.name,
							dot: <FaArrowRight />
						}
					})}
				/>
			)
		},
		{
			title: t("price"),
			dataIndex: 'services',
			render: (service: any[], order: any) => (
				order.isExpense ?
					TablePriceCurrency(order.amount)
					: <Timeline
						items={service.map((el) => {
							return {
								children: el.price,
								dot: <FaMoneyBill />
							}
						})}
					/>
			)
		},
		{
			title: t("doctors"),
			dataIndex: 'doctors',
			render: (doctors: any[]) => (
				<Timeline
					items={doctors.map(el => {
						return {
							children: el.name,
							dot: <FaUserDoctor />
						}
					})}
				/>
			)
		},

		{
			title: t("date"),
			dataIndex: 'createdAt',
			render: TableDate
		},
		{
			title: t("time"),
			dataIndex: 'createdAt',
			render: TableTime
		},
		{
			title: t("comment"),
			dataIndex: 'memo',
		},
		{
			title: t("status"),
			dataIndex: 'isPayment',
			render: TableIsPayment
		},
		{
			title: "",
			dataIndex: '_id',
			render: (id: any, order: any) => !order.isExpense && <AddPaymnet id={id} />
		},
	];

	return useColumnStructure(columns, endpoint, setId)
}

export default useComlums

const AddPaymnet = ({ id }: any) => {
	const t = useT()
	const [isOpen, toggle] = useToggleState(false)
	const { mode } = useMainStore()
	const [amount, setAmount] = useState<any>()

	const { data, refetch, isLoading, isRefetching } = useApi(FINANCES, { enabled: isOpen }, { parent_id: id, category: "payment", limit: 100 })

	const { mutate, isLoading: paymnetLoad } = useApiMutation(`${FINANCES}/payment/${id}`)

	const records = data?.data

	const colums = [
		{
			title: t("price"),
			dataIndex: 'amount',
			render: TablePriceCurrency
		},
		{
			title: t("date"),
			dataIndex: 'createdAt',
			render: TableDate
		},
		{
			title: t("refund"),
			dataIndex: "isRefund",
			render: (isRefund: boolean, order: any) => <Refund isRefund={isRefund} id={order._id} refetch={refetch} />
		},
	]


	const handlePaymnet = () => {
		if (!amount) return
		mutate({ paid_amount: amount }, {
			onSuccess: () => {
				refetch()
				setAmount(undefined)
			},
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}

	return <Fragment>
		<MyButton type="text" color={colors.success} icon={<FaEye size="20" />} onClick={toggle} />
		<Modal
			title={t("add_paymnet")}
			open={isOpen}
			width={800}
			onCancel={toggle}
			footer={null}
			styles={{
				content: { background: colors[mode].layout },
				header: { background: colors[mode].layout }
			}}
		>
			<Flex justify="flex-end" gap={12}>
				<Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ width: 160 }} placeholder={t("price")} />
				<MyButton type="primary" color={colors.success} onClick={handlePaymnet} loading={paymnetLoad}>
					{t("add_paymnet")}
				</MyButton>
			</Flex>
			<MyTable
				dataSource={records}
				columns={colums}
				pagination={false}
				loading={isLoading || isRefetching}
			/>
		</Modal>
	</Fragment>
}


const Refund = ({ isRefund, id, refetch }: any) => {

	const { mutate, isLoading } = useApiMutationID("patch", `${FINANCES}/payment`)
	const t = useT()

	const handleRefund = () => {
		mutate({ id }, {
			onSuccess: () => {
				refetch()
			},
			onError: (err) => {
				message.error(err?.message)
			}
		})
	}

	return isRefund ? t("refunded") :
		<Popconfirm
			title="Are you sure?"
			// description="Are you sure to delete this task?"
			onConfirm={handleRefund}
			okText="Yes"
			cancelText="No"
		>
			<MyButton type="text" color={colors.yellow} loading={isLoading} icon={<HiMiniReceiptRefund size="20" />} />
		</Popconfirm>

}