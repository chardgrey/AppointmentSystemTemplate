// filepath: c:\Users\user\Desktop\Projects\Templates\appointment\appointment\src\App.jsx
import { lazy, Suspense } from 'react'
import Loader from './components/ui/Loader'

const LandingPage = lazy(() => import('./components/pages/Landing'))

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <LandingPage />
    </Suspense>
  )
}

export default App