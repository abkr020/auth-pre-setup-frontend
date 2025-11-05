import React, { useState } from "react";
import { sendOtp, verifyOtp } from "../api/authApi";
import { useAuth } from "../hooks/useAuth";

export const OtpLogin: React.FC = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const { login } = useAuth();

  const handleSendOtp = async () => {
    await sendOtp(email);
    setOtpSent(true);
  };

  const handleVerifyOtp = async () => {
    const res = await verifyOtp(email, code);
    login(res.accessToken, res.user);
  };

  return (
    <div className="flex flex-col gap-3 w-80">
      <input
        type="email"
        placeholder="Email"
        value={email}
        disabled={otpSent}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded p-2"
      />
      {!otpSent ? (
        <button onClick={handleSendOtp} className="bg-green-600 text-white py-2 rounded">
          Send OTP
        </button>
      ) : (
        <>
          <input
            type="text"
            placeholder="Enter OTP"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border rounded p-2"
          />
          <button onClick={handleVerifyOtp} className="bg-blue-600 text-white py-2 rounded">
            Verify OTP
          </button>
        </>
      )}
    </div>
  );
};
