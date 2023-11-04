import PropTypes from "prop-types";
import Navbar from "../Nabvar/Navbar";
import Sidebar from "../Nabvar/Sidebar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div className="drawer font-inter">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <Navbar />
        {/* Page content here */}
        {children}
        <Footer />
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <Sidebar />
        </ul>
      </div>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
