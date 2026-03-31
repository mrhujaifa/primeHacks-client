import Link from "next/link";
import {
  ArrowRight,
  GitBranch,
  Trophy,
  UsersRound,
  Clock3,
} from "lucide-react";

const featuredHackathons = [
  {
    status: "Registrations are open",
    title: "PrimeHacks AI Launch Sprint 2026",
    description:
      "Build applied AI tools for productivity, operations, and customer support.",
    participants: 330,
    projects: 24,
    prize: "$9,000",
    daysLeft: 39,
    progress: "24%",
    badgeClass:
      "bg-[#5b46ff]/90 text-white shadow-[0_10px_24px_rgba(91,70,255,0.35)]",
    coverClass:
      "bg-[linear-gradient(180deg,#85e8f8_0%,#6ec6d7_40%,#4d8f9c_100%)]",
    artClass:
      "bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.58),transparent_16%),radial-gradient(circle_at_72%_26%,rgba(255,255,255,0.16),transparent_12%),linear-gradient(180deg,transparent_0%,rgba(7,17,27,0.22)_100%)]",
    logoClass: "bg-[linear-gradient(135deg,#1bbad1,#0f7c92)] text-white",
    progressClass: "bg-[linear-gradient(90deg,#5b46ff,#7c6cff)]",
    initials: "AI",
  },
  {
    status: "Registration and matching",
    title: "OpenBuild Food Security Hackathon",
    description:
      "Design resilient systems for agriculture, climate data, and supply visibility.",
    participants: 119,
    projects: 3,
    prize: "$12,500",
    daysLeft: 82,
    progress: "8%",
    badgeClass:
      "bg-[#5b46ff]/90 text-white shadow-[0_10px_24px_rgba(91,70,255,0.35)]",
    coverClass:
      "bg-[linear-gradient(180deg,#8ede3f_0%,#45ba2f_56%,#1e6f2b_100%)]",
    artClass:
      "bg-[radial-gradient(circle_at_22%_24%,rgba(255,241,128,0.42),transparent_14%),radial-gradient(circle_at_60%_34%,rgba(21,85,37,0.28),transparent_24%),linear-gradient(180deg,transparent_0%,rgba(8,28,12,0.18)_100%)]",
    logoClass: "bg-[linear-gradient(135deg,#7cd93d,#338e25)] text-[#103d16]",
    progressClass: "bg-[linear-gradient(90deg,#5b46ff,#7c6cff)]",
    initials: "FS",
  },
  {
    status: "Registration and matching",
    title: "Defence Tech Challenge - Romania",
    description:
      "Prototype secure infrastructure, autonomy, and emergency-response solutions.",
    participants: 119,
    projects: 22,
    prize: "$10,000",
    daysLeft: 7,
    progress: "74%",
    badgeClass:
      "bg-[#5b46ff]/90 text-white shadow-[0_10px_24px_rgba(91,70,255,0.35)]",
    coverClass:
      "bg-[linear-gradient(90deg,#11238b_0%,#11238b_34%,#f2c11b_34%,#f2c11b_67%,#c7333a_67%,#c7333a_100%)]",
    artClass:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.18),transparent_18%)]",
    logoClass: "bg-[linear-gradient(135deg,#1f0f63,#3b248d)] text-white",
    progressClass: "bg-[linear-gradient(90deg,#5b46ff,#7c6cff)]",
    initials: "RO",
  },
  {
    status: "Registration and matching",
    title: "Defence Tech Challenge - Czech Republic",
    description:
      "Develop response systems for logistics, field intelligence, and mission planning.",
    participants: 67,
    projects: 9,
    prize: "$10,000",
    daysLeft: 7,
    progress: "68%",
    badgeClass:
      "bg-[#5b46ff]/90 text-white shadow-[0_10px_24px_rgba(91,70,255,0.35)]",
    coverClass:
      "bg-[linear-gradient(180deg,#f7f8fc_0%,#f7f8fc_30%,#104d8d_30%,#104d8d_62%,#cc3640_62%,#cc3640_100%)]",
    artClass:
      "bg-[linear-gradient(135deg,rgba(19,34,72,0.22),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.18),transparent_18%)]",
    logoClass: "bg-[linear-gradient(135deg,#1f0f63,#3b248d)] text-white",
    progressClass: "bg-[linear-gradient(90deg,#5b46ff,#7c6cff)]",
    initials: "CZ",
  },
];

export default function FeaturedHackathons() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,196,255,0.08),transparent_26%),linear-gradient(180deg,#050816_0%,#07111f_45%,#08131f_100%)]" />
      <div className="relative container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-cyan-200 backdrop-blur-md">
            Featured Hackathons
          </span>

          <h2 className="mt-6 font-[family:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Discover high-impact challenges worth joining
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">
            Explore curated hackathons with strong rewards, active participants,
            and meaningful problem spaces.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredHackathons.map((hackathon) => (
            <article
              key={hackathon.title}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] text-white shadow-[0_24px_70px_rgba(2,8,24,0.45)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-300/25 hover:bg-white/[0.05]"
            >
              <div
                className={`relative h-[180px] overflow-hidden ${hackathon.coverClass}`}
              >
                <div className={`absolute inset-0 ${hackathon.artClass}`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0)_10%,rgba(6,10,18,0.18)_55%,rgba(6,10,18,0.36)_100%)]" />

                <div className="absolute left-4 top-4">
                  <span
                    className={`inline-flex rounded-xl px-3 py-2 text-[12px] font-semibold tracking-[0.01em] ${hackathon.badgeClass}`}
                  >
                    {hackathon.status}
                  </span>
                </div>

                <div className="absolute bottom-[-30px] left-5 flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-white/30 bg-slate-950/90 p-[4px] shadow-[0_14px_32px_rgba(0,0,0,0.35)] backdrop-blur-md">
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-[14px] text-lg font-semibold ${hackathon.logoClass}`}
                  >
                    {hackathon.initials}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-11">
                <div className="flex items-center justify-between gap-3 text-[12px] text-slate-400">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <UsersRound className="h-3.5 w-3.5 text-cyan-300" />
                      <span>{hackathon.participants}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitBranch className="h-3.5 w-3.5 text-violet-300" />
                      <span>{hackathon.projects}</span>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300">
                    <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
                    {hackathon.daysLeft} days left
                  </div>
                </div>

                <h3 className="mt-4 font-[family:var(--font-space-grotesk)] text-[21px] font-semibold leading-8 tracking-[-0.03em] text-white">
                  {hackathon.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-[14px] leading-7 text-slate-400">
                  {hackathon.description}
                </p>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-slate-500">
                      Registration progress
                    </span>
                    <span className="text-[12px] font-semibold text-cyan-200">
                      {hackathon.progress}
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${hackathon.progressClass} shadow-[0_8px_18px_rgba(91,70,255,0.38)]`}
                      style={{ width: hackathon.progress }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-white/10 pt-4">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.16em] text-slate-500">
                      Prize Pool
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-amber-300" />
                      <p className="font-[family:var(--font-space-grotesk)] text-[28px] font-semibold leading-none text-white">
                        {hackathon.prize}
                      </p>
                    </div>
                  </div>

                  <button className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-3.5 py-2 text-[13px] font-semibold text-cyan-100 transition hover:border-cyan-300/40 hover:bg-cyan-400/15">
                    View
                    <ArrowRight className="h-4 w-4" />
                    {/* Updated to theme button */}
                  </button>
                  <button className="btn-theme-outline">
                    View
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/hackathons" className="btn-theme">
            See all hackathons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
