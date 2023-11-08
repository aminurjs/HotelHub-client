import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Rooms from "../Pages/Rooms/Rooms";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import Error from "../Pages/Error/Error";
import MyBooking from "../Pages/Booking/MyBooking";
import PrivateRoutes from "./PrivateRoutes";
import LoadingRoutes from "./LoadingRoutes";
import { Helmet } from "react-helmet";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
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
        element: (
          <LoadingRoutes>
            <RoomDetails />
          </LoadingRoutes>
        ),
      },
      {
        path: "/bookings",
        element: (
          <PrivateRoutes>
            <MyBooking />
          </PrivateRoutes>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/about-us",
        element: (
          <div>
            <Helmet>
              <title>About-us - HotelHub</title>
            </Helmet>
            <h2 className="text-3xl text-dark-01 text-center py-40  font-semibold mt-4  mb-5">
              This page is cooking...
            </h2>
          </div>
        ),
      },
      {
        path: "/contact-us",
        element: (
          <div>
            <Helmet>
              <title>Contact-us - HotelHub</title>
            </Helmet>
            <h2 className="text-3xl text-dark-01 text-center py-40  font-semibold mt-4  mb-5">
              This page is cooking...
            </h2>
          </div>
        ),
      },
      {
        path: "/events",
        element: (
          <div>
            <Helmet>
              <title>Events - HotelHub</title>
            </Helmet>
            <h2 className="text-3xl text-dark-01 text-center py-40  font-semibold mt-4  mb-5">
              This page is cooking...
            </h2>
          </div>
        ),
      },
      {
        path: "/gallery",
        element: (
          <div>
            <Helmet>
              <title>Gallery - HotelHub</title>
            </Helmet>
            <h2 className="text-3xl text-dark-01 text-center py-40  font-semibold mt-4  mb-5">
              This page is cooking...
            </h2>
          </div>
        ),
      },
      {
        path: "/faq",
        element: (
          <div>
            <Helmet>
              <title>FAQ - HotelHub</title>
            </Helmet>
            <h2 className="text-3xl text-dark-01 text-center py-40  font-semibold mt-4  mb-5">
              This page is cooking...
            </h2>
          </div>
        ),
      },
    ],
  },
]);
export default Routes;
