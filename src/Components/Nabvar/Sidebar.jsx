import { NavLink } from "react-router-dom";
import { navLink } from "./Navbar";

const Sidebar = () => {
  return (
    <div>
      <h3 className="text-xl font-medium text-dark-01 pb-5"> Menu</h3>
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
