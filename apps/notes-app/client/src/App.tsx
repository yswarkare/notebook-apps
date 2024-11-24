import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from "./routes/index";
import { ContextStateProvider } from 'yw-hooks'
import './App.css'

function App() {
  const router = createBrowserRouter(routes)


  return (
    <ContextStateProvider initialState={{ isLoggedIn: false }}>
      <RouterProvider router={router}></RouterProvider>
    </ContextStateProvider>
  )
}

export default App
