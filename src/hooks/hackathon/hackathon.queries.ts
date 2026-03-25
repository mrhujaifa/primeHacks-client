import { HackathonServices } from "@/services/hackathon.service";
import { BackendHackathon } from "@/types/hackathon.types";

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
