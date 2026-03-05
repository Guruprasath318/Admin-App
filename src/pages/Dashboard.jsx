import { FaUsers, FaWpforms, FaChartBar, FaUserCheck } from "react-icons/fa";
import "../assets/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      <h2 className="mb-4">Dashboard Overview</h2>

      <div className="row">

        <div className="col-md-3">
          <div className="dashboard-card users-card">
            <FaUsers className="dashboard-icon" />
            <h4>150</h4>
            <p>Total Users</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card forms-card">
            <FaWpforms className="dashboard-icon" />
            <h4>45</h4>
            <p>Forms Submitted</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card active-card">
            <FaUserCheck className="dashboard-icon" />
            <h4>120</h4>
            <p>Active Users</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="dashboard-card report-card">
            <FaChartBar className="dashboard-icon" />
            <h4>12</h4>
            <p>Reports</p>
          </div>
        </div>

      </div>

      <div className="dashboard-info mt-5">
        <h4>Welcome Admin 👋</h4>
        <p>
          This dashboard allows you to manage users, view forms,
          update settings, and monitor system activity.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;