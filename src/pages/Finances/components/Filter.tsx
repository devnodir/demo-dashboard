import MyButton from '@/components/antd/MyButton'
import { PATIENTS } from '@/components/endpoints'
import FilterRenderer from '@/components/shared/FilterRenderer'
import { CATEGORY_PAYMENT } from '@/components/variables'
import useT from '@/hooks/useT'
import useToggleState from '@/hooks/useToggleState'
import { IVoid } from '@/types/helper.type'
import { colors } from '@/utils/theme'
import { DownloadOutlined } from '@ant-design/icons'
import { DatePicker, Drawer, Flex, Select } from 'antd'
import React, { Fragment } from 'react'
import { BsCalendarFill } from 'react-icons/bs'
import { FaFilter } from 'react-icons/fa6'

interface Props {
	toggle: IVoid
}

const FinanceFilter: React.FC<Props> = ({ toggle }) => {
	const t = useT()
	const [isOpen, toggleFilter] = useToggleState(false)

	return (
		<Fragment>
			<Flex justify="space-between" className='mt-4 mb-lg-4 mb-2'>
				<FilterRenderer
					gutter={[12, 12]}
					style={{ flexGrow: 1 }}
					filters={[
						{
							key: "parent_id",
							span: 3,
							lg: 6,
							type: "select-api",
							input: {
								name: "parent_id",
								placeholder: t("patient"),
								endpoint: PATIENTS
							}
						},
						{
							key: "date",
							span: 3,
							lg: 4,
							type: "date",
							input: {
								name: "date",
								placeholder: t("date"),
							}
						},
						{
							key: "category",
							span: 3,
							lg: 4,
							type: "select",
							input: {
								name: "category",
								placeholder: t("category"),
								options: CATEGORY_PAYMENT
							}
						},
					]}
				/>
				<MyButton color={colors.primary} className='d-lg-none' icon={<FaFilter />} onClick={toggleFilter}>Фильтр</MyButton>
				<Flex gap={8} className=''>
					<MyButton color={colors.success} icon={<DownloadOutlined />}>
						{window.innerWidth > 576 && <span>Скачать Excel</span>}
					</MyButton>
					<MyButton type="primary" onClick={toggle}>Создать счет</MyButton>
				</Flex>
			</Flex>
			<Drawer
				open={isOpen}
				title="Фильтр"
				onClose={toggleFilter}
			>
				<Flex vertical gap={12}>
					<Select showSearch placeholder="Фильтр пациентов" style={{ minWidth: 200 }} />
					<DatePicker.RangePicker style={{ maxWidth: window.innerWidth > 576 ? 300 : "100%" }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<Select showSearch placeholder="Статус оплаты" />
					<Select showSearch placeholder="Выбрать врача" />
					<Select showSearch placeholder="Способ оплаты" />
					<MyButton type="primary" color={colors.success} className='mt-4'>SUBMIT</MyButton>
				</Flex>
			</Drawer>
		</Fragment>
	)
}

export default FinanceFilter