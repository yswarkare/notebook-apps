import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { PageLoader } from 'yw-icons'
import App from './App.tsx'
import 'daisyui/dist/styled.css'
import 'daisyui/dist/themes.css'
import 'daisyui/dist/full.css'
import "yw-daisyui/dist/assets/style.css"
import "yw-icons/dist/assets/style.css"
import 'highlight.js/styles/atom-one-dark.min.css'
import './assets/css/main.css'
import "bootstrap-icons/font/bootstrap-icons.min.css"
import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<PageLoader />}>
      <App />
    </Suspense>
  </StrictMode>,
)
