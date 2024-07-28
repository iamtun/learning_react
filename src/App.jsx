import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layouts";
import { CardPage, HomePage, ProductPage } from "./views";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductPage />,
      },
      {
        path: "/card",
        element: <CardPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
