import { httpClient } from "@/lib/Axios/axios";
import {
  ICreateSubmissionPayload,
  IMySubmission,
} from "@/types/submission.type";

const createSubmission = async (
  hackathonId: string,
  payload: ICreateSubmissionPayload,
) => {
  return await httpClient.post(`/submission/hackathon/${hackathonId}`, payload);
};

// * Get My Submissions
const getMySubmissionsByHackathonId = async (): Promise<IMySubmission[]> => {
  try {
    const res = await httpClient.get<IMySubmission[]>(
      "/submission/my-submission",
    );

    if (!res.success) {
      throw new Error(res.message || "My submission data fetch failed");
    }

    return res.data || [];
  } catch (error: any) {
    console.log("getMySubmissionsByHackathonId error:", error);
    throw new Error(
      error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch my submissions",
    );
  }
};

export const SubmissionServices = {
  createSubmission,
  getMySubmissionsByHackathonId,
};
