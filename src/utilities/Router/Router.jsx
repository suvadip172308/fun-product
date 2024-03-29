import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from '../../components/Layout/Layout';
import ErrorPage from '../../components/Error/ErrorPage';
import Login from "../../components/Login/Login";
import ProductList from "../../components/ProductList/ProductList";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import { useLoginContext } from "../Context/LoginContextProvider";
import ProductService from "../Services/Product";

const ProvideRouters = ({ children }) => {
  const {token} = useLoginContext();

  const publicRoutes = [
    {
      path:'/contact',
      element: (<p>Contact Us</p>)
    }
  ];

  const privateRoutes = [
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/products',
          element: <ProductList/>,
        }, {
          path: '/product/:id',
          element: <ProductDetails/>
        }
      ],
    },
  ];

  const routesBeforeAuthOnly = [
    {
      path: '/',
      element: <Layout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          path: '/',
          element: <Login/>
        },
      ]
    }
  ];

  // Need to fix this. Private route is not working as expected
  const router = createBrowserRouter([
    ...publicRoutes,
    ...(!token ? routesBeforeAuthOnly : []),
    ...privateRoutes,
  ]);

  return(
    <RouterProvider router={router}>
      { children }
    </RouterProvider>
  );
}

export default ProvideRouters;