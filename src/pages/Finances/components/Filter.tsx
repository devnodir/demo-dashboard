import MyButton from '@/components/antd/MyButton'
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

	const [isOpen, toggleFilter] = useToggleState(false)

	return (
		<Fragment>
			<Flex justify="space-between" className='mt-4 mb-lg-4 mb-2'>
				<Flex gap={8} className='d-none d-lg-flex'>
					<Select showSearch placeholder="Фильтр пациентов" style={{ minWidth: 200 }} />
					<DatePicker.RangePicker style={{ maxWidth: 300 }} format="DD.MM.YYYY" suffixIcon={<BsCalendarFill />} />
					<Select showSearch placeholder="Статус оплаты" />
					<Select showSearch placeholder="Выбрать врача" />
					<Select showSearch placeholder="Способ оплаты" />
				</Flex>
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