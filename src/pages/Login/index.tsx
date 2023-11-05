import { Button, message } from 'antd';
import React from 'react'
import TextField from '@/components/form/TextField';
import { useForm } from 'react-hook-form';
import useApiMutation from '@/hooks/useApiMutation';
import { setLocalStorage } from '@/utils/localStorage';
import { LOGIN, USER_TOKEN } from '@/utils/variables';
import { setIsAuth, setUserData } from '@/utils/dispatch';
import { useNavigate } from 'react-router-dom';
import { PASSWORD_VALIDATE, PHONE_VALIDATE } from '@/utils/validations';
import StyleWrapper from './Style';
import Lottie from "lottie-react";
import doctor from "@/assets/lottie/doctor.json"
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa6"

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
				<Lottie className='login-desc-anim' animationData={doctor} loop={true} />
			</div>
			<div className='login-content'>
				<div className="login-content-logo">
					<img src="/logo.svg" alt="" />
				</div>
				<form onSubmit={handleSubmit(submit)} className="login-form">
					<TextField
						wrapperClass='login-form-item'
						label='Phone number'
						name="phone_number"
						control={control}
						addonBefore={"+998"}
						required
						validation={PHONE_VALIDATE}
					/>
					<TextField
						wrapperClass='login-form-item'
						label='Password'
						autoComplete="off"
						name='password'
						isPassword
						control={control}
						addonBefore={<FaLock />}
						validation={PASSWORD_VALIDATE}
						required
						iconRender={(visible) => (visible ? <FaEye /> : <FaEyeSlash />)}

					/>
					<Button loading={isLoading} className='login-form-button' htmlType="submit" block size="large" type="primary" onClick={() => setIsAuth(true)}>SUBMIT</Button>
				</form>
			</div>
		</StyleWrapper>
	)
}

export default Login