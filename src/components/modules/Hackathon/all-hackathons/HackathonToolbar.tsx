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
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore Hackathons
            <span className="ml-2 text-base font-medium text-muted">
              ({totalCount})
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative min-w-[240px] flex-1 sm:min-w-[320px]">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <div className="input-theme flex h-12 items-center pl-11 pr-4 text-sm text-muted">
              Hackathon Search
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="inline-flex h-12 items-center gap-2 rounded-2xl border border-primary/20 bg-primary/10 px-4 text-sm font-semibold text-primary"
            >
              <Grid3X3 className="h-4 w-4" />
              Grid
            </button>

            <button
              type="button"
              className="btn-theme-outline h-12 rounded-2xl px-4 text-sm"
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
            className="btn-theme-outline h-11 rounded-2xl px-4 text-sm"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </button>

          <button
            type="button"
            className="btn-theme-outline h-11 rounded-2xl px-4 text-sm"
          >
            Status
            <ChevronDown className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="btn-theme-outline h-11 rounded-2xl px-4 text-sm"
          >
            Location
            <ChevronDown className="h-4 w-4" />
          </button>

          <button
            type="button"
            className="btn-theme-outline h-11 rounded-2xl px-4 text-sm"
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
                className="inline-flex h-10 items-center rounded-full border border-border/70 bg-card/70 px-4 text-sm font-medium text-muted transition-all duration-200 hover:border-primary/20 hover:bg-primary/10 hover:text-primary"
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
