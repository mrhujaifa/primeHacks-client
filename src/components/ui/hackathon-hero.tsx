import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  BrainCircuit,
  Sparkles,
  Trophy,
  UsersRound,
  Zap,
} from "lucide-react";

const stats = [
  { value: "25K+", label: "global builders" },
  { value: "320+", label: "live hackathons" },
  { value: "48h", label: "launch-ready setup" },
];

const quickSignals = [
  { icon: UsersRound, title: "Active Teams", value: "1,248" },
  { icon: Trophy, title: "Prize Pools", value: "$180K" },
  { icon: BrainCircuit, title: "Live Judging", value: "32 panels" },
];

export default function HackathonHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(103,232,249,0.18),transparent_20%),radial-gradient(circle_at_82%_18%,rgba(245,158,11,0.12),transparent_18%),radial-gradient(circle_at_50%_78%,rgba(6,182,212,0.08),transparent_28%)]" />

      <div className="container mx-auto grid gap-14 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-100">
            <Sparkles className="h-3.5 w-3.5" />
            3D Hackathon Experience
          </div>

          <h1 className="max-w-4xl font-[family:var(--font-space-grotesk)] text-5xl font-semibold tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Build hackathons that feel
            <span className="ph-text-gradient"> futuristic</span>,
            <br />
            run with
            <span className="ph-amber-gradient"> production confidence</span>.
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            PrimeHacks gives your project a bold launchpad with immersive 3D
            visuals, live operations storytelling, and a premium interface made
            for organizers, judges, sponsors, and builders.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/register"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Start a Hackathon
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.03] px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300/24 hover:bg-white/[0.05]"
            >
              Explore Dashboard
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="ph-panel rounded-[24px] px-5 py-5"
              >
                <p className="font-[family:var(--font-space-grotesk)] text-3xl font-semibold text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="ph-hero-perspective relative mx-auto flex h-[620px] w-full max-w-[620px] items-center justify-center">
            <div className="ph-hero-grid-floor absolute inset-x-8 bottom-10 h-56 rounded-[40px]" />
            <div className="ph-hero-ring ph-hero-ring-one absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/18" />
            <div className="ph-hero-ring ph-hero-ring-two absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-amber-300/18" />

            <div className="ph-panel ph-hero-core relative z-20 w-full max-w-[420px] overflow-hidden rounded-[34px] p-6 sm:p-7">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.14),transparent_26%)]" />
              <div className="relative">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                      PrimeHacks Console
                    </p>
                    <h2 className="mt-2 font-[family:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                      Orbiting event command
                    </h2>
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/12 px-3 py-1 text-xs font-medium text-emerald-200">
                    Live sync
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {quickSignals.map((signal) => {
                    const Icon = signal.icon;

                    return (
                      <div
                        key={signal.title}
                        className="rounded-[22px] border border-white/8 bg-white/[0.04] p-4"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-100">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="mt-4 text-xs uppercase tracking-[0.2em] text-slate-400">
                          {signal.title}
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          {signal.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-sm font-medium text-white">
                      Event readiness pulse
                    </p>
                    <BadgeCheck className="h-5 w-5 text-cyan-200" />
                  </div>

                  <div className="space-y-3">
                    {[
                      "Team onboarding pipeline active",
                      "Project submission system connected",
                      "Judging dashboards synced in real time",
                    ].map((item, index) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/6 bg-black/10 px-4 py-3"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/12 text-xs font-semibold text-cyan-100">
                          0{index + 1}
                        </div>
                        <p className="text-sm text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="ph-hero-card ph-hero-card-left absolute left-0 top-16 z-10 w-[220px] rounded-[28px] border border-cyan-300/16 bg-[linear-gradient(180deg,rgba(7,20,31,0.94),rgba(7,17,27,0.76))] p-5 shadow-[0_30px_70px_rgba(2,8,18,0.32)] backdrop-blur-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/12 text-cyan-100">
                <Boxes className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Tracks Online
              </p>
              <p className="mt-2 font-[family:var(--font-space-grotesk)] text-3xl font-semibold text-white">
                18
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                AI, fintech, health, climate, and sponsor-backed challenge
                rooms.
              </p>
            </div>

            <div className="ph-hero-card ph-hero-card-right absolute right-2 top-10 z-30 w-[210px] rounded-[28px] border border-amber-300/16 bg-[linear-gradient(180deg,rgba(28,18,7,0.92),rgba(19,12,5,0.72))] p-5 shadow-[0_30px_70px_rgba(2,8,18,0.32)] backdrop-blur-2xl">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300/12 text-amber-100">
                <Zap className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Submission Surge
              </p>
              <p className="mt-2 font-[family:var(--font-space-grotesk)] text-3xl font-semibold text-white">
                92%
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Teams are shipping demos, repos, and pitches before deadline.
              </p>
            </div>

            <div className="ph-hero-card ph-hero-card-bottom absolute bottom-8 right-10 z-10 w-[240px] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,22,34,0.94),rgba(7,17,27,0.76))] p-5 shadow-[0_30px_70px_rgba(2,8,18,0.32)] backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                Sponsor Visibility
              </p>
              <div className="mt-3 flex items-end justify-between gap-3">
                <div>
                  <p className="font-[family:var(--font-space-grotesk)] text-3xl font-semibold text-white">
                    14
                  </p>
                  <p className="mt-1 text-sm text-slate-300">
                    branded challenge partners
                  </p>
                </div>
                <div className="rounded-2xl bg-cyan-300/12 px-3 py-2 text-xs font-medium text-cyan-100">
                  Premium mode
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
