/* eslint-disable @typescript-eslint/no-explicit-any */
import { httpClient } from "@/lib/Axios/axios";
import {
  ICreateSubmissionPayload,
  IMySubmission,
} from "@/types/submission.type";
// import { headers } from "next/headers";

const BASE_API_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const createSubmission = async (
  hackathonId: string,
  payload: ICreateSubmissionPayload,
) => {
  const res = await fetch(
    `${BASE_API_URL}/submission/hackathon/${hackathonId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    },
  );

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    throw new Error(
      data?.message || "Something went wrong while creating submission",
    );
  }

  return data;
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
  createSubmission,
  getMySubmissionsByHackathonId,
};

//  `/submission/hackathon/${hackathonId}`,
