import React from 'react';
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from "react-icons/fa"; // Import the icons
import fotoprofil from '../../assets/img/undraw_profile.svg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useAuth } from '../../auth/AuthContext'; // Import your AuthContext

interface HeaderProps {
  toggleSidebar: () => void; // Add toggleSidebar prop
  isSidebarVisible: boolean; // Add isSidebarVisible prop
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, isSidebarVisible }) => {
  const navigate = useNavigate(); // Initialize navigation
  const { logout, fullname } = useAuth(); // Get the logout function from context

  const handleLogout = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_AUTH_API_URL}/logout`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('access_token')}`, // Include the token if needed
        },
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      // Clear the access token from local storage
      localStorage.removeItem('access_token');
      logout(); // Call the logout function from context to update the auth state
      navigate('/sipd-hub'); // Redirect to the login page or home page
    } catch (error) {
      console.error('Logout error:', error);
      // Optionally, you can show an error message to the user
    }
  };

  const handleProfileClick = () => {
    navigate('../sipd/user/profil'); // Navigate to the profile page
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow" style={{ zIndex: 1000 }}>
      <button 
        id="" 
        className="btn btn-link center" // Removed d-md-none to show on all sizes
        style={{ alignItems: 'center', display: '', }}
        onClick={toggleSidebar} // Use toggleSidebar on button click
      >
        {isSidebarVisible ? (
          <FaRegArrowAltCircleLeft size={20} /> // Show left arrow when sidebar is visible
        ) : (
          <FaRegArrowAltCircleRight size={20} /> // Show right arrow when sidebar is hidden
        )}
      </button>
      <h2></h2>
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown no-arrow" style={{ marginLeft: "auto" }}>
          <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{fullname}</span>
            <img className="img-profile rounded-circle" src={fotoprofil} alt="Profile" />
          </a>

          <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
            {/* <a className="dropdown-item" href="#" onClick={handleProfileClick}>
              <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
              Profile
            </a> */}
            {/* <div className="dropdown-divider"></div> */}
            <a className="dropdown-item" href="#" onClick={handleLogout}>
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
