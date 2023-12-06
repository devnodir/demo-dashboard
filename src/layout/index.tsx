import ErrorBoundary from '@/components/shared/ErrorBoundary';
import PageLoader from '@/components/shared/Loaders/PageLoader';
import NetworkError from '@/components/shared/NetworkError';
import TopProgressBar from '@/components/shared/TopProgressBar';
import { IChildren } from '@/types/helper.type';
import { Layout } from 'antd';
import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from './Navbar';
import Pages from './Pages';
import Sidebar from './Sidebar';
import StyleWrapper from './Style';


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
								<ErrorBoundary>
									<NetworkError>
										{children}
									</NetworkError>
								</ErrorBoundary>
							</Suspense>
						</Pages>
						{/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer> */}
					</Layout>
				</Layout>
			</StyleWrapper>
			{/* <HelpButton /> */}
		</TopProgressBar>
	);
};

export default AppLayout;