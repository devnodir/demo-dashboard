import { phoneFormatter } from '@/utils/formatter'

const TablePhone = (phone_number: string) => {
	return phoneFormatter(phone_number)
}

export default TablePhone