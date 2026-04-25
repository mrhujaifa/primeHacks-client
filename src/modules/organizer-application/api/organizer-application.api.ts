import { httpClient } from "@/lib/Axios/axios";
import type { TMyOrganizerApplicationResponse } from "../types/organizer-application.types";

export const getMyOrganizerApplication =
  async (): Promise<TMyOrganizerApplicationResponse> => {
    const res = await httpClient.get<TMyOrganizerApplicationResponse>(
      "/organizerApplication/me",
    );

    if (!res.success) {
      throw new Error(res.message || "Failed to fetch organizer application");
    }
    return res.data;
  };
