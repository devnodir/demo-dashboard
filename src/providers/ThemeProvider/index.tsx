/* eslint-disable react-refresh/only-export-components */
import GlobalStyle from '@/styles/Global';
import { IChildren } from '@/types/helper.type'
import { theme } from '@/utils/theme';
import { ConfigProvider } from 'antd'
import React from 'react'

interface IProps {
	children: IChildren
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {

	return (
		<ConfigProvider theme={theme}>
			<GlobalStyle />
			{children}
		</ConfigProvider>
	)
}

export default ThemeProvider