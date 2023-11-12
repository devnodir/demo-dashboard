/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Dropdown, MenuProps } from 'antd'
import React from 'react'
import { useTranslation } from 'react-i18next'

const LangSelect: React.FC = () => {

	const { i18n, t } = useTranslation()

	console.log(i18n.language);

	const items: MenuProps["items"] = [
		{
			key: "ru",
			label: t("ru"),
			icon: <img src='/ru.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
		},
		{
			key: "en",
			label: t("en"),
			icon: <img src='/en.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
		},
		{
			key: "uz",
			label: t("uz"),
			icon: <img src='/uz.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
		},
	]

	const onSelect = ({ key }: any) => i18n.changeLanguage(key)

	return (
		<Dropdown menu={{ items, onSelect, selectable: true, defaultSelectedKeys: [i18n.language] }} placement="bottomRight" trigger={["click"]} >
			<button>
				<img src={`/${i18n.language}.svg`} alt="" />
			</button>
		</Dropdown>
	)
}

export default LangSelect