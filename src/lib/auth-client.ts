import { createAuthClient } from "better-auth/react";

const NEXT_PUBLIC_API_BACKEND_URL = process.env.NODE_ENV === 'production' ? '/' : process.env.NEXT_PUBLIC_API_BACKEND_URL as string;

if (!NEXT_PUBLIC_API_BACKEND_URL) {
  throw new Error("env NEXT_PUBLIC_API_BACKEND_URL not found");
}

export const authClient = createAuthClient({
  baseURL: NEXT_PUBLIC_API_BACKEND_URL,
  basePath: "/api/auth",
  fetchOptions: {
    credentials: "include",
  },
});
