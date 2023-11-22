/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonProps, ConfigProvider, Button, theme } from 'antd'
import React from 'react'

const MyButton: React.FC<ButtonProps> = ({ color, ...props }) => {

	const { token } = theme.useToken()

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
			<Button {...props} />
		</ConfigProvider>
	)
}

export default MyButton