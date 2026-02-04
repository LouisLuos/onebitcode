import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import AdminHome from "./pages/admin/AdminHome";
import RootLayout from "./pages/RootLayout";
import loadProduct from "./loaders/products";
import ProductBoundary from "./error-boundary/ProductBoundary";

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
        path: "products/:productId",
        element: <Product />,
        loader: loadProduct,
        errorElement: <ProductBoundary />,
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
