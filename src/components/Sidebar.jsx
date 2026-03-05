import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTachometerAlt, FaUsers, FaWpforms, FaCog } from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

      {/* Toggle Button */}

      <div className="sidebar-header">
        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </button>
      </div>

      {/* Menu */}

      <nav className="sidebar-menu">

        <NavLink to="/" className="menu-item">
          <FaTachometerAlt />
          {!collapsed && <span>Dashboard</span>}
        </NavLink>

        <NavLink to="/users" className="menu-item">
          <FaUsers />
          {!collapsed && <span>Users</span>}
        </NavLink>

        <NavLink to="/forms" className="menu-item">
          <FaWpforms />
          {!collapsed && <span>Forms</span>}
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <FaCog />
          {!collapsed && <span>Settings</span>}
        </NavLink>

      </nav>

    </div>
  );
};

export default Sidebar;