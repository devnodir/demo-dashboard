import { FieldValues, useController } from 'react-hook-form'
import FormElementWrapper from './InputWrapper'
import { IFormInput } from '@/types/general.type'
import { MaskedInput } from 'antd-mask-input'
import { MaskedInputProps } from 'antd-mask-input/build/main/lib/MaskedInput'


export type IMaskedInput<T extends FieldValues> = IFormInput<T> & MaskedInputProps

const MaskInput = <T extends FieldValues>({ name, control, label, rules, ...props }: IMaskedInput<T>) => {

	const {
		field: { onChange, onBlur, value, ref },
		fieldState: { error }, } =
		useController({ control, name, rules })

	return (
		<FormElementWrapper label={label} error={error} required={Boolean(rules?.required)}>
			<MaskedInput
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

export default MaskInput