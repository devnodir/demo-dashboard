/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonProps, ConfigProvider, Button, theme } from 'antd'
import React from 'react'

const MyButton: React.FC<ButtonProps> = ({ color, icon, ...props }) => {

	const { token } = theme.useToken()
	if (icon) {
		icon = <span className='anticon'>{icon}</span>
	}

	return (
		<ConfigProvider
			theme={color ? {
				token: {
					//@ts-ignore
					colorPrimary: token[color],
					//@ts-ignore
					colorText: token[color],
				}
			} : undefined}
		>
			<Button {...props} icon={icon} />
		</ConfigProvider>
	)
}

export default MyButton