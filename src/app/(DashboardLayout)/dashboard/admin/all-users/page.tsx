import Allusers from "@/components/modules/admin/Allusers";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { AdminServices } from "@/services/admin.service";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { cookies } from "next/headers";
export const dynamic = "force-dynamic";

const AllUsersPage = async () => {
  const cookie = await cookies();
  const cookieStore = cookie.toString();
  const queryClient = getQueryClient();

  await queryClient.fetchQuery({
    queryKey: ["get-all-users"],
    queryFn: async () => {
      return await AdminServices.getAlluser(cookieStore);
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Allusers />
    </HydrationBoundary>
  );
};

export default AllUsersPage;
