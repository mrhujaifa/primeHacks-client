"use client";

import {
  getAllHackathonCategoriesQueryFn,
  getHackathonByidClientQureryFn,
} from "@/hooks/hackathon/hackathon.queries";
import { useQuery } from "@tanstack/react-query";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import UpdateHackathonHero from "./UpdateHackathonHero";
import UpdateHackathonFormUI from "./UpdateHackathonForm";

export default function UpdateHackathonPageShell({
  hackathonId,
}: {
  hackathonId: string;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: hackathonKeys.details(hackathonId),
    queryFn: () => getHackathonByidClientQureryFn(hackathonId),
  });

  const { data: category = [] } = useQuery({
    queryKey: hackathonKeys.categories(),
    queryFn: () => getAllHackathonCategoriesQueryFn(),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_24%),linear-gradient(180deg,#06131c_0%,#071a24_35%,#0b1220_100%)] px-4 py-10">
        <div className="mx-auto max-w-7xl animate-pulse space-y-6">
          <div className="h-36 rounded-[32px] border border-white/10 bg-white/5" />
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="h-[680px] rounded-[32px] border border-white/10 bg-white/5" />
            <div className="h-[680px] rounded-[32px] border border-white/10 bg-white/5" />
          </div>
        </div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-xl rounded-[32px] border border-rose-500/20 bg-white/5 p-8 text-center backdrop-blur-xl">
          <h2 className="text-2xl font-semibold text-white">
            Unable to load hackathon
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Something went wrong while fetching update data.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.15),transparent_22%),radial-gradient(circle_at_85%_10%,rgba(59,130,246,0.16),transparent_18%),linear-gradient(180deg,#07111a_0%,#081520_40%,#0b1220_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <UpdateHackathonHero hackathon={data} />
        <UpdateHackathonFormUI
          hackathonId={hackathonId}
          hackathon={data}
          categories={category}
        />
      </div>
    </section>
  );
}
