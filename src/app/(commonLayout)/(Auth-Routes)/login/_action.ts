"use server";

import { ILoginResponse } from "@/interface/auth.interface";
import { ILoginPayload, loginZodSchema } from "@/Zod/auth.validation";
import { httpClient } from "@/lib/Axios/axios";
import { setTokenInCookies } from "@/lib/utils/tokenUtils";
import axios from "axios";

export type LoginActionResult =
  | {
      success: true;
      message: string;
      user: ILoginResponse["user"];
    }
  | {
      success: false;
      message: string;
      statusCode?: number;
    };

export const loginAction = async (
  payload: ILoginPayload,
): Promise<LoginActionResult> => {
  // validation data use zod
  const parsedPayload = loginZodSchema.safeParse(payload);

  if (!parsedPayload.success) {
    const firstError = parsedPayload.error.issues[0].message || "Invalid input";
    return {
      success: false,
      message: firstError,
    };
  }
  try {
    const response = await httpClient.post<ILoginResponse>(
      "/auth/login",
      parsedPayload.data,
    );

    const { accessToken, refreshToken, token } = response.data;

    await setTokenInCookies("accessToken", accessToken);
    await setTokenInCookies("refreshToken", refreshToken);
    await setTokenInCookies("better-auth.session_token", token);

    return {
      success: true,
      message: "Login successful",
      user: response.data.user,
    };
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
        statusCode: error.response?.status,
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};
