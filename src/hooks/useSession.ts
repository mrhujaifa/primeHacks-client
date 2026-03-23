import { getUserInfo } from "@/services/auth.service";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getUserInfo,
    retry: false,
    staleTime: 1000 * 60 * 5,
  });
};
