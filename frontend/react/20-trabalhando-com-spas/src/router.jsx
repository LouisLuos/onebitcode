import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
        {
        path: "/", // para voltar para rota principal 
        element: <Home />,
        index: true,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    
    ],
  },
  {
    path: "/admin",
    element: <AdminHome />,
  },    
]);

export default router;
