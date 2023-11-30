import { IChildren } from "@/types/helper.type";
import { Button, Result } from "antd";
import React from "react";
import { ReloadOutlined } from "@ant-design/icons"
import { FaBug } from "react-icons/fa6";
import { colors, getToken } from "@/utils/theme";

interface IProps {
	children: IChildren
}

interface IStateProps {
	hasError: boolean
	message: string
}

class ErrorBoundary extends React.Component<IProps, IStateProps> {
	constructor(props: IProps) {
		super(props);
		this.state = { hasError: false, message: "" };
	}

	static getDerivedStateFromError(error: any) {
		console.log(error.message);
		return { hasError: true };
	}

	reload() {
		window.location.reload()
	}

	render() {
		if (this.state.hasError) {
			return <Result
				icon={<FaBug color={getToken().red5} />}
				title="Необработанная Ошибка"
				subTitle={"Извините, что-то пошло не так. Пожалуйста, обновите страницу"}
				extra={<Button type="primary" icon={<ReloadOutlined />} className="text-uppercase" onClick={this.reload}>Обновить</Button>}
			/>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary