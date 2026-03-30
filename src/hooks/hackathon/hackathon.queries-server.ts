import {
  HackathonServices,
  THackathonCardItem,
} from "@/services/hackathon.service";
import { SubmissionServices } from "@/services/submission.service";
import { BackendHackathon, IHackathonCategory } from "@/types/hackathon.types";

export const getOwnHackathonsServerQueryFn = async (
  cookieHeader: string,
): Promise<BackendHackathon[]> => {
  const res = await HackathonServices.getOwnHackathons(cookieHeader);
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

export const getAllHackathonCategoriesQueryFn = async (): Promise<
  IHackathonCategory[]
> => {
  const category = await HackathonServices.getAllHackathonCategories();

  if (!category) {
    throw new Error("category not found");
  }

  return category.data || [];
};

export const getAllHackathonsQueryFn = async (): Promise<
  THackathonCardItem[]
> => {
  const res = await HackathonServices.getAllHackathons();
  if (!res) {
    throw new Error("get all hackathons not found");
  }

  return res.data || [];
};

//* Submission queries

export const getMySubmissionsServerQueryFn = async (cookie: string) => {
  const res = await SubmissionServices.getMySubmissionsByHackathonId(cookie);

  if (!res) {
    throw new Error("Get my submissions not found");
  }

  return res;
};
