import { httpClient } from "@/lib/Axios/axios";
import { TCreateOrganizerApplicationPayload } from "@/types/organizerApplication.type";

const createOrganizerApplication = async (
  payload: TCreateOrganizerApplicationPayload,
) => {
  const res = await httpClient.post("/organizerApplication", payload);

  if (!res.success) {
    throw new Error(res.message || "Failed to submit the application");
  }

  return res.data;
};

export const organizerApplicationService = {
  createOrganizerApplication,
};
