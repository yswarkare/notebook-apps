import { lazy } from "react";
import path from "./path";
import { RouteObject } from "react-router-dom";

const DefaultLayout = lazy(async () => await import("../layouts/DefaultLayout"));
const Home = lazy(async () => await import("../pages/Home"));
const NotebooksPage = lazy(async () => await import("../pages/NotebooksPage"));
const About = lazy(async () => await import("../pages/About"));
const Login = lazy(async () => await import("../pages/Login"));
const Signup = lazy(async () => await import("../pages/Signup"));
const NotebooksDefault = lazy(async () => await import("../pages/notebooks/NotebooksDefault"));
const ListNotebooks = lazy(async () => await import("../pages/notebooks/ListNotebooks"));
const CreateNotebook = lazy(async () => await import('../pages/notebooks/CreateNotebook'));
const NotebookInfo = lazy(async () => await import('../pages/notebooks/NotebookInfo'));


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
      path: `${path.notebook_pages.notebook}/:notebookId`,
      element: <NotebookInfo />
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