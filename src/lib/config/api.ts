const trimTrailingSlash = (value: string) => value.replace(/\/+$/, "");

const backendOriginSource =
  process.env.NEXT_PUBLIC_API_BACKEND_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  process.env.NEXT_PUBLIC_API_BASE_URL_AUTH;

const normalizeBackendOrigin = (value: string) => {
  try {
    return trimTrailingSlash(new URL(value).origin);
  } catch {
    return trimTrailingSlash(value);
  }
};

export const CLIENT_API_BASE_PATH = "/api/v1";
export const CLIENT_AUTH_BASE_PATH = "/api/auth";

export const getBackendOrigin = () => {
  if (!backendOriginSource) {
    throw new Error(
      "Set NEXT_PUBLIC_API_BACKEND_URL or NEXT_PUBLIC_API_BASE_URL in the environment",
    );
  }

  return normalizeBackendOrigin(backendOriginSource);
};

export const getServerApiBaseUrl = () =>
  `${getBackendOrigin()}${CLIENT_API_BASE_PATH}`;

export const getServerAuthBaseUrl = () =>
  `${getBackendOrigin()}${CLIENT_AUTH_BASE_PATH}`;

export const getApiBaseUrl = () => {
  if (typeof window === "undefined") {
    return getServerApiBaseUrl();
  }

  return CLIENT_API_BASE_PATH;
};
