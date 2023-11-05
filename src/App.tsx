import React, { Suspense } from 'react'
import useAppSelector from '@/hooks/useAppSelector.ts'
import ThemeProvider from '@/providers/ThemeProvider/index.tsx'
import { publicRoutes, privateRoutes } from '@/routes'
import RenderRoutes from './components/shared/RenderRoutes'
import AuthProvider from './providers/AuthProvider'
import ScreenLoader from './components/shared/Loaders/ScreenLoader'

const App: React.FC = () => {

  const { isAuth } = useAppSelector(({ auth }) => auth)
  const routes = isAuth ? privateRoutes : publicRoutes

  return (
    <ThemeProvider>
      <Suspense fallback={<ScreenLoader />}>
        <AuthProvider>
          <RenderRoutes routes={routes} />
        </AuthProvider>
      </Suspense>
    </ThemeProvider>
  )
}

export default App