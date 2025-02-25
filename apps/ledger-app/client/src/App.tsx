import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Bounce, ToastContainer } from 'react-toastify';
import routes from "./routes/index";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { customThemes } from './utils/themes';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

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
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
