/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import {
  CalendarDays,
  Pencil,
  Plus,
  Search,
  Sparkles,
  Trash2,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { BackendHackathon, HackathonStatus } from "@/types/hackathon.types";
import { HackathonServices } from "@/services/hackathon.service";
import { getOwnHackathonsClientQueryFn } from "@/hooks/hackathon/hackathon.queries.client";

const statusStyles: Record<HackathonStatus, string> = {
  ONGOING:
    "border-emerald-400/30 bg-emerald-500/15 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.15)]",
  UPCOMING:
    "border-cyan-400/30 bg-cyan-500/15 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.15)]",
  DRAFT:
    "border-amber-400/30 bg-amber-500/15 text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.15)]",
  COMPLETED:
    "border-slate-500/30 bg-slate-500/15 text-slate-300 shadow-[0_0_20px_rgba(100,116,139,0.12)]",
  ACTIVE:
    "border-slate-500/30 bg-slate-500/15 text-slate-300 shadow-[0_0_20px_rgba(100,116,139,0.12)]",
  ENDED:
    "border-slate-500/30 bg-slate-500/15 text-slate-300 shadow-[0_0_20px_rgba(100,116,139,0.12)]",
};

const fallbackBanner =
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop";

export default function MyHackathonsPage() {
  const queryClient = useQueryClient();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All Status");

  const {
    data: hackathons = [],
    isLoading,
    isError,
  } = useQuery<BackendHackathon[]>({
    queryKey: hackathonKeys.myHackathons(),
    queryFn: getOwnHackathonsClientQueryFn,
  });

  const deleteHackathonMutation = useMutation({
    mutationFn: async (hackathonId: string) => {
      if (!hackathonId) {
        throw new Error("Hackathon id is required");
      }

      return await HackathonServices.handleDeleteHackathon(hackathonId);
    },

    onSuccess: async (data) => {
      toast.success(data?.message || "Hackathon deleted successfully");

      await queryClient.invalidateQueries({
        queryKey: hackathonKeys.myHackathons(),
      });
    },

    onError: (error: any) => {
      let message = "Something went wrong. Please try again.";

      if (error?.response?.data?.message) {
        message = error.response.data.message;
      } else if (error?.code === "ERR_NETWORK") {
        message = "Network error. Please check your internet connection.";
      } else if (error?.response?.status === 401) {
        message = "You are not authorized. Please sign in again.";
      } else if (error?.response?.status === 403) {
        message = "You do not have permission to perform this action.";
      } else if (error?.response?.status === 404) {
        message = "Requested resource was not found.";
      } else if (error?.response?.status === 500) {
        message = "Server error. Please try again later.";
      }

      toast.error(message);
    },

    retry: 0,
  });

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((hackathon) => {
      const matchesSearch =
        hackathon.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hackathon.shortDescription
          .toLowerCase()
          .includes(searchTerm.toLowerCase());

      const matchesStatus =
        selectedStatus === "All Status" ||
        hackathon.status === selectedStatus.toUpperCase();

      return matchesSearch && matchesStatus;
    });
  }, [hackathons, searchTerm, selectedStatus]);

  const totalHackathons = hackathons.length;
  const activeHackathons = hackathons.filter(
    (item) => item.status === "ONGOING" || item.status === "UPCOMING",
  ).length;

  if (isLoading) {
    return (
      <section className="min-h-screen text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="rounded-[26px] border border-white/10 bg-white/[0.04] p-10 text-center text-slate-400">
            Loading hackathons...
          </div>
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="min-h-screen text-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
          <div className="rounded-[26px] border border-rose-500/20 bg-rose-500/10 p-10 text-center text-rose-300">
            Failed to load hackathons
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium tracking-wide text-cyan-300">
                <Sparkles className="h-3.5 w-3.5" />
                Manage your organized hackathons
              </div>

              <h1 className="text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                My Hackathons
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                Track, manage, and update all your hackathons from one
                dashboard.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/dashboard/organizer/hackathons/create">
                  <button className="inline-flex items-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#67e8f9_0%,#22d3ee_30%,#3b82f6_100%)] px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_10px_40px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]">
                    <Plus className="h-4 w-4" />
                    Create Hackathon
                  </button>
                </Link>

                <button className="rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/[0.07]">
                  View Analytics
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[360px]">
              <SummaryCard
                label="Total Events"
                value={String(totalHackathons)}
                icon={<Trophy className="h-4 w-4" />}
              />
              <SummaryCard
                label="Active Now"
                value={String(activeHackathons)}
                icon={<Sparkles className="h-4 w-4" />}
              />
              <SummaryCard
                label="Participants"
                value="--"
                icon={<Users className="h-4 w-4" />}
              />
              <SummaryCard
                label="Submissions"
                value="--"
                icon={<CalendarDays className="h-4 w-4" />}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white sm:text-2xl">
              Explore Your Hackathons
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Total {filteredHackathons.length} hackathons managed by you
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search hackathon"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-cyan-400/40 focus:bg-slate-950/70 sm:w-[280px]"
              />
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="h-12 rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-slate-200 outline-none transition focus:border-cyan-400/40"
            >
              <option>All Status</option>
              <option>Ongoing</option>
              <option>Upcoming</option>
              <option>Draft</option>
              <option>Completed</option>
            </select>
          </div>
        </div>

        {filteredHackathons.length === 0 ? (
          <div className="mt-6 rounded-[26px] border border-dashed border-white/10 bg-white/[0.03] p-10 text-center text-slate-400">
            No hackathons found
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredHackathons.map((hackathon) => (
              <article
                key={hackathon.id}
                className="group overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,36,0.96),rgba(7,15,26,0.98))] shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:shadow-[0_24px_80px_rgba(8,145,178,0.16)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={hackathon.bannerImageUrl || fallbackBanner}
                    alt={hackathon.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.16)_35%,rgba(2,6,23,0.72)_100%)]" />

                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/10 bg-black/35 px-3 py-1 text-xs font-medium text-slate-100 backdrop-blur-md">
                    {hackathon.category?.name || "General"}
                  </div>

                  <div
                    className={`absolute right-4 top-4 inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[hackathon.status]}`}
                  >
                    {hackathon.status}
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="line-clamp-2 text-xl font-semibold leading-snug text-white">
                      {hackathon.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5">
                  <p className="line-clamp-2 text-sm leading-6 text-slate-300">
                    {hackathon.shortDescription}
                  </p>

                  <div className="mt-5 space-y-3">
                    <InfoRow
                      icon={<CalendarDays className="h-4 w-4" />}
                      label="Deadline"
                      value={hackathon.submissionDeadline || "Not set"}
                    />
                    <InfoRow
                      icon={<Users className="h-4 w-4" />}
                      label="Team Size"
                      value={
                        hackathon.maxTeamSize
                          ? `${hackathon.maxTeamSize} members`
                          : "Not set"
                      }
                    />
                    <InfoRow
                      icon={<Trophy className="h-4 w-4" />}
                      label="Fee"
                      value={`${hackathon.registrationFee} ${hackathon.currency}`}
                    />
                  </div>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Prize Pool
                      </p>
                      <p className="mt-2 text-lg font-bold text-cyan-300">
                        {hackathon.prizePoolText || "Not declared"}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Featured
                      </p>
                      <p className="mt-2 text-lg font-bold text-white">
                        {hackathon.isFeatured ? "Yes" : "No"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-3">
                    <Link
                      href={`/dashboard/organizer/hackathons/${hackathon.id}/edit`}
                    >
                      <button className="flex-1 rounded-2xl bg-[linear-gradient(135deg,rgba(103,232,249,0.95),rgba(59,130,246,0.95))] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(34,211,238,0.22)] transition hover:scale-[1.01]">
                        <span className="inline-flex items-center gap-2">
                          <Pencil className="h-4 w-4" />
                          Update
                        </span>
                      </button>
                    </Link>

                    <button
                      type="button"
                      onClick={() => {
                        const shouldDelete = window.confirm(
                          "Are you sure you want to delete this hackathon?",
                        );

                        if (!shouldDelete) return;

                        deleteHackathonMutation.mutate(hackathon.id);
                      }}
                      disabled={
                        deleteHackathonMutation.isPending &&
                        deleteHackathonMutation.variables === hackathon.id
                      }
                      className="flex-1 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300 transition hover:border-rose-400/35 hover:bg-rose-500/15 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      <span className="inline-flex items-center gap-2">
                        <Trash2 className="h-4 w-4" />
                        {deleteHackathonMutation.isPending &&
                        deleteHackathonMutation.variables === hackathon.id
                          ? "Deleting..."
                          : "Delete"}
                      </span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function SummaryCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
      <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
        {icon}
      </div>
      <p className="text-xs uppercase tracking-[0.16em] text-slate-500">
        {label}
      </p>
      <p className="mt-2 text-xl font-bold text-white">{value}</p>
    </div>
  );
}

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-2.5">
      <div className="flex min-w-0 items-center gap-2 text-slate-400">
        <span className="text-cyan-300">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      <span className="truncate text-sm font-medium text-slate-200">
        {value}
      </span>
    </div>
  );
}
