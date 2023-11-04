import { Link, NavLink } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const navLink = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Rooms", path: "/rooms" },
    { id: "3", name: "My Bookings", path: "/bookings" },
  ];
  return (
    <div className="w-full  bg-base-200 shadow">
      <div className="max-w-7xl mx-auto navbar">
        <div className="flex-none lg:hidden">
          <label
            htmlFor="my-drawer-3"
            aria-label="open sidebar"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1 px-2 mx-2">
          <Link
            to={"/"}
            className="flex gap-3 text-3xl text-dark-01 font-bold items-center"
          >
            <img
              className="w-10"
              src="https://i.ibb.co/8DkV3v1/logo-h.png"
              alt=""
            />
            HotelHub
          </Link>
        </div>
        <div className="flex-none hidden lg:block">
          <ul className=" menu-horizontal">
            {/* Navbar menu content here */}
            {navLink.map((menu) => (
              <li
                className="mr-5 text-dark-01 hover:text-dark-03 hover:underline"
                key={menu.id}
              >
                <NavLink className="" to={menu.path}>
                  {menu.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>{" "}
        <div className="flex-none px-2 mx-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 p-1.5 rounded-full">
                <FaUserAlt className="w-full text-2xl"></FaUserAlt>
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
          <button className="btn btn-sm btn-primary">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
