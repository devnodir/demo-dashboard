import React, { Suspense } from 'react'
import ThemeProvider from '@/providers/ThemeProvider/index.tsx'
import { publicRoutes, privateRoutes } from '@/routes'
import RenderRoutes from '@/components/shared/RenderRoutes'
import AuthProvider from '@/providers/AuthProvider'
import ScreenLoader from '@/components/shared/Loaders/ScreenLoader'
import ErrorBoundary from '@/components/shared/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import useMainStore from '@/store/main'
import useDetectLang from './hooks/useDetectLang'
import ProjectProvider from './providers/ProjectProvider'

const App: React.FC = () => {

  useDetectLang()

  const { isAuth } = useMainStore()
  const routes = isAuth ? privateRoutes : publicRoutes

  const { i18n } = useTranslation()


  return (
    <ThemeProvider>
      <Suspense fallback={<ScreenLoader />}>
        <ErrorBoundary>
          <ProjectProvider>
            <AuthProvider>
              <RenderRoutes routes={routes} key={i18n.language} />
            </AuthProvider>
          </ProjectProvider>
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  )
}

export default App