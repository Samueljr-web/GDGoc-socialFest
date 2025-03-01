import { Link, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { RiLogoutBoxLine } from "react-icons/ri";

function SideBar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.stopPropagation();
    localStorage.setItem("isSignedin", JSON.stringify({ isSignedIn: false }));
    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  const linkClasses = (path) =>
    `block px-4 py-2 hover:bg-[#3AAE9F] transition-colors duration-300 ${
      location.pathname === path ? "bg-[#3AAE9F] text-white" : ""
    }`;
  return (
    <div
      className={`absolute top-0 ${
        sidebarOpen ? "left-0" : "-left-full"
      } w-9/12 md:w-7/12 lg:static z-10 lg:w-auto lg:col-span-1 lg:block transition-all duration-700 ease-in-out sidebar-container flex flex-col h-screen bg-[#F4F8F7]`}
    >
      <div className="text-2xl ml-2 mt-2 text-[#3AAE9F] font-bold">GDGoC</div>
      <div className="flex pl-10 mt-10 flex-col ">
        <div className="flex flex-col gap-5">
          <Link
            to="/"
            className={linkClasses("/")}
            onClick={() => setSidebarOpen(false)}
          >
            <span>Dashboard</span>
          </Link>
          <Link
            to="/submission"
            className={linkClasses("/submission")}
            onClick={() => setSidebarOpen(false)}
          >
            <span>Submission</span>
          </Link>
          <Link
            to="/users"
            className={linkClasses("/users")}
            onClick={() => setSidebarOpen(false)}
          >
            <span>Users</span>
          </Link>
        </div>

        <div className="absolute bottom-3">
          <button
            className="flex gap-2 items-center p-2 w-full  rounded-lg "
            onClick={handleLogout}
          >
            logout <RiLogoutBoxLine />
          </button>
        </div>
      </div>
    </div>
  );
}
SideBar.propTypes = {
  sidebarOpen: PropTypes.bool.isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default SideBar;
