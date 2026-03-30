import Mysubmission from "@/components/modules/Hackathon/submission-hackathon/MysubmissionPage";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getMySubmissionsServerQueryFn } from "@/hooks/hackathon/hackathon.queries-server";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const MySubmissionPage = async () => {
  const cookie = (await cookies()).toString();
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: hackathonKeys.mySubmissions(),
    queryFn: async () => {
      return await getMySubmissionsServerQueryFn(cookie);
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Mysubmission />
    </HydrationBoundary>
  );
};

export default MySubmissionPage;
