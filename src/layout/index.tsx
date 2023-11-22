import React, { Suspense } from 'react';
import { Layout } from 'antd';
import { IChildren } from '@/types/helper.type';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Pages from './Pages';
import StyleWrapper from './Style'
import PageLoader from '@/components/shared/Loaders/PageLoader';
import TopProgressBar from '@/components/shared/TopProgressBar';
import { useTranslation } from 'react-i18next';
import HelpButton from '@/components/shared/HelpButton';


interface IProps {
	children: IChildren
}



const AppLayout: React.FC<IProps> = ({ children }) => {

	const { i18n } = useTranslation()

	return (
		<TopProgressBar>
			<StyleWrapper key={i18n.language}>
				<Navbar />
				<Layout hasSider>
					<Sidebar />
					<Layout>
						<Pages>
							<Suspense fallback={<PageLoader />}>
								{children}
							</Suspense>
						</Pages>
						{/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
					</Layout>
				</Layout>
			</StyleWrapper>
			<HelpButton />
		</TopProgressBar>
	);
};

export default AppLayout;