
type Props = {
  hackathon: any;
};

export default function UpdateHackathonHero({ hackathon }: Props) {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,27,0.92),rgba(10,24,36,0.88))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_20%)]" />
      <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <span className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium tracking-[0.24em] text-cyan-300 uppercase">
            Update Hackathon
          </span>

          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              {hackathon.title}
            </h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
              Refine content, timeline, visibility, and event details without
              breaking your organizer workflow.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-400">Status</p>
            <p className="mt-1 text-sm font-medium text-white">
              {hackathon.status}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-400">Currency</p>
            <p className="mt-1 text-sm font-medium text-white">
              {hackathon.currency}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs text-slate-400">Premium</p>
            <p className="mt-1 text-sm font-medium text-white">
              {hackathon.isPremiumOnly ? "Yes" : "No"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
