import { getToken } from '@/utils/theme'
import { Result } from 'antd'
import { FaXmark } from 'react-icons/fa6'

const ErrorMessage = ({ text, title }: any) => {
	return (
		<Result
			title={title}
			icon={<FaXmark color={getToken().colorError} />}
			subTitle={text}
		/>
	)
}

export default ErrorMessage