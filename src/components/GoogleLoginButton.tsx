import React from "react";

export const GoogleLoginButton: React.FC = () => {
  const handleGoogleLogin = () => {
    const params = new URLSearchParams({
      client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID!,
      redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI!,
      response_type: "code",
      scope: "openid email profile",
      access_type: "offline",
      include_granted_scopes: "true",
      prompt: "consent",
    });

    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
    >
      Continue with Google
    </button>
  );
};


// src/components/auth/GoogleLoginButton.tsx
// import React from "react";

// export const GoogleLoginButton: React.FC = () => {
//   const handleGoogleLogin = () => {
//     window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
//   };

//   return (
//     <button onClick={handleGoogleLogin}
//             className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
//       Login with Google
//     </button>
//   );
// };
