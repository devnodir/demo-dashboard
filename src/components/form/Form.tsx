import { FieldValues } from 'react-hook-form'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

type IProps = {
	elementType?: "text-input" | "password-input"
}

const FormElement = <T extends FieldValues>({ elementType }: IProps & T) => {
	switch (elementType) {
		case "text-input":
			return TextInput
		case "password-input":
			return PasswordInput
		default:
			return TextInput
	}
}

export default FormElement