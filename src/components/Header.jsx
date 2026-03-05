import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-light bg-light px-4 shadow-sm d-flex justify-content-between">

      <span className="navbar-brand mb-0 h5">
        Admin Dashboard
      </span>

      {/* Profile Dropdown */}
      <div className="dropdown">
        <div
          className="d-flex align-items-center"
          role="button"
          data-bs-toggle="dropdown"
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="rounded-circle me-2"
            width="40"
            height="40"
          />
          <span className="fw-semibold">Admin</span>
        </div>

        <ul className="dropdown-menu dropdown-menu-end shadow">
          <li>
            <a className="dropdown-item" href="#">
              Profile
            </a>
          </li>

          <li>
            <a className="dropdown-item" href="#">
              Settings
            </a>
          </li>

          <li><hr className="dropdown-divider" /></li>

          <li>
            <button
              className="dropdown-item text-danger"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Header;