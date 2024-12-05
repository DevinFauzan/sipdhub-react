import React, { useState } from 'react';
import clsx from 'clsx';
import { GoHome } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import logosipd from '../../assets/img/logo.png';

interface SidebarProps {
  show: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ show }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const currentPath = window.location.pathname;

  return (
    <ul className={clsx("sticky-component navbar-nav transition-all duration-300 ease-in-out bg-gradient-primary sidebar sidebar-dark accordion", { "disappear": !show })} id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/home">
        <div className="sidebar-brand-icon rotate-n-15">
          <img height={70} src={logosipd} alt="Logo" />
        </div>
        <div className="sidebar-brand-text mx-3">SIPD-HUB</div>
      </a>

      <li className="nav-item pt-4">
        <a className={clsx("nav-link nav-link-border font-weight-bold", { active: currentPath === "/home" })} href="/home">
          <div className="row ml-1">
            <div className="class" style={{ fontSize: 15 }}>
              <GoHome />
            </div>
            <span className='ml-2' style={{ fontSize: 16 }}>Beranda</span>
          </div>
        </a>
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
            <a href="/dapodik" className={clsx("collapse-item", { active: currentPath === "/dapodik" })}>Dapodik</a>
            <a href="/kemenko" className={clsx("collapse-item", { active: currentPath === "/kemenko" })}>Kemiskinan Ekstrem</a>
            <a href="/sipd" className={clsx("collapse-item", { active: currentPath === "/sipd" })}>Anggaran Nasional</a>
            <a href="/bkkbn" className={clsx("collapse-item", { active: currentPath === "/bkkbn" })}>Anggaran Stunting</a>
          </div>
        </div>
      </li>

      {/* <li className="nav-item">
        <a className={clsx("nav-link", { active: currentPath === "/sipd/pengguna" })} href="/sipd/pengguna">
          <i className="fas fa-fw fa-users"></i>
          <span>Pengguna</span>
        </a>
      </li> */}
    </ul>
  );
};

export default Sidebar;