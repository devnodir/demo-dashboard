import { IFormInput } from '@/types/general.type'
import { Input } from 'antd'
import { PasswordProps } from 'antd/es/input'
import { FieldValues, useController } from 'react-hook-form'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'
import FormElementWrapper from './InputWrapper'

export type IPasswordInput<T extends FieldValues> = IFormInput<T> & PasswordProps

const PasswordInput = <T extends FieldValues>({ name, control, label, rules, ...props }: IPasswordInput<T>) => {

	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error }, } =
		useController({ control, name, rules })

	return (
		<FormElementWrapper label={label} error={error}>
			<Input.Password
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
				status={error && "error"}
				name={name}
				size="large"
				iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
				{...props}
			/>
		</FormElementWrapper>
	)
}

export default PasswordInput