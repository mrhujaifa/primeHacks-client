import { httpClient } from "@/lib/Axios/axios";
import { UserInformation } from "@/types/user.types";

const getAlluser = async (cookie?: string) => {
  try {
    const res = await httpClient.get<UserInformation[]>("/admins/users", {
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    });
    if (!res.success) {
      throw new Error("failed to fetch all users data");
    }

    return res.data || [];
  } catch (error) {
    console.log(error);
  }
};

const updateUserRole = async (userId: string, payload: { role: string }) => {
  return await httpClient.patch(`/admins/users/${userId}/role`, payload, {
    withCredentials: true,
  });
};

const updateUserStatus = async (
  userId: string,
  payload: { status: string },
) => {
  return await httpClient.patch(`/admins/users/${userId}/status`, payload, {
    withCredentials: true,
  });
};

export const AdminServices = {
  getAlluser,
  updateUserRole,
  updateUserStatus,
};
