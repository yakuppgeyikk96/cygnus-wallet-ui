import { createHashRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import SignupPage from "./SignupPage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
    action: () => {
      console.log("Signup page action");
      return {};
    },
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
