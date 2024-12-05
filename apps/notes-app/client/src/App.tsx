import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import routes from "./routes/index";
import { ContextStateProvider } from 'yw-hooks'
import './App.css'
import { ToastMsgType } from './components/Toast';
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type InitStatType = {
  isLoggedIn: boolean,
  toast?: { [x: string]: ToastMsgType }
}

const initialState: InitStatType = {
  isLoggedIn: false,
  toast: {}
}

function App() {
  const router = createBrowserRouter(routes)


  return (
    <>
      <ContextStateProvider initialState={initialState}>
        <RouterProvider router={router}></RouterProvider>
      </ContextStateProvider>
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
    </>
  )
}

export default App
