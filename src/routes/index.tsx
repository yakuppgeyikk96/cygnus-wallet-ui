import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";
import CreateWalletPage from "./CreateWalletPage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    action: () => {
      console.log("Home page action");
      return {};
    },
  },
  {
    path: "/signup",
    element: <SignupPage />,
    action: () => {
      console.log("Signup page action");
      return {};
    },
  },
  {
    path: "/create-wallet",
    element: <CreateWalletPage />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
