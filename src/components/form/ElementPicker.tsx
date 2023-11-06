import { IFormElement } from "@/types/general.type"
import React from "react"
import TextField from "./TextField"


interface IProps {
	type: IFormElement
}

const ElementPicker: React.FC<IProps & any> = ({ type, ...props }) => {
	switch (type) {
		case "text-field":
			return <TextField {...props} />
	}
}
export default ElementPicker