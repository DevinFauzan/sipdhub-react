import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useState } from "react";
import { CompanyProfile } from "../public-profile/profiles/company copy";

const HomeContainer: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <div id="wrapper" style={{ position: "sticky", top: 0 }} className={`d-flex ${isSidebarVisible ? '' : 'toggled'}`}>
      <Sidebar show={isSidebarVisible} />
      <div id="content-wrapper" className={`d-flex flex-column  ${isSidebarVisible ? '' : 'expanded'}`}>
        <div id="content">
          <Header toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
          <div className="container-fluid">
            {/* <CompanyProfile /> */}
            <div className="pt-4">
              <Outlet />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default HomeContainer;
