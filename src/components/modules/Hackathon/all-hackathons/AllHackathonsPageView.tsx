"use client";

import HackathonsHero from "./HackathonsHero";
import HackathonToolbar from "./HackathonToolbar";
import HackathonGrid from "./HackathonGrid";
import { useQuery } from "@tanstack/react-query";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getAllHackathonsQueryFn } from "@/hooks/hackathon/hackathon.queries-server";

export default function AllHackathonsPageView({}) {
  const { data = [] } = useQuery({
    queryKey: hackathonKeys.allHackthons(),
    queryFn: async () => {
      return await getAllHackathonsQueryFn();
    },
  });

  console.log(data);
  return (
    <section className="container mx-auto relative overflow-hidden">
      <div className="absolute inset-0 " />
      <div className="ph-grid pointer-events-none absolute inset-0 opacity-[0.08]" />

      <div className="mx-auto container space-y-10 py-10">
        <HackathonsHero />

        <div className="space-y-6 rounded-[28px] lg:px-0">
          <HackathonToolbar />

          <HackathonGrid data={data} />
        </div>
      </div>
    </section>
  );
}
