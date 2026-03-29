/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "@/lib/Axios/axios";
import { ICreateSubmissionPayload } from "@/types/submission.type";

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

export const SubmissionServices = {
  createSubmisson,
};
