import { IFormInput } from '@/types/general.type'
import { Input } from 'antd'
import { PasswordProps } from 'antd/es/input'
import { FieldValues, useController } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import FormElementWrapper from './InputWrapper'
import { CheckCircleOutlined } from "@ant-design/icons"

export type IPasswordInput<T extends FieldValues> = IFormInput<T> & PasswordProps

const PasswordInput = <T extends FieldValues>({ name, control, label, rules, ...props }: IPasswordInput<T>) => {

	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
		formState: { isValid } } =
		useController({ control, name, rules })

	if (isValid) {
		props.suffix = <CheckCircleOutlined />
	}

	return (
		<FormElementWrapper label={label} error={error} required={Boolean(rules?.required)}>
			<Input.Password
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
				status={error && "error"}
				name={name}
				iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
				{...props}
			/>
		</FormElementWrapper>
	)
}

export default PasswordInput