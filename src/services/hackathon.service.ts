/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "@/lib/Axios/axios";
import {
  BackendHackathon,
  ICreateHackathonPayload,
  THackathonFormValues,
} from "@/types/hackathon.types";

//* create hackathon
const createHackathon = async (payload: ICreateHackathonPayload) => {
  try {
    const res = await httpClient.post("/hackathons", payload);

    if (res.success) {
      return res.data;
    }

    throw new Error(res.message || "Failed to create the hackathon");
  } catch (error) {
    console.error("Error creating hackathon:", error);
    throw error;
  }
};

//* udpdate hackathon
const updateHackathon = async (
  id: string,
  payload: Partial<THackathonFormValues>,
) => {
  const res = await httpClient.patch(`/hackathons/${id}`, payload, {
    // withCredentials: true,
  });

  if (!res.success) {
    throw new Error(res.message || "Failed to update hackathon");
  }

  return res.data;
};

//* get own hackathons
const getOwnHackathons = async (cookieHeader?: string) => {
  try {
    const res = await httpClient.get("/hackathons/my-hackathons", {
      headers: cookieHeader
        ? {
            Cookie: cookieHeader,
          }
        : undefined,
    });

    if (!res.success) {
      throw new Error(res.message || "Failed to get own hackathons");
    }

    return res;
  } catch (error) {
    console.error("getOwnHackathons failed:", error);
    throw error;
  }
};

//* get hackathon by id
const getHackathonById = async (
  hackathonId: string,
  cookieHeader?: string,
): Promise<BackendHackathon> => {
  try {
    const res = await httpClient.get<BackendHackathon>(
      `/hackathons/${hackathonId}`,
      {
        headers: cookieHeader
          ? {
              Cookie: cookieHeader,
            }
          : undefined,
      },
    );

    if (!res.success || !res.data) {
      throw new Error(res.message || "Failed to get hackathons by id");
    }

    return res.data;
  } catch (error: any) {
    console.log(error);

    throw new Error(error?.message || "Failed to get hackathons by id");
  }
};

//* handle delete hackathon
const handleDeleteHackathon = async (hackathonId: string) => {
  try {
    const res = await httpClient.delete(`/hackathons/${hackathonId}`);

    if (res.success === false) {
      throw new Error("Failed to delete hackathons");
    }

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export const HackathonServices = {
  createHackathon,
  updateHackathon,
  getOwnHackathons,
  handleDeleteHackathon,
  getHackathonById,
};
