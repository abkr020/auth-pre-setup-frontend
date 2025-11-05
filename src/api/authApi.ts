import axios from "axios";
import type { LoginResponse, OtpResponse } from "../types/auth";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:4000/api",
  withCredentials: true,
});

export const loginWithEmail = async (email: string, password: string): Promise<LoginResponse> => {
  const { data } = await API.post<LoginResponse>("/auth/login", { email, password });
  return data;
};

export const sendOtp = async (email: string): Promise<OtpResponse> => {
  const { data } = await API.post<OtpResponse>("/auth/send-otp", { email });
  return data;
};

export const verifyOtp = async (email: string, code: string): Promise<LoginResponse> => {
  const { data } = await API.post<LoginResponse>("/auth/verify-otp", { email, code });
  return data;
};
