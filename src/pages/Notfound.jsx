import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="notfound-container">

      <h1 className="notfound-title">404</h1>

      <h3>Page Not Found</h3>

      <p>The page you are looking for does not exist.</p>

      <Link to="/" className="home-btn">
        Go Back to Dashboard
      </Link>

    </div>
  );
};

export default NotFound;