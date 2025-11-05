import React from "react";
import "../../styles/layout.css";

export const Sidebar: React.FC = () => {
  return (
    <aside className="layout-sidebar">
      <ul className="layout-sidebar-menu">
        <li className="layout-sidebar-item active">Dashboard</li>
        <li className="layout-sidebar-item">Profile</li>
        <li className="layout-sidebar-item">Settings</li>
      </ul>
    </aside>
  );
};
