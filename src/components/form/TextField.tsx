import { Input, InputProps } from 'antd'
import { PasswordProps } from 'antd/es/input'
import { Control, FieldValues, Path, RegisterOptions, useController } from 'react-hook-form'
import FormElementWrapper from './FormElementWrapper'

const { Password } = Input

type IInput = InputProps & PasswordProps

interface Props<T extends FieldValues = any> extends IInput {
	control: Control<T>,
	validation?: RegisterOptions
	label?: string
	name: Path<T>
	isPassword?: boolean
}

function TextField<T extends FieldValues>(
	{ name, control, required, label, validation, isPassword, ...props }
		: Props<T>) {

	const MyInput = isPassword ? Password : Input

	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error }, } =
		useController({ control, name, rules: { required: required, ...validation } })

	return (
		<FormElementWrapper label={label} error={error}>
			<MyInput
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
				status={error && "error"}
				name={name}
				size="large"
				autoComplete='off'
				{...props}
			/>
		</FormElementWrapper>
	)
}

export default TextField