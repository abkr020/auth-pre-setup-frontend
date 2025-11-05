// import React, { useEffect } from "react";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

// export const AuthCallback: React.FC = () => {
//   const [searchParams] = useSearchParams();
//   const navigate = useNavigate();
//   const { login } = useAuth();

//   useEffect(() => {
//     const token = searchParams.get("token");
//     if (token) {
//       // Decode JWT (optional - or get user info from API)
//       const payload = JSON.parse(atob(token.split(".")[1]));
//       login(token, { id: payload.sub, email: payload.email });
//       navigate("/");
//     } else {
//       navigate("/login?error=google_failed");
//     }
//   }, [searchParams, login, navigate]);

//   return <p>Signing you in...</p>;
// };
