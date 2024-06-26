//react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
//layouts
import MainLayout from "./layouts/MainLayout";

//pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Singnup from "./pages/Signup";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/singup",
      element: <Singnup />,
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
