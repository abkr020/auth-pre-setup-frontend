import React from "react";
import "../styles/dashboard.css";
import { Navbar } from "../components/layout/Navbar";
import { Sidebar } from "../components/layout/Sidebar";

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-body">
        <Sidebar />
        <main className="dashboard-content">
          <h1 className="dashboard-title">Dashboard</h1>
          <div className="dashboard-cards">
            <div className="dashboard-card">Users: 120</div>
            <div className="dashboard-card">Active Sessions: 45</div>
            <div className="dashboard-card">System Health: ✅</div>
          </div>
        </main>
      </div>
    </div>
  );
};
