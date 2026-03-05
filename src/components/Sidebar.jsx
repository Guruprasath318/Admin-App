import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaUsers, FaWpforms, FaCog } from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">

      <div className="sidebar-header">
        <h4>Admin Panel</h4>
      </div>

      <ul className="sidebar-menu">

        <li>
          <NavLink to="/" className="menu-link">
            <FaTachometerAlt className="icon" />
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/users" className="menu-link">
            <FaUsers className="icon" />
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/forms" className="menu-link">
            <FaWpforms className="icon" />
            Forms
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings" className="menu-link">
            <FaCog className="icon" />
            Settings
          </NavLink>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;