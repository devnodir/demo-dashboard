import useT from '@/hooks/useT'
import MyButton from '../antd/MyButton'
import { FaArrowLeftLong } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
	const t = useT()
	const navigate = useNavigate()
	return (
		<MyButton icon={<FaArrowLeftLong />} type="text" className='mb-2 initialism' onClick={() => navigate(-1)}>
			{t("back")}
		</MyButton>
	)
}

export default BackButton