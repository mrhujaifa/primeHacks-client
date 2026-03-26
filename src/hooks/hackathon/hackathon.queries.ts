import { HackathonServices } from "@/services/hackathon.service";
import {
  BackendHackathon,
  IGetHackathonCagories,
} from "@/types/hackathon.types";

export const getOwnHackathonsServerQueryFn = async (
  cookieHeader: string,
): Promise<BackendHackathon[]> => {
  const res = await HackathonServices.getOwnHackathons(cookieHeader);
  return res?.data || [];
};

export const getOwnHackathonsClientQueryFn = async (): Promise<
  BackendHackathon[]
> => {
  const res = await HackathonServices.getOwnHackathons();

  return res.data || [];
};

export const getHackathonByidServerQureryFn = async (
  hackathonId: string,
  cookieHeader: string,
): Promise<BackendHackathon> => {
  const hackathon = await HackathonServices.getHackathonById(
    hackathonId,
    cookieHeader,
  );

  if (!hackathon) {
    throw new Error("Hackathon not found");
  }

  return hackathon;
};
export const getHackathonByidClientQureryFn = async (
  hackathonId: string,
): Promise<BackendHackathon> => {
  const hackathon = await HackathonServices.getHackathonById(hackathonId);

  if (!hackathon) {
    throw new Error("Hackathon not found");
  }

  return hackathon;
};

export const getAllHackathonCategoriesQueryFn = async () => {
  const category = await HackathonServices.getAllHackathonCategories();

  if (!category) {
    throw new Error("category not found");
  }

  return category;
};
