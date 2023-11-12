import { phoneFormatter } from '@/utils/formatter'
import { InputNumber, InputNumberProps } from 'antd'
import React from 'react'
import { FaPhone } from 'react-icons/fa6'

const PhoneInput: React.FC<InputNumberProps> = (props) => {


	return (
		<InputNumber
			formatter={phoneFormatter}
			addonBefore={<FaPhone />}
			{...props}
		/>
	)
}

export default PhoneInput