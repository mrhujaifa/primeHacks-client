import { THackathonCardItem } from "@/services/hackathon.service";
import { getServerApiBaseUrl } from "@/lib/config/api";
import { BackendHackathon, IHackathonCategory } from "@/types/hackathon.types";

const BASE_API_URL = getServerApiBaseUrl();

export const getOwnHackathonsServerQueryFn = async (
  cookieHeader: string,
): Promise<BackendHackathon[]> => {
  const res = await fetch(`${BASE_API_URL}/hackathons/my-hackathons`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch own hackathons");
  }
  const data = await res.json();
  return data.data || [];
};

export const getHackathonByidServerQureryFn = async (
  hackathonId: string,
  cookieHeader: string,
): Promise<BackendHackathon> => {
  const res = await fetch(`${BASE_API_URL}/hackathons/${hackathonId}`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch hackathon");
  }
  const data = await res.json();
  return data;
};

export const getAllHackathonCategoriesQueryFn = async (): Promise<
  IHackathonCategory[]
> => {
  const res = await fetch(`${BASE_API_URL}/hackathons/category`);
  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }
  const data = await res.json();
  return data.data || [];
};

export const getAllHackathonsQueryFn = async (): Promise<
  THackathonCardItem[]
> => {
  const res = await fetch(`${BASE_API_URL}/hackathons`);
  if (!res.ok) {
    throw new Error("Failed to fetch all hackathons");
  }
  const data = await res.json();
  return data.data || [];
};

//* Submission queries

export const getMySubmissionsServerQueryFn = async (cookie: string) => {
  const res = await fetch(`${BASE_API_URL}/submission/my-submission`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch submissions");
  }
  const data = await res.json();
  return data.data || [];
};
