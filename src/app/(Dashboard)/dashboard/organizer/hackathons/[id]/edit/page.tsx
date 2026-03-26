import UpdateHackathonPageShell from "@/components/modules/Hackathon/update/UpdateHackathonPageShell";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getHackathonByidServerQureryFn } from "@/hooks/hackathon/hackathon.queries";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const HackathonEditPage = async ({ params }: Props) => {
  const { id } = await params;
  const cookie = await cookies();
  const cookieStore = cookie.toString();

  const queryClinet = getQueryClient();

  await queryClinet.prefetchQuery({
    queryKey: hackathonKeys.details(id),
    queryFn: async () => {
      return await getHackathonByidServerQureryFn(id, cookieStore);
    },
  });

  return (
    <div>
      <HydrationBoundary state={dehydrate(queryClinet)}>
        <UpdateHackathonPageShell hackathonId={id} />
      </HydrationBoundary>
    </div>
  );
};

export default HackathonEditPage;
