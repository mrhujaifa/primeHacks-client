import React from "react";

export default function HackathonDetailsSkeleton() {
  return (
    <main className="min-h-screen bg-[#050816] px-4 py-8 text-white sm:px-6 lg:px-10 pt-29">
      <div className="mx-auto grid container gap-8 lg:grid-cols-[1fr_380px]">
        {/* Left Content */}
        <section className="space-y-8">
          {/* Hero Card Skeleton */}
          <div className="relative min-h-[420px] overflow-hidden rounded-[28px] border border-white/10 bg-[#080d22]/80 p-6 shadow-2xl shadow-purple-950/20">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-cyan-500/5" />

            <div className="relative z-10 flex gap-2">
              <div className="h-7 w-24 animate-pulse rounded-full bg-white/10" />
              <div className="h-7 w-24 animate-pulse rounded-full bg-white/10" />
            </div>

            <div className="relative z-10 flex h-[280px] items-center justify-center">
              <div className="h-12 w-64 animate-pulse rounded-xl bg-white/10" />
            </div>

            <div className="relative z-10 flex items-center gap-4">
              <div className="h-14 w-14 animate-pulse rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="h-4 w-24 animate-pulse rounded bg-white/10" />
                <div className="h-5 w-40 animate-pulse rounded bg-white/15" />
              </div>
            </div>

            <div className="absolute bottom-8 right-8 h-10 w-40 animate-pulse rounded-full bg-white/10" />
          </div>

          {/* Title Skeleton */}
          <div className="space-y-4">
            <div className="h-12 w-72 animate-pulse rounded-xl bg-white/10" />
            <div className="h-5 w-48 animate-pulse rounded bg-white/10" />
          </div>

          {/* Info Cards */}
          <div className="grid gap-4 md:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-[#0b1027]/80 p-5"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 animate-pulse rounded-2xl bg-white/10" />
                  <div className="space-y-2">
                    <div className="h-3 w-24 animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-28 animate-pulse rounded bg-white/15" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Overview */}
          <div className="rounded-2xl border border-white/10 bg-[#0b1027]/80 p-6">
            <div className="mb-6 h-5 w-32 animate-pulse rounded bg-white/10" />

            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
              <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-10/12 animate-pulse rounded bg-white/10" />
              <div className="h-4 w-8/12 animate-pulse rounded bg-white/10" />
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="space-y-5 rounded-[28px] border border-white/10 bg-[#0b1027]/90 p-6 shadow-2xl shadow-purple-950/20 lg:sticky lg:top-8 lg:h-fit">
          {/* Prize Pool */}
          <div className="space-y-3 border-b border-white/10 pb-6">
            <div className="h-4 w-32 animate-pulse rounded bg-white/10" />
            <div className="h-10 w-40 animate-pulse rounded bg-white/15" />
          </div>

          {/* Timeline */}
          <div className="space-y-4 border-b border-white/10 pb-6">
            <div className="h-4 w-36 animate-pulse rounded bg-white/10" />
            <div className="h-8 w-40 animate-pulse rounded-full bg-white/10" />

            {Array.from({ length: 2 }).map((_, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
              >
                <div className="flex justify-between gap-4">
                  <div className="space-y-2">
                    <div className="h-4 w-24 animate-pulse rounded bg-white/15" />
                    <div className="h-3 w-20 animate-pulse rounded bg-white/10" />
                  </div>
                  <div className="h-4 w-28 animate-pulse rounded bg-white/10" />
                </div>
              </div>
            ))}
          </div>

          {/* Meta Info */}
          <div className="space-y-5 border-b border-white/10 pb-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="space-y-2">
                <div className="h-4 w-36 animate-pulse rounded bg-white/10" />
                <div className="h-4 w-28 animate-pulse rounded bg-white/15" />
              </div>
            ))}
          </div>

          {/* Organizer Card */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 animate-pulse rounded-full bg-white/10" />
              <div className="space-y-2">
                <div className="h-4 w-28 animate-pulse rounded bg-white/15" />
                <div className="h-3 w-40 animate-pulse rounded bg-white/10" />
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <div className="h-12 w-full animate-pulse rounded-2xl bg-gradient-to-r from-purple-500/30 to-cyan-400/30" />
            <div className="h-12 w-full animate-pulse rounded-2xl bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="h-12 animate-pulse rounded-2xl bg-white/10" />
            <div className="h-12 animate-pulse rounded-2xl bg-white/10" />
          </div>
        </aside>
      </div>
    </main>
  );
}
