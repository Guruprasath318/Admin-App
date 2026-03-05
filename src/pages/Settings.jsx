import { useNavigate } from "react-router-dom";
import "../assets/Settings.css";

const Settings = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="settings-container">
      <h3 className="mb-4">Settings</h3>

      <div className="card settings-card">
        <div className="card-body text-center">
          
          <h5 className="mb-3">Account Settings</h5>
          <p className="text-muted">
            Click the button below to logout from the admin panel.
          </p>

          <button
            className="btn btn-danger logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </div>
  );
};

export default Settings;