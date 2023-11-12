import { IChildren } from "@/types/helper.type";
import { Button, Result } from "antd";
import React from "react";
import { ReloadOutlined } from "@ant-design/icons"

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
				status="500"
				title="Unhanled Error"
				subTitle={"Sorry, something went wrong. Please refresh page"}
				extra={<Button type="primary" icon={<ReloadOutlined />} onClick={this.reload}>Refesh</Button>}
			/>;
		}

		return this.props.children;
	}
}

export default ErrorBoundary