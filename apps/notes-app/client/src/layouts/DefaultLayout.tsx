import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom'
import { PageLoader } from 'yw-icons';
import Header from './Header'
const AuthRouter = lazy(() => import('../components/AuthRouter'));

function DefaultLayout() {
  return (
    <div id="app-root" className="w-full flex flex-col justify-start items-center content-center">
      <Header />
      <main className="w-full flex flex-col justify-center items-center content-center">
        <Suspense fallback={<PageLoader />}>
          <AuthRouter>
            <Outlet />
          </AuthRouter>
        </Suspense>
      </main>

    </div>
  )
}

export default DefaultLayout;