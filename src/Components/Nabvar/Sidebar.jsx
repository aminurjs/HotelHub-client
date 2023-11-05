import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLink = [
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Rooms", path: "/rooms" },
    { id: "3", name: "My Bookings", path: "/bookings" },
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
