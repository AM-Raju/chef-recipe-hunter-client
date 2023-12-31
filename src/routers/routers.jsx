import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import ChefRecipes from "../pages/chefRecipe/ChefRecipes";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import ErrorPage from "../shared/ErrorPage";
import Register from "../pages/register/Register";
import PrivateRoutes from "./PrivateRoutes";

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
        element: (
          <PrivateRoutes>
            <ChefRecipes></ChefRecipes>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://chef-recipe-hunter-ss-am-raju.vercel.app/chefs/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
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
