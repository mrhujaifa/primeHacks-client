/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { IResigterResponse } from "@/interface/auth.interface";
import { ILoginPayload, registerZodSchema } from "@/Zod/auth.validation";
import { httpClient } from "@/lib/Axios/axios";
import {
  setPendingVerificationCookie,
  setTokenInCookies,
} from "@/lib/utils/tokenUtils";
import axios from "axios";
import { redirect } from "next/navigation";

export const registerAction = async (payload: ILoginPayload) => {
  // validation data use zod
  const parsedPayload = registerZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    const firstError = parsedPayload.error.issues[0].message || "Invalid input";
    return {
      success: false,
      message: firstError,
    };
  }
  try {
    const response = await httpClient.post<IResigterResponse>(
      "/auth/register",
      parsedPayload.data,
    );

    const { accessToken, refreshToken, token } = response.data;

    await setTokenInCookies("accessToken", accessToken);
    await setTokenInCookies("refreshToken", refreshToken);
    await setTokenInCookies("better-auth.session_token", token);

    await setPendingVerificationCookie(
      "pending_email_verification",
      parsedPayload.data.email,
    );

    redirect(
      `/verify-email?email=${encodeURIComponent(parsedPayload.data.email)}`,
    );
  } catch (error: any) {
    if (
      error &&
      typeof error === "object" &&
      "digest" in error &&
      typeof error.digest === "string" &&
      error.digest.startsWith("NEXT_REDIRECT")
    ) {
      throw error;
    }

    if (axios.isAxiosError(error)) {
      const statusCode = error.response?.status;
      const serverMessage = error.response?.data?.message;

      if (statusCode === 409) {
        return {
          success: false,
          message: "This email is already registered. Please login instead.",
          statusCode,
        };
      }

      return {
        success: false,
        message: serverMessage || "Registration failed. Please try again.",
        statusCode,
      };
    }
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};
