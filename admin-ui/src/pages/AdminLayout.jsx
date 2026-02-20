import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/Sidebar";
import Header from "../components/layout/Header";
import "../styles/dashboard.css";

const AdminLayout = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />

      <div className="main-content">
        <Header />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;