import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { HackathonServices } from "@/services/hackathon.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useDeleteHackathon = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (hackathonId: string) => {
      if (!hackathonId) {
        throw new Error("Hackathon id is required");
      }

      return await HackathonServices.handleDeleteHackathon(hackathonId);
    },
    onSuccess: async (data) => {
      toast.success(data?.message || "Hackathon deleted successfully");

      await queryClient.invalidateQueries({
        queryKey: hackathonKeys.myHackathons,
      });
    },
    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Failed to delete hackathon",
      );
    },
    retry: 0,
  });
};
