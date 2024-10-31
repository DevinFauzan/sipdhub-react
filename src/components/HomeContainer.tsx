import { Outlet } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import React, { useState } from "react";
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa";

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
          <Header />
          <div className="container-fluid">
            <button
              onClick={toggleSidebar}
              className="btn btn-link sticky-component"
            >
              {isSidebarVisible ? (
                <FaRegArrowAltCircleLeft size={20} />
              ) : (
                <FaRegArrowAltCircleRight size={20} />
              )}
            </button>
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