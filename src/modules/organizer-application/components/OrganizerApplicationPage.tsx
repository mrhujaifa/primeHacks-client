"use client";

import {
  Building2,
  Globe,
  Mail,
  Clock,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { useMyOrganizerApplicationQuery } from "../queries/organizer-application.queries.client";

const statusClasses = {
  PENDING:
    "border-orange-200 bg-orange-50/50 text-orange-600 dark:bg-orange-500/10 dark:border-orange-500/20 dark:text-orange-400",
  APPROVED:
    "border-emerald-200 bg-emerald-50/50 text-emerald-600 dark:bg-emerald-500/10 dark:border-emerald-500/20 dark:text-emerald-400",
  REJECTED:
    "border-red-200 bg-red-50/50 text-red-600 dark:bg-red-500/10 dark:border-red-500/20 dark:text-red-400",
};

const OrganizerApplicationHistory = () => {
  const { data, isPending, isLoading, isError, error } =
    useMyOrganizerApplicationQuery();

  const loading = isPending || isLoading;

  if (loading) {
    return (
      <div className="w-full max-w-5xl p-4 md:p-8">
        <div className="mb-10 flex flex-col gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <div className="h-8 w-72 animate-pulse rounded-lg bg-slate-200 dark:bg-slate-800" />
            <div className="h-4 w-96 animate-pulse rounded bg-slate-200 dark:bg-slate-800" />
          </div>
          <div className="h-8 w-28 animate-pulse rounded-full bg-slate-200 dark:bg-slate-800" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-8">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="h-28 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800" />
              <div className="h-28 animate-pulse rounded-2xl bg-slate-200 dark:bg-slate-800" />
            </div>

            <div className="h-40 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
            <div className="h-40 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800" />
          </div>

          <div className="h-72 animate-pulse rounded-3xl bg-slate-200 dark:bg-slate-800 lg:col-span-4" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full max-w-5xl rounded-2xl border border-red-200 bg-red-50 p-6 text-sm font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
        {error?.message || "Failed to load organizer application."}
      </div>
    );
  }

  if (!data || !data.application) {
    return (
      <div className="w-full max-w-5xl rounded-2xl border border-slate-200 p-8 text-center dark:border-slate-800">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          No Organizer Application Found
        </h2>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          You have not submitted any organizer application yet.
        </p>
      </div>
    );
  }

  const { user, application } = data;

  const statusClass =
    statusClasses[
      user.organizerApplicationStatus as keyof typeof statusClasses
    ] ?? statusClasses.PENDING;

  return (
    <div className="w-full max-w-5xl p-4 md:p-8">
      {/* Header Section - No Background */}
      <div className="mb-10 flex flex-col items-start justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Organizer Application
          </h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">
            Reviewing application for {application.organizationName}
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-full border px-4 py-1.5 ${statusClass}`}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
          </span>

          <span className="text-sm font-semibold uppercase tracking-wider">
            {user.organizerApplicationStatus}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Main Content Area */}
        <div className="space-y-8 lg:col-span-8">
          {/* Organization Info */}
          <section>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-slate-100">
              <Building2 size={16} className="text-indigo-500" />
              Core Information
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5 backdrop-blur-sm dark:border-slate-800">
                <label className="mb-1 block text-xs font-medium uppercase text-slate-400">
                  Company/Org Name
                </label>
                <div className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                  {application.organizationName}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5 backdrop-blur-sm dark:border-slate-800">
                <label className="mb-1 block text-xs font-medium uppercase text-slate-400">
                  Hackathon Type
                </label>
                <div className="text-lg font-semibold uppercase text-slate-800 dark:text-slate-200">
                  {application.expectedHackathonType}
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Responses */}
          <section className="space-y-6">
            <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                <FileText size={18} />
                Previous Experience
              </h3>
              <p className="leading-relaxed text-slate-600 italic dark:text-slate-400">
                &quot;{application.previousExperience}&quot;
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                <CheckCircle2 size={18} />
                Mission Statement / Reason
              </h3>
              <p className="leading-relaxed text-slate-600 dark:text-slate-400">
                {application.reason}
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6 lg:col-span-4">
          <div className="rounded-3xl border border-indigo-100 p-6 dark:border-indigo-500/20">
            <h4 className="mb-6 text-xs font-bold uppercase tracking-widest text-slate-400">
              Contact & Links
            </h4>

            <div className="space-y-5">
              <div className="group flex items-center gap-4">
                <div className="rounded-lg border border-slate-200 p-2 transition-all group-hover:bg-indigo-500 group-hover:text-white dark:border-slate-800">
                  <Globe size={18} />
                </div>

                <div className="flex min-w-0 flex-col">
                  <span className="text-[10px] uppercase text-slate-400">
                    Website
                  </span>

                  {application.websiteUrl ? (
                    <a
                      href={application.websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="max-w-[180px] truncate text-sm font-medium text-indigo-600 dark:text-indigo-400"
                    >
                      Official Link
                    </a>
                  ) : (
                    <span className="text-sm text-slate-500">Not provided</span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg border border-slate-200 p-2 dark:border-slate-800">
                  <Mail size={18} className="text-slate-400" />
                </div>

                <div className="flex min-w-0 flex-col">
                  <span className="text-[10px] uppercase text-slate-400">
                    Contact Email
                  </span>
                  <span className="truncate text-sm font-medium text-slate-700 dark:text-slate-300">
                    {application.contactEmail}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-lg border border-slate-200 p-2 dark:border-slate-800">
                  <Clock size={18} className="text-slate-400" />
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] uppercase text-slate-400">
                    Applied Date
                  </span>
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {new Date(application.createdAt).toLocaleDateString(
                      "en-GB",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      },
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-slate-200 p-6 text-center dark:border-slate-800">
            <p className="text-xs text-slate-500">
              This application is currently being reviewed by the PrimeHacks
              board. Response usually takes 2-4 business days.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizerApplicationHistory;
