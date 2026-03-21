import {
  Activity,
  ShieldCheck,
  Sparkles,
  Trophy,
  UsersRound,
} from "lucide-react";

const highlights = [
  { label: "Active workspaces", value: "120+", icon: Activity },
  { label: "Event confidence", value: "99.9%", icon: ShieldCheck },
  { label: "Teams onboarded", value: "8.4k", icon: UsersRound },
];

export default function LeftPanel() {
  return (
    <div className="relative hidden overflow-hidden lg:flex lg: pt-60">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(103,232,249,0.18),transparent_26%),radial-gradient(circle_at_80%_10%,rgba(245,158,11,0.16),transparent_20%),linear-gradient(180deg,#071521_0%,#06111a_46%,#081a25_100%)]" />
      <div className="ph-grid absolute inset-0 opacity-35" />
      <div className="absolute inset-y-16 left-10 w-32 rounded-full bg-cyan-300/10 blur-3xl" />
      <div className="absolute bottom-8 right-12 h-56 w-56 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative z-10 flex w-full flex-col justify-between px-10 py-14 xl:px-14">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/16 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-100 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5" />
            PrimeHacks Workspace
          </p>
          <h1 className="max-w-3xl font-[family:var(--font-space-grotesk)] text-5xl font-semibold leading-[1] tracking-[-0.05em] xl:text-6xl">
            <span className="ph-text-gradient">Operate hackathons</span>
            <br />
            <span className="text-white">with a sharper, industry-grade</span>
            <br />
            <span className="ph-amber-gradient">product presence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-300">
            Every login becomes part of the brand experience. Organizers,
            judges, and participants enter a polished system that feels ready
            for production.
          </p>
        </div>
      </div>
    </div>
  );
}
