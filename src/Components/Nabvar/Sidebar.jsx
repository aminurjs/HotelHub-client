import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLink = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/rooms", name: "Rooms" },
    { id: 3, path: "/bookings", name: "My Booking" },
    { id: 4, path: "/about-us", name: "About Us" },
    { id: 5, path: "/contact-us", name: "Contact Us" },
    { id: 6, path: "/events", name: "Events" },
    { id: 7, path: "/gallery", name: "Gallery" },
    { id: 8, path: "/faq", name: "FAQ" },
  ];
  return (
    <div>
      <h3 className="text-xl font-medium text-dark-01 mb-5"> Menu</h3>
      {navLink.map((menu) => (
        <li
          className="mb-3 text-dark-01 hover:text-dark-03 hover:underline"
          key={menu.id}
        >
          <NavLink className="" to={menu.path}>
            {menu.name}
          </NavLink>
        </li>
      ))}
    </div>
  );
};

export default Sidebar;
