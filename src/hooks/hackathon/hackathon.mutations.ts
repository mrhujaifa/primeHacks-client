import { HackathonServices } from "@/services/hackathon.service";
import { SubmissionServices } from "@/services/submission.service";
import { ICreateSubmissionPayload } from "@/types/submission.type";

//* Update  submission mutation fn
export const updateHackathonMutationFn = async ({
  id,
  payload,
}: {
  id: string;
  payload: Record<string, unknown>;
}) => {
  return await HackathonServices.updateHackathon(id, payload);
};

//* create  submission mutation fn
export const createSubmissionMutationFn = async (
  hackathonId: string,
  payload: ICreateSubmissionPayload,
) => {
  const res = await SubmissionServices.createSubmisson(hackathonId, payload);

  return res;
};
