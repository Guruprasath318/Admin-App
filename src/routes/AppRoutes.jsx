import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Users from "../pages/Users";
import Forms from "../pages/Forms";
import Settings from "../pages/Settings";
import Layout from "../layout/Layout";
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>

      {/* Login Page */}
      <Route path="/login" element={<Login />} />

      {/* Protected Pages */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="forms" element={<Forms />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* 404 Page */}
      <Route path="*" element={<h2>404 Page Not Found</h2>} />

    </Routes>
  );
};

export default AppRoutes;