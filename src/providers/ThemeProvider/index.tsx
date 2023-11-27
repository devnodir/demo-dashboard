/* eslint-disable react-refresh/only-export-components */
import useObserveMode from '@/hooks/useObserveMode';
import useMainStore from '@/store/main';
import GlobalStyle from '@/styles/Global';
import { IChildren } from '@/types/helper.type';
import { themeCompontens, themeToken } from '@/utils/theme';
import { ConfigProvider, ThemeConfig, theme as antTheme } from 'antd';
import en from "antd/locale/en_US";
import ru from "antd/locale/ru_RU";
import dayjs from 'dayjs';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeProvider as ThemeStyledComponent } from "styled-components";
import("dayjs/locale/ru");
import("dayjs/locale/en");
import("dayjs/locale/uz-latn");

interface IProps {
	children: IChildren
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {

	const { i18n: { language } } = useTranslation()
	const { mode } = useMainStore()

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