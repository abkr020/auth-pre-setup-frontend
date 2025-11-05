import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./components/ProtectedRoute";
// import { AuthRedirectRoute } from "./components/AuthRedirectRoute";
import { AuthCallback } from "./pages/AuthCallback";
import { GoogleCallbackHandler } from "./components/auth/GoogleCallbackHandler";
import { AuthRedirectRoute } from "./components/AuthRedirectRoute";

export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      {/* Redirect to dashboard if already logged in */}
      <Route
        path="/login"
        element={
          <AuthRedirectRoute>
            <LoginPage />
          </AuthRedirectRoute>
        }
      />

      <Route path="/auth/callback" element={<AuthCallback />} />
      <Route path="/google/callback" element={<GoogleCallbackHandler />} />

      {/* Protected dashboard route */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);
