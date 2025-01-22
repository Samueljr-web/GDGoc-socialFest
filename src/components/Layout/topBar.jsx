import { IoMdNotificationsOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import PropTypes from "prop-types";
// import { Avatar } from "../../../assets";

function TopBar({ adminDetails, setSidebarOpen }) {
  const firstName = adminDetails?.name.split(" ")[0];
  return (
    <div className="flex items-center justify-between h-20 w-full pl-4 pr-10 lg:px-10 ">
      <div className="flex items-center w-1/2 h-full">
        <IoMdMenu
          className="text-2xl mr-6 cursor-pointer lg:hidden hamburger-menu"
          onClick={() => setSidebarOpen(true)}
        />
      </div>
      <nav className="flex items-center justify-end w-1/4">
        <IoMdNotificationsOutline className="text-2xl text-[#3AAE9F]" />
        <div className="flex items-center justify-center ml-6 ">
          <img
            src={"https://i.pr"}
            alt=""
            className="h-6 w-6 border border-[#3AAE9F] rounded-full"
          />
          <span className="text-[#3AAE9F] ml-2 font-bold hidden sm:block">
            {firstName}
          </span>
        </div>
      </nav>
    </div>
  );
}
TopBar.propTypes = {
  adminDetails: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  setSidebarOpen: PropTypes.func.isRequired,
};

export default TopBar;
