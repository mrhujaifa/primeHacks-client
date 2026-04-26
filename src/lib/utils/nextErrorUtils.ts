type NextLikeError = {
  digest?: string;
};

export const isDynamicServerUsageError = (error: unknown) => {
  return (
    typeof error === "object" &&
    error !== null &&
    "digest" in error &&
    (error as NextLikeError).digest === "DYNAMIC_SERVER_USAGE"
  );
};
