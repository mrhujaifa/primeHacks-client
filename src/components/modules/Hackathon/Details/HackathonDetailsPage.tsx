"use client";

import { THackathonCardItem } from "@/services/hackathon.service";
import HackathonBanner from "./components/HackathonBanner";
import HackathonHeader from "./components/HackathonHeader";
import HackathonDetailsContent from "./components/HackathonDetailsContent";
import HackathonSidebar from "./components/HackathonDetailsSidebar";
import { useQuery } from "@tanstack/react-query";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getHackathonByidClientQureryFn } from "@/hooks/hackathon/hackathon.queries";

export type SharedProps = {
  hackathon: THackathonCardItem;
};

export const formatDisplayDate = (value?: string | null) => {
  if (!value) return "TBA";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "TBA";
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

export const getDaysLeft = (
  deadline?: string | null,
  label?: string | null,
) => {
  if (label) return label;
  if (!deadline) return "Deadline not announced";
  const now = new Date().getTime();
  const end = new Date(deadline).getTime();
  if (Number.isNaN(end)) return "Deadline not announced";
  const diff = end - now;
  const day = 1000 * 60 * 60 * 24;
  if (diff <= 0) return "Submission closed";
  const days = Math.ceil(diff / day);
  return `${days} days left for submission`;
};

export const normalizeStatus = (status?: string) => {
  const value = status?.toLowerCase();
  if (value === "ongoing" || value === "active" || value === "live") {
    return {
      label: "Ongoing",
      className: "border-emerald-400/25 bg-emerald-500/12 text-emerald-300",
    };
  }
  if (value === "extended" || value === "extended_deadline") {
    return {
      label: "Extended",
      className: "border-orange-400/25 bg-orange-500/12 text-orange-300",
    };
  }
  if (value === "upcoming" || value === "published" || value === "draft") {
    return {
      label: "Upcoming",
      className: "border-cyan-400/25 bg-cyan-500/12 text-cyan-300",
    };
  }
  return {
    label: status || "Open",
    className: "border-white/10 bg-white/5 text-slate-200",
  };
};

type HackathonDetailsPageProps = {
  hackathonId: string;
};

export default function HackathonDetailsPage({
  hackathonId,
}: HackathonDetailsPageProps) {
  const {
    data: hackathon,
    isLoading,
    isError,
  } = useQuery<THackathonCardItem>({
    queryKey: hackathonKeys.details(hackathonId),
    queryFn: async (): Promise<THackathonCardItem> => {
      return await getHackathonByidClientQureryFn(hackathonId);
    },
  });

  if (isLoading) {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_24%),linear-gradient(180deg,#030712_0%,#07111f_45%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mt-15">
          <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center text-slate-300 backdrop-blur-xl">
            Loading hackathon details...
          </div>
        </div>
      </section>
    );
  }

  if (isError || !hackathon) {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_24%),linear-gradient(180deg,#030712_0%,#07111f_45%,#020617_100%)]" />
        <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />
        <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mt-15">
          <div className="rounded-[28px] border border-rose-500/20 bg-white/[0.03] p-8 text-center text-slate-300 backdrop-blur-xl">
            Unable to load hackathon details.
          </div>
        </div>
      </section>
    );
  }

  const daysLeftText = getDaysLeft(
    hackathon.submissionDeadline,
    hackathon.daysLeftLabel,
  );

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(249,115,22,0.08),transparent_24%),linear-gradient(180deg,#030712_0%,#07111f_45%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative container mx-auto px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mt-15">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.55fr)_380px]">
          <div className="space-y-6">
            <HackathonBanner hackathon={hackathon} />
            <HackathonHeader hackathon={hackathon} />
            <HackathonDetailsContent hackathon={hackathon} />
          </div>

          <HackathonSidebar hackathon={hackathon} />
        </div>
      </div>
    </section>
  );
}
