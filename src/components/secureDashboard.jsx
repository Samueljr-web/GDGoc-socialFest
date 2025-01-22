import { Navigate, Outlet } from "react-router-dom";

const adminAuth = () => {
  const user = JSON.parse(localStorage?.getItem("userDetails"));
  const { isSignedIn } = JSON.parse(localStorage?.getItem("isSignedin"));
  const adminDetails = user && isSignedIn === true;
  console.log(adminDetails);

  return adminDetails;
};

const SecureDashboard = () => {
  const isAuth = adminAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};
//secure /login and /register routes

// export const SecureAuth = ({ children }) => {
//   const isAuth = adminAuth();
//   return isAuth ? <Navigate to="/" /> : children;
// };

export default SecureDashboard;
