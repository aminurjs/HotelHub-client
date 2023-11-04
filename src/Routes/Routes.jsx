import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default Routes;
