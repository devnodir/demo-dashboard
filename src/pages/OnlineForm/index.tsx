import MyButton from '@/components/antd/MyButton';
import LangSelect from '@/components/shared/LangSelect';
import ModeHandler from '@/components/shared/ModeHandler';
import { RightOutlined } from '@ant-design/icons';
import { Card, Steps, Typography } from 'antd';
import React, { Fragment, useState } from 'react';
import Style from './Style';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import StepResult from './components/StepResult';

const OnlineForm: React.FC = () => {

	const [step, setStep] = useState(0)

	const steps = [
		{
			title: "",
			content: <Step1 />,
		},
		{
			title: "",
			content: <Step2 />,
		},
		{
			title: "",
			content: <Step3 />,
		},
	];

	const nextStep = () => {
		setStep(step + 1)
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
						<StepResult onClick={() => setStep(0)} /> :
						<Fragment>
							<Steps current={step} items={steps} />
							<Card className={`step-${step + 1}`}>
								{steps[step].content}
							</Card>
							<MyButton type="primary" className='submit-btn' onClick={nextStep}>NEXT <RightOutlined /></MyButton>
						</Fragment>
				}
			</div>
		</Style>
	)
}

export default OnlineForm