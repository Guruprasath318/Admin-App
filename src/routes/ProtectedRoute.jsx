import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  const auth = localStorage.getItem("isAuthenticated");

  return auth === "true" ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;