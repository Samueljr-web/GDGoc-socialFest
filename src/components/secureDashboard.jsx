import { Navigate, Outlet } from "react-router-dom";

const adminAuth = () => {
  const adminDetails = JSON.parse(sessionStorage.getItem("adminDetails"));
  return adminDetails;
};

const SecureDashboard = () => {
  const isAuth = adminAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default SecureDashboard;
