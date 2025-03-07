import { lazy } from "react";
import path from "./path";
import { RouteObject } from "react-router-dom";

const DefaultLayout = lazy(async () => await import("../layouts/DefaultLayout"));
const Home = lazy(async () => await import("../pages/Home"));
const About = lazy(async () => await import("../pages/About"));
const Login = lazy(async () => await import("../pages/Login"));
const Signup = lazy(async () => await import("../pages/Signup"));
const ErrorPage = lazy(async () => await import("../pages/error/ErrorPage"));
const Inventory = lazy(async () => await import("../pages/inventory/Inventory"));
const Ingredients = lazy(async () => await import("../pages/ingredients/Ingredients"));
const Products = lazy(async () => await import("../pages/products/Products"));
const ProductsTable = lazy(async () => await import("../components/products/products-table"));
const CreateProducts = lazy(async () => await import("../components/products/create-products"));
const ProductPage = lazy(async () => await import("../components/products/product-page"));
const IngredientsTable = lazy(async () => await import("../components/ingredients/ingredients-table"));
const CreateIngredients = lazy(async () => await import("../components/ingredients/create-ingredients"));


const routes: Array<RouteObject> = [{
  path: path.base,
  element: <DefaultLayout />,
  children: [{
    path: path.home,
    element: <Home />,
  }, {
    path: path.ingredients,
    element: <Ingredients />,
    children: [{
      path: path.ingredient_pages.default,
      element: <IngredientsTable />
    }, {
      path: path.ingredient_pages.table,
      element: <IngredientsTable />
    }, {
      path: path.ingredient_pages.create,
      element: <CreateIngredients />
    }]
  }, {
    path: path.inventory,
    element: <Inventory />,
  }, {
    path: path.products,
    element: <Products />,
    children: [{
      path: path.product_pages.default,
      element: <ProductsTable />
    }, {
      path: path.product_pages.table,
      element: <ProductsTable />
    }, {
      path: path.product_pages.create,
      element: <CreateProducts />
    }, {
      path: `${path.product_pages.page}/:productId`,
      element: <ProductPage />
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
  element: <ErrorPage status={404} errors={['Page not found!']} />
}
]

export default routes;