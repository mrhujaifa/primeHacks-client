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

// --- Constants & Styles ---
const STATUS_CONFIG: Record<HackathonStatus, string> = {
  ONGOING:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/15",
  UPCOMING:
    "border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 dark:bg-cyan-500/15",
  DRAFT:
    "border-amber-500/30 bg-amber-500/10 text-amber-600 dark:text-amber-300 dark:bg-amber-500/15",
  COMPLETED:
    "border-slate-500/30 bg-slate-500/10 text-slate-600 dark:text-slate-300 dark:bg-slate-500/15",
  ACTIVE:
    "border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-300 dark:bg-blue-500/15",
  ENDED:
    "border-rose-500/30 bg-rose-500/10 text-rose-600 dark:text-rose-300 dark:bg-rose-500/15",
};

const FALLBACK_BANNER =
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

  const deleteMutation = useMutation({
    mutationFn: (id: string) => HackathonServices.handleDeleteHackathon(id),
    onSuccess: (data) => {
      toast.success(data?.message || "Hackathon deleted");
      queryClient.invalidateQueries({ queryKey: hackathonKeys.myHackathons() });
    },
    onError: (error: any) => {
      const msg = error?.response?.data?.message || "Operation failed";
      toast.error(msg);
    },
  });

  const filteredHackathons = useMemo(() => {
    return hackathons.filter((h) => {
      const matchesSearch =
        h.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        h.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus =
        selectedStatus === "All Status" ||
        h.status === selectedStatus.toUpperCase();
      return matchesSearch && matchesStatus;
    });
  }, [hackathons, searchTerm, selectedStatus]);

  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;

  return (
    <section className="min-h-screen  p-4 transition-colors  sm:p-6 lg:p-8">
      <div className="mx-auto max-w-7xl">
        {/* --- Header Section --- */}
        <header className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] lg:p-10">
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700 dark:bg-cyan-500/10 dark:text-cyan-300">
                <Sparkles className="h-3 w-3" /> Organizer Hub
              </span>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white lg:text-4xl">
                My Hackathons
              </h1>
              <p className="max-w-md text-slate-600 dark:text-slate-400">
                Manage your events, track participants, and review submissions
                in one place.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/dashboard/organizer/hackathons/create"
                  className="flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-cyan-700 dark:bg-cyan-500 dark:hover:bg-cyan-400"
                >
                  <Plus className="h-4 w-4" /> Create New
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 lg:w-80">
              <StatCard
                label="Total"
                value={hackathons.length}
                icon={<Trophy />}
              />
              <StatCard
                label="Active"
                value={hackathons.filter((h) => h.status === "ONGOING").length}
                icon={<Sparkles />}
              />
            </div>
          </div>
        </header>

        {/* --- Filters --- */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by title..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-white/10 dark:bg-slate-900 dark:text-white"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none dark:border-white/10 dark:bg-slate-900 dark:text-white md:w-48"
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option>All Status</option>
            <option>Ongoing</option>
            <option>Upcoming</option>
            <option>Draft</option>
          </select>
        </div>

        {/* --- Grid --- */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredHackathons.map((hackathon) => (
            <HackathonCard
              key={hackathon.id}
              hackathon={hackathon}
              onDelete={() => deleteMutation.mutate(hackathon.id)}
              isDeleting={
                deleteMutation.isPending &&
                deleteMutation.variables === hackathon.id
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Sub-components (Clean & Reusable) ---

function HackathonCard({ hackathon, onDelete, isDeleting }: any) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200  transition-all hover:shadow-xl">
      <div className="relative h-48">
        <img
          src={hackathon.bannerImageUrl || FALLBACK_BANNER}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <span
          className={`absolute right-4 top-4 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${STATUS_CONFIG[hackathon.status as HackathonStatus]}`}
        >
          {hackathon.status}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white line-clamp-1">
          {hackathon.title}
        </h3>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
          {hackathon.shortDescription}
        </p>

        <div className="mt-auto space-y-2 border-t border-slate-100 pt-4 dark:border-white/5">
          <InfoItem
            icon={<CalendarDays className="h-3.5 w-3.5" />}
            text={hackathon.submissionDeadline || "No Deadline"}
          />
          <InfoItem
            icon={<Trophy className="h-3.5 w-3.5" />}
            text={hackathon.prizePoolText || "TBA"}
          />
        </div>

        <div className="mt-6 flex gap-2">
          <Link
            href={`/dashboard/organizer/hackathons/${hackathon.id}/edit`}
            className="flex-1"
          >
            <button className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-100 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-200 dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10">
              <Pencil className="h-4 w-4" /> Edit
            </button>
          </Link>
          <button
            onClick={() => window.confirm("Delete this event?") && onDelete()}
            className="rounded-xl bg-rose-50 p-2.5 text-rose-600 transition hover:bg-rose-100 dark:bg-rose-500/10 dark:text-rose-400 dark:hover:bg-rose-500/20"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}

function StatCard({ label, value, icon }: any) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4 dark:border-white/5 dark:bg-white/5">
      <div className="mb-2 text-cyan-600 dark:text-cyan-400">{icon}</div>
      <p className="text-[10px] uppercase tracking-widest text-slate-500">
        {label}
      </p>
      <p className="text-xl font-bold text-slate-900 dark:text-white">
        {value}
      </p>
    </div>
  );
}

function InfoItem({ icon, text }: any) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
      <span className="text-cyan-500">{icon}</span>
      {text}
    </div>
  );
}

function LoadingState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-500">
      Loading your dashboard...
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950 text-rose-500">
      Something went wrong.
    </div>
  );
}
