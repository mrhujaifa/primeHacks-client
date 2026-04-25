import { queryOptions } from "@tanstack/react-query";
import { getMyOrganizerApplication } from "../api/organizer-application.server";
import { organizerApplicationKeys } from "./organizer-application.keys";

export const organizerApplicationServerQueries = {
  myApplication: () =>
    queryOptions({
      queryKey: organizerApplicationKeys.myApplication(),
      queryFn: getMyOrganizerApplication,
      staleTime: 1000 * 60 * 2,
    }),
};
