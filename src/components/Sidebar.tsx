import React, { useState } from 'react';

interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <ul className="navbar-nav bg-gradient-primary bg-base-color sidebar sidebar-dark accordion px-lg-3" id="accordionSidebar">
      <a className="sidebar-brand d-flex align-items-center justify-content-center px-0" href="/home">
        <div className="sidebar-brand-icon rotate-n-15">
          <img height={70} src="../src/assets/img/logo.png" alt="Logo" />
        </div>
        <div className="sidebar-brand-text mx-3">SIPD-HUB</div>
      </a>
      
      <hr className="sidebar-divider" />
      
      <li className="nav-item">
        <span className="nav-link font-weight-bold text-warning pt-0">
          <h6 className="text-gradient-warning m-0">ADMINISTRATOR</h6>
        </span>
      </li>
      
      <hr className="sidebar-divider" />
      
      <li className="nav-item">
        <a className="nav-link nav-link-border font-weight-bold" href="/home">
          <i className="fas fa-fw fa-home"></i>
          <span>Beranda</span>
        </a>
      </li>
      
      <li className="nav-item">
        <div className="sidebar-item mb-0" style={{ overflow: "hidden" }}>
          <button 
            className={`collapse-btn nav-link ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            type="button"
          >
            <i className="fas fa-fw fa-gears"></i>
            <span>Integrasi</span>
          </button>
          
          <div className={`collapse-content ${isMenuOpen ? 'show' : ''}`} id="menu2">
            <a href="/dapodik" className="collapse-item">Dapodik</a>
            <a href="/kemenko" className="collapse-item">Kemiskinan Ekstrem</a>
            <a href="/sipd" className="collapse-item">Anggaran Nasional</a>
            <a href="/bkkbnnew" className="collapse-item">Anggaran Stunting</a>
          </div>
        </div>
      </li>
      
      <li className="nav-item">
        <a className="nav-link nav-link-border font-weight-bold" href="/sipd/pengguna">
          <i className="fas fa-fw fa-users"></i>
          <span>Pengguna</span>
        </a>
      </li>
    </ul>
  );
};

export default Sidebar;