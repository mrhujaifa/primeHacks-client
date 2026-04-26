import { createAuthClient } from "better-auth/react";
import { CLIENT_AUTH_BASE_PATH } from "./config/api";

let authClient: ReturnType<typeof createAuthClient> | null = null;

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const getAppOrigin = () => {
  if (typeof window !== "undefined") {
    return trimTrailingSlash(window.location.origin);
  }

  const envOrigin =
    process.env.NEXT_PUBLIC_APP_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined) ||
    "http://localhost:3000";

  return trimTrailingSlash(envOrigin);
};

export const getAuthClient = () => {
  if (!authClient) {
    authClient = createAuthClient({
      baseURL: `${getAppOrigin()}${CLIENT_AUTH_BASE_PATH}`,
      fetchOptions: {
        credentials: "include",
      },
    });
  }

  return authClient;
};
