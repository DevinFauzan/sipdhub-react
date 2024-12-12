import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const HomeContainer: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      id="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Sidebar show={isSidebarVisible} />
      <div
        id="content-wrapper"
        style={{
          marginLeft: isSidebarVisible ? "0px" : "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} />
        <div
          id="content"
          style={{
            flex: 1,
            overflowY: "auto",
            padding: "0px",
            marginTop: "0px", // Adjust this based on your header height
          }}
        >
          <div className="container-fluid">
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