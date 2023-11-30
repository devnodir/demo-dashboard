import useT from '@/hooks/useT'
import { getToken } from '@/utils/theme'
import { HomeFilled } from '@ant-design/icons'
import { Button, Result } from 'antd'
import React from 'react'
import { FaCircleExclamation } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'

const PageNotFound: React.FC = () => {

	const navigate = useNavigate()
	const t = useT()

	const goHome = () => navigate("/")

	return (
		<Result
			// status="404"
			title="404"
			icon={<FaCircleExclamation color={getToken().colorWarning} />}
			subTitle={t("page_not_found")}
			extra={<Button onClick={goHome} type="primary" className="text-uppercase" icon={<HomeFilled />}>{t("home_page")}</Button>}
		/>
	)
}

export default PageNotFound