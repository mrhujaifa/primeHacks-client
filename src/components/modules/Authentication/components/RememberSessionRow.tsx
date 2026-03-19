export function RememberSessionRow() {
  return (
    <div className="flex items-center justify-between gap-3 pt-1">
      <label className="inline-flex cursor-pointer items-center gap-3 text-sm text-slate-300">
        <span className="relative flex h-5 w-5 items-center justify-center">
          <input type="checkbox" className="peer sr-only" />
          <span className="h-5 w-5 rounded-md border border-white/15 bg-white/[0.03] transition peer-checked:border-blue-500/60 peer-checked:bg-blue-500/20" />
          <svg
            className="pointer-events-none absolute h-3 w-3 scale-0 text-blue-300 transition peer-checked:scale-100"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        Remember me
      </label>

      <p className="text-xs text-slate-400">Protected session</p>
    </div>
  );
}
