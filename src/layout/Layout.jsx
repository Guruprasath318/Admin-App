import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="d-flex vh-100">

      <Sidebar />

      <div className="flex-grow-1">

        <Header />

        <div className="p-4">
          <Outlet />
        </div>

      </div>

    </div>
  );
};

export default Layout;