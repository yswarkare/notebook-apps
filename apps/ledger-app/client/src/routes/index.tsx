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
const ManageProducts = lazy(async () => await import("../pages/products/manage-products"));
const ProductsTable = lazy(async () => await import("../components/products/products-table"));
const CreateProducts = lazy(async () => await import("../components/products/create-products"));
const ProductPage = lazy(async () => await import("../components/products/product-page"));
const IngredientsTable = lazy(async () => await import("../components/ingredients/ingredients-table"));
const CreateIngredients = lazy(async () => await import("../components/ingredients/create-ingredients"));
const ManageRecipes = lazy(async () => await import("../pages/recipes/manage-recipes"));
const RecipeList = lazy(async () => await import("../components/recipes/recipe-list"));
const CreateRecipe = lazy(async () => await import("../components/recipes/create-recipe"));
const RecipePage = lazy(async () => await import("../components/recipes/recipe-page"));


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
      path: path._ingredient.default,
      element: <IngredientsTable />
    }, {
      path: path._ingredient.table,
      element: <IngredientsTable />
    }, {
      path: path._ingredient.create,
      element: <CreateIngredients />
    }]
  }, {
    path: path.inventory,
    element: <Inventory />,
  }, {
    path: path.products,
    element: <Products />,
    children: [{
      path: path._products.default,
      element: <ManageProducts />,
      children: [
        {
          path: path._products.default,
          element: <ProductsTable />
        }, {
          path: path._products._manage.table,
          element: <ProductsTable />
        }, {
          path: path._products._manage.create,
          element: <CreateProducts />
        },
      ]
    }, {
      path: `${path._products.product}/:productName`,
      element: <ProductPage />,
      children: [{
        path: path._products._recipes.default,
        element: <ManageRecipes></ManageRecipes>,
        children: [{
          path: path._products._recipes._recipe_param.default,
          element: <RecipeList></RecipeList>,
        },{
          path: path._products._recipes._recipe_param.list,
          element: <RecipeList></RecipeList>,
        }, {
          path: path._products._recipes._recipe_param.create,
          element: <CreateRecipe></CreateRecipe>,
        }]
      }, {
        path: path._products._recipes._recipe_param.recipe,
        element: <RecipePage></RecipePage>,
      }]
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