import MyButton from "@/components/antd/MyButton"
import useWindowListener from "@/hooks/useWindowListener"
import { IChildren } from "@/types/helper.type"
import { getToken } from "@/utils/theme"
import { ReloadOutlined } from "@ant-design/icons"
import { Result } from "antd"
import { useState } from "react"
import { BsWifiOff } from "react-icons/bs"

interface Props {
	children: IChildren
}

const NetworkError: React.FC<Props> = ({ children }) => {

	const [noInternet, setNoInternet] = useState(!navigator.onLine)

	useWindowListener("offline", () => setNoInternet(true))

	const reload = () => {
		window.location.reload()
	}

	return (
		<>
			{
				noInternet ? <Result
					icon={<BsWifiOff color={getToken().blue5} />}
					title="Network Error"
					subTitle={"Произошла ошибка соединения. Пожалуйста, проверьте свой Интернет"}
					extra={<MyButton type="primary" icon={<ReloadOutlined />} onClick={reload} className="text-uppercase">Обновить</MyButton>}
				/> : children
			}
		</>
	)
}

export default NetworkError