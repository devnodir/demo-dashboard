import doctor from "@/assets/lottie/doctor.json";
import useApiMutation from '@/hooks/useApiMutation';
import { setLocalStorage } from '@/utils/localStorage';
import { Button, Form, Input, InputNumber, message } from 'antd';
import Lottie from "lottie-react";
import React from 'react';
import { FaEye, FaEyeSlash, FaLock, FaPhone } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import StyleWrapper from './Style';
import { phoneFormatter } from "@/utils/formatter";
import { R_PASSWORD, R_PHONE, R_REQUIRED } from "@/utils/rules";
import useMainStore from "@/store/main";
import { LOGIN_USER } from "@/components/endpoints";
import { USER_ID, USER_TOKEN } from "@/components/variables";

interface IFormData {
	phone_number: string
	password: string
}``

const Login: React.FC = () => {

	const navigate = useNavigate()
	const [messageApi, contextHolder] = message.useMessage();
	const { mode, setIsAuth, setUserData } = useMainStore()

	const { mutateAsync, isLoading } = useApiMutation(LOGIN_USER)

	const [form] = Form.useForm();

	const parseForm = (data: IFormData) => {
		return {
			...data,
			phone_number: `${data.phone_number}`
		}
	}
	const handleFocus = () => {
		if (!form.getFieldValue("phone_number")) {
			form.setFieldValue("phone_number", "998")
		}
	}

	const submit = (data: IFormData) => {
		mutateAsync(parseForm(data), {
			onSuccess: (res: any) => {
				setLocalStorage(USER_TOKEN, res.token)
				setLocalStorage(USER_ID, res.userId)
				setUserData(res)
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
					<img src={`/assets/logo-${mode}.svg`} alt="" />
				</div>
				<Form
					layout="vertical"
					className="login-form"
					onFinish={submit}
					form={form}
				>
					<Form.Item<IFormData>
						label="Номер телефона"
						name="phone_number"
						rules={[R_REQUIRED, R_PHONE]}
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
						label="Пароль"
						name="password"
						validateFirst
						rules={[R_REQUIRED, R_PASSWORD]}
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
						ВОЙТИ
					</Button>
				</Form>
			</div>
		</StyleWrapper>
	)
}

export default Login