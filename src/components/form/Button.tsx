/* eslint-disable @typescript-eslint/ban-ts-comment */
import { ButtonProps, ConfigProvider, Button as AntButton, theme } from 'antd'
import React from 'react'

const Button: React.FC<ButtonProps> = ({ color, ...props }) => {

	const { token } = theme.useToken()

	return (
		<ConfigProvider
			theme={color ? {
				token: {
					//@ts-ignore
					colorPrimary: token[color]
				}
			} : undefined}
		>
			<AntButton {...props} />
		</ConfigProvider>
	)
}

export default Button