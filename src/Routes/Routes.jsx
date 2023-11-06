import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";

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
        path: "/rooms",
        element: <Rooms />,
      },
      {
        path: "/room/details/:id",
        element: <RoomDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default Routes;
