/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "@/lib/Axios/axios";
import {
  ICreateSubmissionPayload,
  IMySubmission,
} from "@/types/submission.type";

const createSubmisson = async (
  hackathonId: string,
  payload: ICreateSubmissionPayload,
) => {
  try {
    const res = await httpClient.post(
      `/submission/hackathon/${hackathonId}`,
      payload,
    );

    if (!res.success) {
      throw new Error(res.message || "Submission create failed!");
    }

    return res.data;
  } catch (error: any) {
    console.log("submission service error:", error);
    throw error;
  }
};
// * Get My Submissions by Hackathon ID

const getMySubmissionsByHackathonId = async (cookieHeader?: string) => {
  try {
    const res = await httpClient.get<IMySubmission[]>(
      "/submission/my-submission",
      {
        headers: cookieHeader
          ? {
              Cookie: cookieHeader,
            }
          : undefined,
      },
    );

    if (!res.success) {
      throw new Error("my submission data fetched faild");
    }

    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const SubmissionServices = {
  createSubmisson,
  getMySubmissionsByHackathonId,
};
