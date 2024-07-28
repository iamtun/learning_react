import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/layouts";
import { CardPage, HomePage, ProductPage } from "./views";
import { Provider } from "react-redux";
import store from "@/store";

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
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
