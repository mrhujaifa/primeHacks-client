import { httpClient } from "@/lib/Axios/axios";
import {
  ICreateHackathonPayload,
  IUpdateHackathonPayload,
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
  payload: IUpdateHackathonPayload,
  hackathonId: string,
) => {
  try {
    const res = await httpClient.patch(`/hackathons/${hackathonId}`, payload);
    if (!res.success) {
      throw new Error(res.message || "Failed to update the hackathon");
    }

    return res;
  } catch (error) {
    console.log(error);
  }
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
};
