import MyButton from '@/components/antd/MyButton';
import LangSelect from '@/components/shared/LangSelect';
import ModeHandler from '@/components/shared/ModeHandler';
import { RightOutlined } from '@ant-design/icons';
import { Card, Form, Steps, Typography, message } from 'antd';
import React, { Fragment, useState } from 'react';
import Style from './Style';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import StepResult from './components/StepResult';
import useApiMutation from '@/hooks/useApiMutation';
import { PUBLIC_APPOINTMENTS } from '@/components/endpoints';
import dayjs from 'dayjs';

const OnlineForm: React.FC = () => {

	const [form] = Form.useForm()
	const [step, setStep] = useState(0)
	const [values, setValues] = useState<Record<string, any>>({})

	const { mutate, isLoading } = useApiMutation(PUBLIC_APPOINTMENTS)

	const steps = [
		{
			title: "",
			content: <Step1 form={form} />,
		},
		{
			title: "",
			content: <Step2 form={form} />,
		},
		{
			title: "",
			content: <Step3 form={form} />,
		},
	];


	const nextStep = () => {
		setTimeout(() => {
			const hasError = form.getFieldsError().some((item: any) => item.errors.length)
			if (hasError) return;
			const data = { ...values, ...form.getFieldsValue() }
			setValues(data)
			if (step === 2) {
				const formData = {
					...data,
					appointment_date: dayjs(data.appointment_date).format("YYYY-MM-DD"),
					appointment_time: dayjs(data.appointment_time).format("HH:mm"),
					phone_number: `+${data.phone_number}`
				}
				mutate(formData, {
					onSuccess: () => {
						setStep(step + 1)
					},
					onError: (err) => {
						message.error(err?.message)
					}
				})
			} else {
				setStep(step + 1)
			}
		}, 0)
	}
	return (
		<Style>
			<div className='action-buttons'>
				<LangSelect />
				<ModeHandler />
			</div>
			<div className="content">
				<Typography.Title level={2}>YD Online form</Typography.Title>
				{
					step === 3 ?
						<StepResult /> :
						<Fragment>
							<Steps current={step} items={steps} direction="horizontal" responsive={false} />
							<Card className={`step-${step + 1}`}>
								{steps[step].content}
							</Card>
							<MyButton type="primary" className='submit-btn' onClick={nextStep} htmlType="submit" form='online-form' loading={isLoading}>NEXT <RightOutlined /></MyButton>
						</Fragment>
				}
			</div>
		</Style >
	)
}

export default OnlineForm