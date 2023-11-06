/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useState } from 'react'
import { Dropdown, MenuProps } from 'antd'



const LangSelect: React.FC = () => {

	const [lang, setLang] = useState<any>("uz")


	const items: MenuProps["items"] = [
		{
			key: "ru",
			label: "Russian",
			icon: <img src='/ru.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
			onClick: () => setLang("ru")
		},
		{
			key: "en",
			label: "English",
			icon: <img src='/en.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
			onClick: () => setLang("en")
		},
		{
			key: "uz",
			label: "Uzbek",
			icon: <img src='/uz.svg' alt='ru' className='lang-icon' />,
			className: "lang-item",
			onClick: () => setLang("uz")
		},
	]


	return (
		<Dropdown menu={{ items }} placement="bottomRight" trigger={["click"]}>
			<button>
				<img src={`/${lang}.svg`} alt="" />
			</button>
		</Dropdown>
	)
}

export default LangSelect