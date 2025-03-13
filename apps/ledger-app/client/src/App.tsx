import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import { customThemes } from './themes';
import routes from "./routes/index";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const router = createBrowserRouter(routes)

  const selectedTheme = useSelector((state) => state.themes.theme)

  useEffect(() => {
    console.log("selectedTheme = ", selectedTheme)
  }, [selectedTheme]);

  return (
    selectedTheme &&
    <ThemeProvider theme={customThemes[selectedTheme]}>
      <CssBaseline />
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Bounce}
      />
    </ThemeProvider>
  )
}

export default App
