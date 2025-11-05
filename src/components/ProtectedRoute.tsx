import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user, loading } = useAuth();
  console.log("user in ProtectedRoute:", user);
  if (loading) return <div>Loading...</div>; // or a spinner component

  return user ? children : <Navigate to="/login" replace />;
};
