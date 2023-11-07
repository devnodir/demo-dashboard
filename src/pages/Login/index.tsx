import doctor from "@/assets/lottie/doctor.json";
import FormElement from '@/components/form/FormElement';
import useApiMutation from '@/hooks/useApiMutation';
import { setIsAuth, setUserData } from '@/utils/dispatch';
import { setLocalStorage } from '@/utils/localStorage';
import { PASSWORD_VALIDATE, PHONE_VALIDATE } from '@/utils/validations';
import { LOGIN, USER_TOKEN } from '@/utils/variables';
import { Button, message } from 'antd';
import Lottie from "lottie-react";
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import StyleWrapper from './Style';

interface IFormData {
	phone_number: string
	password: string
}

const Login: React.FC = () => {

	const navigate = useNavigate()
	const [messageApi, contextHolder] = message.useMessage();

	const { control, handleSubmit } = useForm<IFormData>()

	const { mutateAsync, isLoading } = useApiMutation(LOGIN)

	const parseForm = (data: IFormData) => {
		return {
			...data,
			phone_number: Number(`998${data.phone_number}`)
		}
	}

	const submit = (data: IFormData) => {
		setIsAuth(true)
		mutateAsync(parseForm(data), {
			onSuccess: (res: any) => {
				console.log(res);

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
				<form onSubmit={handleSubmit(submit)} className="login-form">
					<FormElement.TextInput
						label='Phone number'
						name="phone_number"
						control={control}
						addonBefore={"+998"}
						rules={PHONE_VALIDATE}
					/>
					<FormElement.PasswordInput
						label='Password'
						name="password"
						control={control}
						addonBefore={<FaLock />}
						rules={PASSWORD_VALIDATE}
					/>
					<Button loading={isLoading} className='login-form-button' htmlType="submit" block size="large" type="primary">SUBMIT</Button>
				</form>
			</div>
		</StyleWrapper>
	)
}

export default Login