/* eslint-disable react-refresh/only-export-components */
import GlobalStyle from '@/styles/Global';
import { IChildren } from '@/types/helper.type'
import { ConfigProvider } from 'antd'
import React, { useEffect } from 'react'
import ru from "antd/locale/ru_RU"
import en from "antd/locale/en_US"
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import useAppSelector from '@/hooks/useAppSelector';
import { ThemeConfig, theme as antTheme } from 'antd';
import { themeCompontens, themeToken } from '@/utils/theme';
import { ThemeProvider as ThemeStyledComponent } from "styled-components"
import useObserveMode from '@/hooks/useObserveMode';
import("dayjs/locale/ru");
import("dayjs/locale/en");
import("dayjs/locale/uz-latn");

interface IProps {
	children: IChildren
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {

	const { i18n: { language } } = useTranslation()
	const mode = useAppSelector(state => state.auth.mode)

	useObserveMode()

	useEffect(() => {
		const locales = {
			ru: "ru",
			en: "en",
			uz: "uz-latn",
		};
		// @ts-ignore
		dayjs.locale(locales[language]);
	}, [language]);


	const theme: ThemeConfig = {
		algorithm: mode === "dark" ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
		components: themeCompontens,
		token: themeToken(mode)
	}


	return (
		<ThemeStyledComponent theme={{ mode }}>
			<ConfigProvider
				theme={theme}
				locale={language === "en" ? en : ru}
			>
				<GlobalStyle />
				{children}
			</ConfigProvider>
		</ThemeStyledComponent>

	)
}

export default ThemeProvider