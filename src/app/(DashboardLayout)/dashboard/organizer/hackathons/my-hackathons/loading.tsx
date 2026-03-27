function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse rounded-2xl bg-white/10 ${className}`} />
  );
}

function SummaryCardSkeleton() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-md">
      <Skeleton className="mb-3 h-9 w-9 rounded-xl" />
      <Skeleton className="h-3 w-24 rounded-md" />
      <Skeleton className="mt-3 h-7 w-16 rounded-md" />
    </div>
  );
}

function HackathonCardSkeleton() {
  return (
    <article className="overflow-hidden rounded-[26px] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,36,0.96),rgba(7,15,26,0.98))] shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
      <div className="relative h-56 overflow-hidden">
        <Skeleton className="h-full w-full rounded-none" />

        <div className="absolute left-4 top-4">
          <Skeleton className="h-7 w-24 rounded-full" />
        </div>

        <div className="absolute right-4 top-4">
          <Skeleton className="h-7 w-20 rounded-full" />
        </div>

        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Skeleton className="h-6 w-3/4 rounded-md" />
          <Skeleton className="h-5 w-1/2 rounded-md" />
        </div>
      </div>

      <div className="p-5">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
        </div>

        <div className="mt-5 space-y-3">
          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-md" />
            </div>
            <Skeleton className="h-4 w-28 rounded-md" />
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-md" />
            </div>
            <Skeleton className="h-4 w-24 rounded-md" />
          </div>

          <div className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-2.5">
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-4 rounded-full" />
              <Skeleton className="h-4 w-16 rounded-md" />
            </div>
            <Skeleton className="h-4 w-20 rounded-md" />
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <Skeleton className="h-3 w-20 rounded-md" />
            <Skeleton className="mt-3 h-6 w-28 rounded-md" />
          </div>

          <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
            <Skeleton className="h-3 w-16 rounded-md" />
            <Skeleton className="mt-3 h-6 w-14 rounded-md" />
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Skeleton className="h-12 flex-1 rounded-2xl" />
          <Skeleton className="h-12 flex-1 rounded-2xl" />
        </div>
      </div>
    </article>
  );
}

export default function Loading() {
  return (
    <section className="min-h-screen text-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7 lg:p-8">
          <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <Skeleton className="mb-4 h-8 w-44 rounded-full" />
              <Skeleton className="h-10 w-72 rounded-xl" />
              <Skeleton className="mt-4 h-4 w-full max-w-2xl rounded-md" />
              <Skeleton className="mt-2 h-4 w-3/4 rounded-md" />

              <div className="mt-6 flex flex-wrap gap-3">
                <Skeleton className="h-12 w-44 rounded-2xl" />
                <Skeleton className="h-12 w-36 rounded-2xl" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:w-[360px]">
              <SummaryCardSkeleton />
              <SummaryCardSkeleton />
              <SummaryCardSkeleton />
              <SummaryCardSkeleton />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Skeleton className="h-8 w-64 rounded-lg" />
            <Skeleton className="mt-2 h-4 w-52 rounded-md" />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Skeleton className="h-12 w-full rounded-2xl sm:w-[280px]" />
            <Skeleton className="h-12 w-full rounded-2xl sm:w-[180px]" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <HackathonCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
