"use client";

import { THackathonCardItem } from "@/services/hackathon.service";

import { useQuery } from "@tanstack/react-query";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import HackathonBanner from "./components/HackathonBanner";
import HackathonHeader from "./components/HackathonHeader";
import HackathonDetailsContent from "./components/HackathonDetailsContent";
import HackathonSidebar from "./components/HackathonDetailsSidebar";
import { getHackathonByidClientQureryFn } from "@/hooks/hackathon/hackathon.queries.client";

export type SharedProps = {
  hackathon: THackathonCardItem;
  hackathonId?: string;
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
      className: "border-success/25 bg-success/12 text-success",
    };
  }
  if (value === "extended" || value === "extended_deadline") {
    return {
      label: "Extended",
      className:
        "border-hero-tertiary/25 bg-hero-tertiary/12 text-hero-tertiary",
    };
  }
  if (value === "upcoming" || value === "published" || value === "draft") {
    return {
      label: "Upcoming",
      className: "border-primary/25 bg-primary/12 text-primary",
    };
  }
  return {
    label: status || "Open",
    className: "border-border/70 bg-card/70 text-foreground",
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(86,186,255,0.08),transparent_24%),linear-gradient(180deg,rgba(4,8,20,0.06)_0%,rgba(7,11,28,0.16)_45%,rgba(2,6,23,0.08)_100%)]" />
        <div className="ph-grid absolute inset-0 opacity-[0.08]" />
        <div className="relative container mx-auto mt-15 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="card-theme rounded-[28px] p-8 text-center text-muted">
            Loading hackathon details...
          </div>
        </div>
      </section>
    );
  }

  if (isError || !hackathon) {
    return (
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.08),transparent_22%),radial-gradient(circle_at_top_right,rgba(86,186,255,0.08),transparent_24%),linear-gradient(180deg,rgba(4,8,20,0.06)_0%,rgba(7,11,28,0.16)_45%,rgba(2,6,23,0.08)_100%)]" />
        <div className="ph-grid absolute inset-0 opacity-[0.08]" />
        <div className="relative container mx-auto mt-15 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
          <div className="card-theme rounded-[28px] border-destructive/25 p-8 text-center text-muted">
            Unable to load hackathon details.
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className=" relative overflow-hidden">
      <div className="absolute " />
      <div className="ph-grid absolute " />

      <div className="relative container mx-auto mt-15 px-4 py-8 ">
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1.55fr)_380px]">
          <div className="space-y-6">
            <HackathonBanner hackathon={hackathon} />
            <HackathonHeader hackathon={hackathon} />
            <HackathonDetailsContent hackathon={hackathon} />
          </div>

          <HackathonSidebar hackathon={hackathon} hackathonId={hackathonId} />
        </div>
      </div>
    </section>
  );
}
