import { httpClient } from "@/lib/Axios/axios";

export const logoutUser = async () => {
  const res = await httpClient.get("/auth/logout");

  if (!res.success) {
    throw new Error("logout unsuccessfull");
  }

  return res.data;
};
