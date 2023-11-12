import { IChildren } from '@/types/helper.type'
import { Typography } from 'antd'
import React from 'react'
import { FieldError } from 'react-hook-form'
import styled from 'styled-components'

interface IProps {
	label?: string
	error?: FieldError
	children: IChildren
	required: boolean
}

const StyleWrapper = styled.div<{ required: boolean }>`
		.label{
			margin-bottom: 4px;
			display: block;
			span{
				margin-left: 2px;
			}
		}
		.message{
			font-size: 12px;
			display: flex;
			justify-content: flex-end;
			padding: 0 4px;
			transition: all 0.2s ease;
			opacity: ${p => p.required ? 1 : 0};
			height: 18px;
			transform: translateY(${p => p.required ? "0" : "-10px"});
		}
	`

const InputWrapper: React.FC<IProps> = ({ label, error, children, required }) => {

	return (
		<StyleWrapper className='form-element-wrapper' required={required}>
			{label && <Typography.Text className='label' type={error && "danger"}>
				{label}
				{required ? <Typography.Text type="danger">*</Typography.Text> : null}
			</Typography.Text>}
			{children}
			<Typography.Text className='message' type="danger">{error?.message}</Typography.Text>
		</StyleWrapper>
	)
}

export default InputWrapper