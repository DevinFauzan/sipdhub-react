import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { GoHome } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import logosipd from '../../assets/img/logo.png';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  show: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <div className={clsx("sticky-component navbar-nav transition-all duration-300 ease-in-out bg-gradient-primary sidebar sidebar-dark accordion", { "disappear": !show })} id="accordionSidebar">

        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/sipd-hub/home">
          <div className="sidebar-brand-icon rotate-n-15">
            <img height={70} src={logosipd} alt="Logo" />
          </div>
          <div className="sidebar-brand-text mx-3">SIPD-HUB</div>
        </Link>
        <ul>

          <li className="nav-item pt-4">
            <Link className={clsx("nav-link nav-link-border font-weight-bold", { active: location.pathname === "/sipd-hub/home" })} to="/sipd-hub/home">
              <div className="row ml-1">
                <div className="class" style={{ fontSize: 15 }}>
                  <GoHome />
                </div>
                <span className='ml-2' style={{ fontSize: 16 }}>Beranda</span>
              </div>
            </Link>
          </li>

          <li className="nav-item">
            <div className="sidebar-item mb-0">
              <button
                className={`btn btn-link sidebar-link nav-link ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
                type="button"
              >
                <div className="row ml-1">
                  <div className="class" style={{ fontSize: 15 }}>
                    <IoSettingsOutline />
                  </div>
                  <span className='ml-2 font-weight-bold' style={{ fontSize: 16 }}>Integrasi</span>
                </div>
              </button>
              <div className={`collapse-content ${isMenuOpen ? 'show' : ''}`}>
                <Link to="/sipd-hub/dapodik" className={clsx("collapse-item", { active: location.pathname === "/sipd-hub/dapodik" })}>Dapodik</Link>
                <Link to="/sipd-hub/kemenko" className={clsx("collapse-item", { active: location.pathname === "/sipd-hub/kemenko" })}>Kemiskinan Ekstrem</Link>
                {/* <Link to="/sipd-hub/sipd" className={clsx("collapse-item", { active: location.pathname === "/sipd-hub/sipd" })}>Anggaran Nasional</Link> */}
                <Link to="/sipd-hub/bkkbn" className={clsx("collapse-item", { active: location.pathname === "/sipd-hub/bkkbn" })}>Keluarga Beresiko Stunting</Link>
                <Link to="/sipd-hub/bpjs-kesehatan" className={clsx("collapse-item", { active: location.pathname === "/sipd-hub/bpjs-kesehatan" })}>BPJS</Link>

                {/* <a href="/dapodik" className={clsx("collapse-item", { active: location.pathname === "/dapodik" })}>Dapodik</a> */}
                {/* <a href="/kemenko" className={clsx("collapse-item", { active: location.pathname === "/kemenko" })}>Kemiskinan Ekstrem</a> */}
                {/* <a href="/sipd" className={clsx("collapse-item", { active: location.pathname === "/sipd" })}>Anggaran Nasional</a> */}
                {/* <a href="/bkkbn" className={clsx("collapse-item", { active: location.pathname === "/bkkbn" })}>Keluarga Beresiko Stunting</a> */}
                {/* <a href="/bpjs-kesehatan" className={clsx("collapse-item", { active: location.pathname === "/bpjs-kesehatan" })}>BPJS </a> */}
              </div>
            </div>
          </li>

          {/* <li className="nav-item">
            <a className={clsx("nav-link", { active: location.pathname === "/sipd/pengguna" })} href="/sipd/pengguna">
              <i className="fas fa-fw fa-users"></i>
              <span>Pengguna</span>
            </a>
          </li> */}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Sidebar;