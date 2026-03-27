import AllHackathonsPageView from "@/components/modules/Hackathon/all-hackathons/AllHackathonsPageView";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getAllHackathonCategoriesQueryFn } from "@/hooks/hackathon/hackathon.queries";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

const AllHackathonsPage = async () => {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: hackathonKeys.all,
    queryFn: async () => {
      return await getAllHackathonCategoriesQueryFn();
    },
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AllHackathonsPageView />
      </HydrationBoundary>
    </div>
  );
};

export default AllHackathonsPage;
