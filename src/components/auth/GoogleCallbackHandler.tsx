// GoogleCallbackHandler.tsx
import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQueryParams } from "../../hooks/useQueryParams";
import { AuthContext } from "../../context/AuthContext";

export const GoogleCallbackHandler: React.FC = () => {
  const query = useQueryParams();
  const navigate = useNavigate();
  const auth = useContext(AuthContext);

  useEffect(() => {
    const code = query.get("code");
    const error = query.get("error");

    if (error) {
      console.error("Google OAuth error:", error);
      navigate("/login?error=google_login_failed");
      return;
    }

    if (code) {
      fetch(`${import.meta.env.VITE_API_BACKEND_URL}/api/auth/google`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ code }),
      })
        .then(async (res) => {
          if (!res.ok) throw new Error("Failed to exchange code");
          const data = await res.json();
          console.log("✅ Google user data:", data);

          // Save to context + localStorage
          auth?.loginWithGoogle(data);

          // Redirect to dashboard
          navigate("/");
        })
        .catch((err) => {
          console.error("Google login failed:", err);
          navigate("/login?error=google_exchange_failed");
        });
    }
  }, [query, navigate, auth]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p>Processing Google login...</p>
    </div>
  );
};
