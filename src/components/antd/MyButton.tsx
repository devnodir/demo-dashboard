/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Button, ButtonProps, ConfigProvider } from 'antd'
import React from 'react'

const MyButton: React.FC<ButtonProps> = ({ color, icon, ...props }) => {

	if (icon) {
		icon = <span className='anticon'>{icon}</span>
	}

	return (
		<ConfigProvider
			theme={color ? {
				token: {
					colorPrimary: color,
					colorText: color,
					colorBorder: color
				}
			} : undefined}
		>
			<Button icon={icon} {...props} />
		</ConfigProvider>
	)
}

export default MyButton