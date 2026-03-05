import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTachometerAlt, FaUsers, FaWpforms, FaCog } from "react-icons/fa";
import "../assets/Sidebar.css";

const Sidebar = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={collapsed ? "sidebar collapsed" : "sidebar"}>

      <div className="sidebar-top">

        <h3 className="logo">
          {!collapsed && "Admin Panel"}
        </h3>

        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars />
        </button>

      </div>

      <nav className="sidebar-menu">

        <NavLink to="/" className="menu-item">
          <FaTachometerAlt />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/users" className="menu-item">
          <FaUsers />
          <span>Users</span>
        </NavLink>

        <NavLink to="/forms" className="menu-item">
          <FaWpforms />
          <span>Forms</span>
        </NavLink>

        <NavLink to="/settings" className="menu-item">
          <FaCog />
          <span>Settings</span>
        </NavLink>

      </nav>

    </div>
  );
};

export default Sidebar;