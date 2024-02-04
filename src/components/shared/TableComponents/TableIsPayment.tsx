import i18n from '@/i18n'
import { Tag } from 'antd'

const TableIsPayment = (is_payment: boolean) => {
	return <Tag color={is_payment ? "green" : "red"}>
		{i18n.t(is_payment ? "paid" : "not_paid")}
	</Tag>
}

export default TableIsPayment