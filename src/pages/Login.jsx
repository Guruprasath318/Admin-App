import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple Hardcoded Authentication
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-container">
      <div className="card login-card shadow">
        <div className="card-body">
          <h3 className="text-center mb-4">Admin Login</h3>

          {error && (
            <div className="alert alert-danger">{error}</div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={handleChange}
                required
              />
            </div>

            <button className="btn btn-primary w-100">
              Login
            </button>
          </form>

          <div className="text-center mt-3 small text-muted">
            Demo Login: admin@gmail.com / 123456
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;