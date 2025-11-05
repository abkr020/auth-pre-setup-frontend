// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect } from "react";
import type { AuthContextType, User } from "../types/auth";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
const [loading, setLoading] = useState(true);

    // ✅ Restore user from localStorage on app load
    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) setUser(JSON.parse(savedUser));
         setLoading(false);
    }, []);

    // ✅ Email/password or generic login
    const login = (token: string, user: User) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser(user);
    };

    // ✅ Google login specifically
    const loginWithGoogle = (data: any) => {
        const { tokens, user } = data;

        if (tokens?.access_token) {
            localStorage.setItem("token", tokens.access_token);
        }

        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
            setUser(user);
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, loginWithGoogle, logout,loading }}>
            {children}
        </AuthContext.Provider>
    );
};
