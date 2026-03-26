import { HackathonServices } from "@/services/hackathon.service";

export const updateHackathonMutationFn = async ({
  id,
  payload,
}: {
  id: string;
  payload: Record<string, unknown>;
}) => {
  return await HackathonServices.updateHackathon(id, payload);
};
