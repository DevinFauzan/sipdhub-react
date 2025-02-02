import React from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"; // Import the icons
import fotoprofil from '../../assets/img/undraw_profile.svg';

interface HeaderProps {
  toggleSidebar: () => void; // Add toggleSidebar prop
  isSidebarVisible: boolean; // Add isSidebarVisible prop
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarVisible }) => {
  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button 
        id="" 
        className="btn btn-link   center" // Removed d-md-none to show on all sizes
        style={{ alignItems : 'center', display: '',}}
        onClick={toggleSidebar} // Use toggleSidebar on button click
      >
        {isSidebarVisible ? (
          <FaRegArrowAltCircleLeft size={20} /> // Show left arrow when sidebar is visible
        ) : (
          <FaRegArrowAltCircleRight size={20} /> // Show right arrow when sidebar is hidden
        )}
      </button>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow d-sm-none">
          <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-search fa-fw"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
            <form className="form-inline mr-auto w-100 navbar-search">
              <div className="input-group">
                <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                  <button className="btn btn-primary" type="button">
                    <i className="fas fa-search fa-sm"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow" style={{ marginLeft: "auto" }}>
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">KAPUSDATIN</span>
            <img className="img-profile rounded-circle" src={fotoprofil} />
          </a>

          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            <a className="dropdown-item" href="../sipd/user/profil">
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
              <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
              Logout
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
