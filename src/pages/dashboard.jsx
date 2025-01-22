import { Route, Routes } from "react-router-dom";
import SideBar from "../components/Layout/sideBar";

import Main from "./dashboard/main";
import NotFound from "../features/404";
import { useEffect, useState } from "react";
import TopBar from "../components/Layout/topBar";
import Submission from "./dashboard/submissions";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("userDetails"));
  useEffect(() => {
    const handleWindowClick = (e) => {
      const targ = e.target;
      let closest = targ.closest(".sidebar-container");
      if (!closest) {
        if (!targ.classList.contains("hamburger-menu")) {
          setSidebarOpen(false);
        }
      }
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-4">
        <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="col-span-4 lg:col-span-3 h-screen">
          <TopBar
            // greeting={greetings}
            adminDetails={user}
            setSidebarOpen={setSidebarOpen}
          />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
