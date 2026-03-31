import { AdminServices } from "@/services/admin.service";
import { HackathonServices } from "@/services/hackathon.service";
import { SubmissionServices } from "@/services/submission.service";
import { BackendHackathon } from "@/types/hackathon.types";

export const getOwnHackathonsClientQueryFn = async (): Promise<
  BackendHackathon[]
> => {
  const res = await HackathonServices.getOwnHackathons();

  return res.data || [];
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

export const getMySubmissionsClientQueryFn = async () => {
  const res = await SubmissionServices.getMySubmissionsByHackathonId();

  if (!res) {
    throw new Error("Get my submissions not found");
  }

  return res;
};

export const getAllUserClientQueryFn = async () => {
  const res = await AdminServices.getAlluser();

  if (!res) {
    throw new Error("All user not found");
  }

  return res;
};
