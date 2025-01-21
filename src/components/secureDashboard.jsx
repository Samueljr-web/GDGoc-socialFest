import { Navigate, Outlet } from "react-router-dom";

const adminAuth = () => {
  const adminDetails = JSON.parse(sessionStorage.getItem("userDetails"));
  return adminDetails;
};

const SecureDashboard = () => {
  const isAuth = adminAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
//secure /login and /register routes

export const SecureAuth = ({ children }) => {
  const isAuth = adminAuth();
  return isAuth ? <Navigate to="/" /> : children;
};

export default SecureDashboard;
