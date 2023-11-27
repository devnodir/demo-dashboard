import React, { Suspense } from 'react'
import ThemeProvider from '@/providers/ThemeProvider/index.tsx'
import { publicRoutes, privateRoutes } from '@/routes'
import RenderRoutes from '@/components/shared/RenderRoutes'
import AuthProvider from '@/providers/AuthProvider'
import ScreenLoader from '@/components/shared/Loaders/ScreenLoader'
import ErrorBoundary from '@/components/shared/ErrorBoundary'
import { useTranslation } from 'react-i18next'
import useMainStore from '@/store/main'

const App: React.FC = () => {

  const { isAuth } = useMainStore()
  const routes = isAuth ? privateRoutes : publicRoutes

  const { i18n } = useTranslation()

  return (
    <ThemeProvider>
      <Suspense fallback={<ScreenLoader />}>
        <ErrorBoundary>
          <AuthProvider>
            <RenderRoutes routes={routes} key={i18n.language} />
          </AuthProvider>
        </ErrorBoundary>
      </Suspense>
    </ThemeProvider>
  )
}

export default App