import doctor from "@/assets/lottie/doctor.json";
import PhoneInput from "@/components/form/PhoneInput";
import useApiMutation from '@/hooks/useApiMutation';
import { setIsAuth, setUserData } from '@/utils/dispatch';
import { setLocalStorage } from '@/utils/localStorage';
import { VPASSWORD, VPHONE, VREQUIRED } from '@/utils/validations';
import { LOGIN, USER_TOKEN } from '@/utils/variables';
import { Button, Form, Input, InputNumber, message } from 'antd';
import Lottie from "lottie-react";
import React from 'react';
import { FaEye, FaEyeSlash, FaLock, FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import StyleWrapper from './Style';
import { phoneFormatter } from "@/utils/formatter";

interface IFormData {
	phone_number: string
	password: string
}

const Login: React.FC = () => {

	const navigate = useNavigate()
	const [messageApi, contextHolder] = message.useMessage();

	const { mutateAsync, isLoading } = useApiMutation(LOGIN)

	const [form] = Form.useForm();

	const parseForm = (data: IFormData) => {
		return {
			...data,
			phone_number: Number(`998${data.phone_number}`)
		}
	}
	const handleFocus = () => {
		if (!form.getFieldValue("phone_number")) {
			form.setFieldValue("phone_number", "998")
		}
	}

	const submit = (data: IFormData) => {
		setIsAuth(true)
		mutateAsync(parseForm(data), {
			onSuccess: (res: any) => {
				setLocalStorage(USER_TOKEN, res.token)
				setUserData(res.user)
				setIsAuth(true)
				navigate("/", { replace: true })
			},
			onError: err => {
				messageApi.error(err?.message)
			}
		})
	}

	return (
		<StyleWrapper className='login'>
			{contextHolder}
			<div className="login-desc">
				<Lottie className='login-desc-anim' animationData={doctor} loop />
			</div>
			<div className='login-content'>
				<div className="login-content-logo">
					<img src="/logo.svg" alt="" />
				</div>
				<Form
					layout="vertical"
					className="login-form"
					onFinish={submit}
					form={form}
				>
					<Form.Item<IFormData>
						label="Phone number"
						name="phone_number"
						rules={[VREQUIRED, VPHONE]}
						validateFirst
					>
						<InputNumber
							placeholder="+998 ** *** ** **"
							onFocus={handleFocus}
							formatter={phoneFormatter}
							addonBefore={<FaPhone />}
						/>
					</Form.Item>
					<Form.Item<IFormData>
						label="Password"
						name="password"
						validateFirst
						rules={[VREQUIRED, VPASSWORD]}
					>
						<Input.Password
							addonBefore={<FaLock />}
							iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}
							placeholder="********"
						/>
					</Form.Item>
					<Button
						block
						loading={isLoading}
						className='login-form-button'
						htmlType="submit"
						type="primary"
					>
						SUBMIT
					</Button>
				</Form>
			</div>
		</StyleWrapper>
	)
}

export default Login