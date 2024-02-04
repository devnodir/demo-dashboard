import { ReloadOutlined } from '@ant-design/icons'
import { Result, Button } from 'antd'
import React from 'react'

const StepResult: React.FC<any> = ({ onClick }) => {
	return (
		<Result
			status="success"
			title="Ma'lumotlaringiz muvaffaqiyatli qabul qilindi"
			extra={[
				<Button type="primary" key="console" icon={<ReloadOutlined />} onClick={onClick}>
					Qayta topshirish
				</Button>,
			]}
		/>

	)
}

export default StepResult