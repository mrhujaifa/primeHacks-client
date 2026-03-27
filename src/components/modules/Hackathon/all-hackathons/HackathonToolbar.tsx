import { THackathonFilterChip } from "@/services/hackathon.service";
import { Grid3X3, List, Search, ChevronDown, ArrowUpDown } from "lucide-react";

type HackathonToolbarProps = {
  totalCount?: number;
  quickFilters?: THackathonFilterChip[];
};

export default function HackathonToolbar({
  totalCount = 0,
  quickFilters = [],
}: HackathonToolbarProps) {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Explore Hackathons
            <span className="ml-2 text-base font-medium text-slate-400">
              ({totalCount})
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-[240px] flex-1 sm:min-w-[320px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
            <div className="h-12 w-full rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.86),rgba(2,6,23,0.86))] pl-11 pr-4 text-sm text-slate-400 flex items-center">
              Hackathon Search
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 text-sm font-semibold text-cyan-200"
            >
              <Grid3X3 className="h-4 w-4" />
              Grid
            </button>

            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-semibold text-slate-300"
            >
              <List className="h-4 w-4" />
              List
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </button>

          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200"
          >
            Status
            <ChevronDown className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200"
          >
            Location
            <ChevronDown className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200"
          >
            Category
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>

        {quickFilters.length ? (
          <div className="flex flex-wrap items-center gap-3">
            {quickFilters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                className="inline-flex h-10 items-center rounded-full border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-200"
              >
                {filter.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
