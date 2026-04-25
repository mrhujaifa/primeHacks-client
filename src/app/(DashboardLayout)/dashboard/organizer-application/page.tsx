import { getQueryClient } from "@/lib/Tanstack/queryClient";
import OrganizerApplicationHistory from "@/modules/organizer-application/components/OrganizerApplicationPage";
import { organizerApplicationServerQueries } from "@/modules/organizer-application/queries/organizer-application.queries.server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const OrganizerApplicationPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(
    organizerApplicationServerQueries.myApplication(),
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <OrganizerApplicationHistory />
    </HydrationBoundary>
  );
};

export default OrganizerApplicationPage;
