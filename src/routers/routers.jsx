import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ChefRecipes from "../pages/chefRecipe/ChefRecipes";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import ErrorPage from "../shared/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefs/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefs/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
