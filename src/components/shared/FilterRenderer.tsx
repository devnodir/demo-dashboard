import { useQueryParams } from '@/hooks/useQueryParams'
import { Col, DatePicker, Input, Row, Select } from 'antd'
import React, { useEffect, useState } from 'react'
import SelectApi from './Form/SelectApi'
import dayjs from 'dayjs'


const FilterRenderer: React.FC<any> = ({ filters, defaultValues, ...props }) => {

	const [query, setQuery] = useQueryParams(defaultValues)
	const [inputVal, setInputVal] = useState<any>({})
	const [isMount, setIsMount] = useState(false)

	useEffect(() => {
		if (isMount) {
			const timeout = setTimeout(() => {
				setQuery({ ...query, page: 1, [inputVal.name]: inputVal.value })
			}, 500)
			return () => clearTimeout(timeout)
		} else {
			setIsMount(true)
		}
	}, [inputVal])


	const switcher = (type: any) => {
		switch (type) {
			case "select":
				return Select
			case "select-api":
				return SelectApi
			case "input":
				return Input
			case "date":
				return DatePicker
		}
	}

	return <Row {...props}>
		{filters.map(({ input, type, ...props }: any) => {
			const Component: any = switcher(type)
			const value = query?.[input.name]
			return <Col {...props}>
				<Component allowClear defaultValue={
					type === "date" ? value ? dayjs(value) : undefined : value
				} style={{ width: "100%" }} {...input} onChange={(e: any) => {
					if (type === "input") {
						setInputVal({ name: input.name, value: e.target.value })
					} else if (type === "date") {
						setQuery({ ...query, page: 1, [input.name]: e ? dayjs(e).format("YYYY-MM-DD") : undefined })
					} else {
						setQuery({ ...query, page: 1, [input.name]: e })
					}
				}} />
			</Col>
		})}
	</Row>

}

export default FilterRenderer