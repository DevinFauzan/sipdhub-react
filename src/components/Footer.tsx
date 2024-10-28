// src/components/Footer.tsx
import React from 'react';
// import './Footer.css'; // Footer styles

const Footer: React.FC = () => {
  return (
    <footer className="sticky-footer bg-white">
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © Kementerian Dalam Negeri Republik Indonesia 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
