import { InputNumber, InputNumberProps } from 'antd'
import { FieldValues, useController } from 'react-hook-form'
import FormElementWrapper from './InputWrapper'
import { IFormInput } from '@/types/general.type'

export type INumberInput<T extends FieldValues> = IFormInput<T> & InputNumberProps

const NumberInput = <T extends FieldValues>({ name, control, label, rules, ...props }: INumberInput<T>) => {

	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error },
	} = useController({ control, name, rules })


	return (
		<FormElementWrapper label={label} error={error} required={Boolean(rules?.required)}>
			<InputNumber
				style={{ width: "100%" }}
				value={value}
				onChange={onChange}
				onBlur={onBlur}
				ref={ref}
				status={error && "error"}
				type="text"
				name={name}
				{...props}
			/>
		</FormElementWrapper>
	)
}

export default NumberInput