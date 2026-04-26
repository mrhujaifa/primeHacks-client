"use server";

import { isDynamicServerUsageError } from "@/lib/utils/nextErrorUtils";
import { cookies } from "next/headers";
import { getServerApiBaseUrl } from "@/lib/config/api";

const BASE_API_URL = getServerApiBaseUrl();

export async function getUserInfo() {
  try {
    const cookieStore = await cookies();
    const cookieHeader = cookieStore.toString();

    if (!cookieHeader) {
      return null;
    }

    const res = await fetch(`${BASE_API_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Cookie: cookieHeader,
      },
      credentials: "include",
    });

    if (!res.ok) {
      console.error("Failed to fetch user info:", res.status, res.statusText);
      return null;
    }

    const { data } = await res.json();

    return data;
  } catch (error) {
    if (isDynamicServerUsageError(error)) {
      return null;
    }

    console.error("Error fetching user info:", error);
    return null;
  }
}
