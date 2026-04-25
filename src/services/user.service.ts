import { httpClient } from "@/lib/Axios/axios";

export const logoutUser = async () => {
  const res = await httpClient.get("/auth/logout");

  if (!res.success) {
    throw new Error("logout unsuccessfull");
  }

  return res.data;
};

type VerifyEmailOtpResponse = {
  success: boolean;
  message: string;
  data?: unknown;
};

export const verifyEmailOtp = async (
  email: string,
  otp: string,
): Promise<VerifyEmailOtpResponse> => {
  const res = await httpClient.post<VerifyEmailOtpResponse>(
    "/auth/verify-email-otp",
    {
      email,
      otp,
    },
  );

  if (!res.success) {
    throw new Error(res.message || "Email OTP verification failed");
  }

  return res;
};

export const googleLogin = async (accessToken: string) => {
  const res = await httpClient.post("/auth/google-login", {
    accessToken,
  });

  if (!res.success) {
    throw new Error(res.message || "Failed to login with Google");
  }

  return res.data;
};
