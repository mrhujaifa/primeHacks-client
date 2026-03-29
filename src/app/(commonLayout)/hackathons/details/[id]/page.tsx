import HackathonDetailsPage from "@/components/modules/Hackathon/hackathon-details/HackathonDetailsPage";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getHackathonByidServerQureryFn } from "@/hooks/hackathon/hackathon.queries";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cookies } from "next/headers";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const HackathonDeatilsPage = async ({ params }: Props) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const cookie = cookieStore.toString();
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: hackathonKeys.details(id),
    queryFn: async () => {
      return await getHackathonByidServerQureryFn(id, cookie);
    },
  });
  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <HackathonDetailsPage hackathonId={id} />
      </HydrationBoundary>
    </div>
  );
};

export default HackathonDeatilsPage;
