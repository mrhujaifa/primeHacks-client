// src/modules/organizer-application/api/organizer-application.server.ts

"use server";

import { cookies } from "next/headers";
import { httpClient } from "@/lib/Axios/axios";

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
    console.error("Failed to fetch organizer application:", error);
    return null;
  }
};
