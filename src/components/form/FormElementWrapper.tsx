import { IChildren } from '@/types/helper.type'
import { Typography } from 'antd'
import React from 'react'
import { FieldError } from 'react-hook-form'

interface IProps {
	label?: string
	error?: FieldError
	children: IChildren
}

const FormElementWrapper: React.FC<IProps> = ({ label, error, children }) => {


	return (
		<div className='form-element-wrapper'>
			{label && <Typography.Text style={{ marginBottom: 4, display: "block" }} type={error && "danger"}>{label}</Typography.Text>}
			{children}
			{error && <Typography.Text style={{ fontSize: 12 }} type="danger">{error.message}</Typography.Text>}
		</div>
	)
}

export default FormElementWrapper