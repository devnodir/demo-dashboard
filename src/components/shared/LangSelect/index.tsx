/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react'
import { Dropdown, MenuProps } from 'antd'
import { useTranslation } from 'react-i18next'

const LangSelect: React.FC = () => {

	const { i18n, t } = useTranslation()

	const items: MenuProps["items"] = [
		{
			key: "ru",
			label: t("ru"),
			icon: <img src='/assets/ru.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
		},
		{
			key: "en",
			label: t("en"),
			icon: <img src='/assets/en.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
		},
		{
			key: "uz",
			label: t("uz"),
			icon: <img src='/assets/uz.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
		},
	]

	const onSelect = ({ key }: any) => i18n.changeLanguage(key)

	return (
		<Dropdown menu={{ items, onSelect, selectable: true, defaultSelectedKeys: [i18n.language] }} placement="bottomRight" trigger={["click"]} >
			<button>
				<img src={`/assets/${i18n.language}.svg`} alt="" />
			</button>
		</Dropdown>
	)
}

export default LangSelect