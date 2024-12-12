import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer
      className="sticky-footer bg-white"
      style={{
        position: "relative", // Ensure it stays at the bottom of the content
        bottom: 0,
        width: "100%",
        padding: "10px 0", // Add some padding for aesthetics
        textAlign: "center", // Center the text
        backgroundColor: "#f8f9fa", // Light background color
      }}
    >
      <div className="container my-auto">
        <div className="copyright text-center my-auto">
          <span>Copyright © Kementerian Dalam Negeri Republik Indonesia 2024</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;