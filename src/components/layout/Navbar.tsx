import React from "react";
import "../../styles/layout.css";

export const Navbar: React.FC = () => {
  return (
    <nav className="layout-navbar">
      <div className="layout-navbar-logo">AuthApp</div>
      <div className="layout-navbar-right">
        <button className="layout-logout-btn">Logout</button>
      </div>
    </nav>
  );
};
