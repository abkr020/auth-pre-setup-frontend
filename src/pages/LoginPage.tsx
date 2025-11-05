import React from "react";
import "../styles/login.css";
import { GoogleLoginButton } from "../components/GoogleLoginButton";
// import { GoogleLoginButton } from "../components/auth/GoogleLoginButton";

export const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue</p>
        <div className="login-divider" />
        <GoogleLoginButton />
      </div>
    </div>
  );
};
