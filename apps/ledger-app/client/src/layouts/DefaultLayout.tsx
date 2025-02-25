import { lazy, Suspense } from 'react';
import { Outlet } from 'react-router-dom'
import { PageLoader } from 'yw-icons';
import Header from './Header'
import ThemeSelector from '../components/Theme';
import Footer from './Footer';
import { Box } from '@mui/material';

const AuthRouter = lazy(async () => await import('../components/AuthRouter'));

function DefaultLayout() {
  return (
    <div id="app-root" className="w-full flex flex-col justify-start items-center content-center">
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'background.default',
          color: 'text.primary',
          borderRadius: 1,
          p: 3,
          minHeight: '56px',
        }}
      >
        <ThemeSelector />
        <Header />
        <main className="w-full flex flex-col justify-center items-center content-center">
          <Suspense fallback={<PageLoader />}>
            <AuthRouter>
              <Outlet />
            </AuthRouter>
          </Suspense>
        </main>
        <Footer />
      </Box>
    </div>
  )
}

export default DefaultLayout;