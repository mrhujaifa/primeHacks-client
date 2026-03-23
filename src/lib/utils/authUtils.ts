export type UserRole = "USER" | "ORGANIZER" | "ADMIN";
export const authRoutes = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
];

export const getDefaultDashboardRoute = (role: UserRole) => {
  if (role === "ADMIN") {
    return "/admin/dashboard";
  }

  if (role === "ORGANIZER") {
    return "/organizer/dashboard";
  }
  if (role === "USER") {
    return "/dashboard";
  }

  return "/";
};
