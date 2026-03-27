/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "@/lib/Axios/axios";
import {
  BackendHackathon,
  ICreateHackathonPayload,
  IHackathonCategory,
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
    const res = await httpClient.get<BackendHackathon[]>(
      "/hackathons/my-hackathons",
      {
        headers: cookieHeader
          ? {
              Cookie: cookieHeader,
            }
          : undefined,
      },
    );

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

//* Handle all hackthons categories
const getAllHackathonCategories = async () => {
  try {
    const res = await httpClient.get<IHackathonCategory[]>(
      "/hackathons/category",
    );

    if (!res.success) {
      throw new Error("Get hackathon categories failed");
    }

    return res;
  } catch (error) {
    console.log(error);
  }
};

const getAllHackathons = async () => {
  try {
    const res = await httpClient.get<BackendHackathon[]>("/hackathons");
    if (!res.success) {
      throw new Error("Get All hackathons failed");
    }

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export type THackathonCardItem = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription?: string | null;

  logoUrl?: string | null;
  bannerImageUrl?: string | null;
  websiteUrl?: string | null;
  discordUrl?: string | null;
  contactEmail?: string | null;

  rules?: string | null;
  eligibility?: string | null;

  prizePool?: string | null;
  prizePoolText?: string | null;
  registrationFee?: number | string | null;
  currency?: string | null;

  maxTeamSize?: number | null;
  registrationStartDate?: string | null;
  registrationEndDate?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  submissionDeadline?: string | null;

  status: string;
  isFeatured?: boolean;
  isPremiumOnly?: boolean;

  categoryId?: string;
  organizerName?: string | null;
  location?: string | null;
  platform?: string | null;
  categories?: string[];
  daysLeftLabel?: string | null;
  buildCountLabel?: string | null;
};

export type THackathonFilterChip = {
  id: string;
  label: string;
};

export type TAllHackathonsPageViewProps = {
  totalCount?: number;
  hackathons?: THackathonCardItem[];
  featuredBanners?: {
    id: string;
    image: string;
    title?: string;
  }[];
  quickFilters?: THackathonFilterChip[];
};

export const HackathonServices = {
  createHackathon,
  updateHackathon,
  getOwnHackathons,
  handleDeleteHackathon,
  getHackathonById,
  getAllHackathonCategories,
  getAllHackathons,
};
