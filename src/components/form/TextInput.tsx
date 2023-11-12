import { Input, InputProps } from 'antd'
import { FieldValues, useController } from 'react-hook-form'
import FormElementWrapper from './InputWrapper'
import { IFormInput } from '@/types/general.type'

export type ITextInput<T extends FieldValues> = IFormInput<T> & InputProps

const TextInput = <T extends FieldValues>({ name, control, label, rules, ...props }: ITextInput<T>) => {

	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
	} = useController({ control, name, rules })

	return (
		<FormElementWrapper label={label} error={error} required={Boolean(rules?.required)}>
			<Input
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
				status={error && "error"}
				name={name}
				{...props}
			/>
		</FormElementWrapper>
	)
}

export default TextInput