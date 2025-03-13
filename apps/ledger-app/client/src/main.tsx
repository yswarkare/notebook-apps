import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PageLoader } from 'yw-icons'
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store/index.ts';
import App from './App.tsx'
import "yw-icons/dist/assets/style.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
      </Provider>
    </Suspense>
  </StrictMode>,
)
