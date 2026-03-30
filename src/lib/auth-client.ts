import { createAuthClient } from "better-auth/react";

const NEXT_PUBLIC_API_BACKEND_URL = process.env
  .NEXT_PUBLIC_API_BACKEND_URL as string;

if (!NEXT_PUBLIC_API_BACKEND_URL) {
  throw new Error("env NEXT_PUBLIC_API_BACKEND_URL not found");
}

export const authClient = createAuthClient({
  baseURL: "https://prisma-hacks.onrender.com",
  basePath: "/api/auth",
  fetchOptions: {
    credentials: "include",
  },
});
