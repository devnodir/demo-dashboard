/* eslint-disable react-refresh/only-export-components */
import GlobalStyle from '@/styles/Global';
import { IChildren } from '@/types/helper.type'
import { theme } from '@/utils/theme';
import { ConfigProvider } from 'antd'
import React, { useEffect } from 'react'
import("dayjs/locale/ru");
import("dayjs/locale/en");
import("dayjs/locale/uz-latn");

import ru from "antd/locale/ru_RU"
import en from "antd/locale/en_US"
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';


interface IProps {
	children: IChildren
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {

	const { i18n: { language } } = useTranslation()

	useEffect(() => {
		const locales = {
			ru: "ru",
			en: "en",
			uz: "uz-latn",
		};
		// @ts-ignore
		dayjs.locale(locales[language]);
	}, [language]);

	return (
		<ConfigProvider theme={theme} locale={language === "en" ? en : ru}>
			<GlobalStyle />
			{children}
		</ConfigProvider>
	)
}

export default ThemeProvider