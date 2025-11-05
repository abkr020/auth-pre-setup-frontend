import React, { useState } from "react";
import { loginWithEmail } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await loginWithEmail(email, password);
      login(res.accessToken, res.user);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border rounded p-2"
      />
      <button className="bg-blue-600 text-white py-2 rounded">Login</button>
    </form>
  );
};
