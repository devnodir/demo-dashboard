import useT from '@/hooks/useT'
import { Button, Result } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const PageNotFound: React.FC = () => {

	const navigate = useNavigate()
	const t = useT()

	const goHome = () => navigate("/")

	return (
		<Result
			status="404"
			title="404"
			subTitle={t("page_not_found")}
			extra={<Button onClick={goHome} type="primary">{t("home_page")}</Button>}
		/>
	)
}

export default PageNotFound