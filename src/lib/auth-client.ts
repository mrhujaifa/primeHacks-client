import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL_AUTH,

  fetchOptions: {
    credentials: "include",
  },
});
