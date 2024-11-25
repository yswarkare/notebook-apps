import { lazy } from "react";
import path from "./path";
import { RouteObject } from "react-router-dom";

const DefaultLayout = lazy(() => import("../layouts/DefaultLayout"));
const Home = lazy(() => import("../pages/Home"));
const NotebooksPage = lazy(() => import("../pages/NotebooksPage"));
const About = lazy(() => import("../pages/About"));
const Login = lazy(() => import("../pages/Login"));
const Signup = lazy(() => import("../pages/Signup"));
const NotebooksDefault = lazy(() => import("../pages/notebooks/NotebooksDefault"));
const ListNotebooks = lazy(() => import("../pages/notebooks/ListNotebooks"));
const CreateNotebook = lazy(() => import('../pages/notebooks/CreateNotebook'));

const routes: Array<RouteObject> = [{
  path: path.base,
  element: <DefaultLayout />,
  children: [{
    path: path.home,
    element: <Home />,
  }, {
    path: path.notebooks,
    element: <NotebooksPage />,
    children: [{
      path: path.notebook_pages.default,
      element: <NotebooksDefault />
    }, {
      path: path.notebook_pages.create,
      element: <CreateNotebook />
    }, {
      path: path.notebook_pages.list,
      element: <ListNotebooks />
    }]
  }, {
    path: path.about,
    element: <About />,
  }]
},
{
  path: path.login,
  element: <Login />,
},
{
  path: path.signup,
  element: <Signup />,
},
{
  path: "/*",
  element: <>404 error!</>
}
]

export default routes;