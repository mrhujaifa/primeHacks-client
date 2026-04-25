"use client";

import { useQuery } from "@tanstack/react-query";
import { organizerApplicationKeys } from "./organizer-application.keys";
import { getMyOrganizerApplication } from "../api/organizer-application.api";

export const useMyOrganizerApplicationQuery = () => {
  return useQuery({
    queryKey: organizerApplicationKeys.myApplication(),
    queryFn: getMyOrganizerApplication,
    staleTime: 1000 * 60 * 2,
    retry: 1,
  });
};
