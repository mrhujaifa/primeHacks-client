// src/modules/organizer-application/api/organizer-application.server.ts

"use server";

import { cookies } from "next/headers";
import { httpClient } from "@/lib/Axios/axios";
import { isDynamicServerUsageError } from "@/lib/utils/nextErrorUtils";

export const getMyOrganizerApplication = async () => {
  try {
    const cookieStore = await cookies();

    const res = await httpClient.get("/organizerApplication/me", {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return res.data;
  } catch (error) {
    if (isDynamicServerUsageError(error)) {
      return null;
    }

    console.error("Failed to fetch organizer application:", error);
    return null;
  }
};
