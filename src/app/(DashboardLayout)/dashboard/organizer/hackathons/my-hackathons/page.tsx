import MyHackathonsPage from "@/components/modules/Hackathon/myHackathons";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getOwnHackathonsServerQueryFn } from "@/hooks/hackathon/hackathon.queries-server";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const MyHackathonPage = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: hackathonKeys.myHackathons(),
    queryFn: () => getOwnHackathonsServerQueryFn(cookieHeader),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MyHackathonsPage />
    </HydrationBoundary>
  );
};

export default MyHackathonPage;
