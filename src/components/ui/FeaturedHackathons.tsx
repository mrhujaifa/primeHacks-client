import Link from "next/link";
import { ArrowRight, GitBranch, Trophy, UsersRound } from "lucide-react";

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
    accent: "cyan",
    badgeClass:
      "bg-[#4430b4] text-white shadow-[0_10px_20px_rgba(68,48,180,0.28)]",
    coverClass:
      "bg-[linear-gradient(180deg,#85e8f8_0%,#6ec6d7_40%,#4d8f9c_100%)]",
    artClass:
      "bg-[radial-gradient(circle_at_20%_18%,rgba(255,255,255,0.58),transparent_16%),radial-gradient(circle_at_72%_26%,rgba(255,255,255,0.16),transparent_12%),linear-gradient(180deg,transparent_0%,rgba(7,17,27,0.22)_100%)]",
    logoClass: "bg-[linear-gradient(135deg,#1bbad1,#0f7c92)] text-white",
    progressClass: "bg-[linear-gradient(90deg,#4f35c8,#6f5cff)]",
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
    accent: "lime",
    badgeClass:
      "bg-[#4430b4] text-white shadow-[0_10px_20px_rgba(68,48,180,0.28)]",
    coverClass:
      "bg-[linear-gradient(180deg,#8ede3f_0%,#45ba2f_56%,#1e6f2b_100%)]",
    artClass:
      "bg-[radial-gradient(circle_at_22%_24%,rgba(255,241,128,0.42),transparent_14%),radial-gradient(circle_at_60%_34%,rgba(21,85,37,0.28),transparent_24%),linear-gradient(180deg,transparent_0%,rgba(8,28,12,0.18)_100%)]",
    logoClass: "bg-[linear-gradient(135deg,#7cd93d,#338e25)] text-[#103d16]",
    progressClass: "bg-[linear-gradient(90deg,#5939d5,#7963ff)]",
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
    accent: "flag",
    badgeClass:
      "bg-[#4430b4] text-white shadow-[0_10px_20px_rgba(68,48,180,0.28)]",
    coverClass:
      "bg-[linear-gradient(90deg,#11238b_0%,#11238b_34%,#f2c11b_34%,#f2c11b_67%,#c7333a_67%,#c7333a_100%)]",
    artClass:
      "bg-[linear-gradient(180deg,rgba(255,255,255,0.12),transparent_40%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.18),transparent_18%)]",
    logoClass: "bg-[linear-gradient(135deg,#1f0f63,#3b248d)] text-white",
    progressClass: "bg-[linear-gradient(90deg,#4f35c8,#6f5cff)]",
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
    accent: "flag",
    badgeClass:
      "bg-[#4430b4] text-white shadow-[0_10px_20px_rgba(68,48,180,0.28)]",
    coverClass:
      "bg-[linear-gradient(180deg,#f7f8fc_0%,#f7f8fc_30%,#104d8d_30%,#104d8d_62%,#cc3640_62%,#cc3640_100%)]",
    artClass:
      "bg-[linear-gradient(135deg,rgba(19,34,72,0.22),transparent_38%),radial-gradient(circle_at_82%_22%,rgba(255,255,255,0.18),transparent_18%)]",
    logoClass: "bg-[linear-gradient(135deg,#1f0f63,#3b248d)] text-white",
    progressClass: "bg-[linear-gradient(90deg,#4f35c8,#6f5cff)]",
    initials: "CZ",
  },
];

export default function FeaturedHackathons() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
            Featured Hackathons
          </p>
          <h2 className="mt-5 font-[family:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Discover new challenges to participate in
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredHackathons.map((hackathon) => (
            <article
              key={hackathon.title}
              className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,248,255,0.92))] shadow-[0_24px_60px_rgba(2,8,18,0.24)]"
            >
              <div
                className={`relative h-[160px] overflow-hidden ${hackathon.coverClass}`}
              >
                <div className={`absolute inset-0 ${hackathon.artClass}`} />
                <div className="absolute left-4 top-4">
                  <span
                    className={`inline-flex rounded-[8px] px-3 py-2 text-[13px] font-medium ${hackathon.badgeClass}`}
                  >
                    {hackathon.status}
                  </span>
                </div>

                <div className="absolute bottom-[-32px] left-4 flex h-[64px] w-[64px] items-center justify-center rounded-full border-4 border-white bg-slate-950 text-lg font-semibold shadow-[0_10px_24px_rgba(16,24,40,0.18)]">
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full ${hackathon.logoClass}`}
                  >
                    {hackathon.initials}
                  </div>
                </div>
              </div>

              <div className="px-4 pb-4 pt-10">
                <div className="flex items-center justify-end gap-3 text-[12px] text-[#6d63bf]">
                  <div className="flex items-center gap-1">
                    <UsersRound className="h-3.5 w-3.5" />
                    <span>{hackathon.participants}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <GitBranch className="h-3.5 w-3.5" />
                    <span>{hackathon.projects}</span>
                  </div>
                </div>

                <h3 className="mt-3 font-[family:var(--font-space-grotesk)] text-[20px] font-semibold leading-8 tracking-[-0.03em] text-[#121957]">
                  {hackathon.title}
                </h3>
                <p className="mt-3 min-h-[72px] text-[15px] leading-7 text-[#6a7099]">
                  {hackathon.description}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="h-[7px] flex-1 overflow-hidden rounded-full border border-[#d8d2ff] bg-[#f2efff]">
                    <div
                      className={`h-full rounded-full ${hackathon.progressClass}`}
                      style={{ width: hackathon.progress }}
                    />
                  </div>
                  <span className="text-[12px] font-medium uppercase tracking-[0.12em] text-[#6b63c7]">
                    {hackathon.daysLeft} days left
                  </span>
                </div>

                <div className="mt-5 border-t border-[#e6e1ff] pt-4">
                  <p className="text-[14px] uppercase tracking-[0.16em] text-[#6a7099]">
                    Prize
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-[#5f46e8]" />
                    <p className="font-[family:var(--font-space-grotesk)] text-[28px] font-semibold leading-none text-[#111a4f]">
                      {hackathon.prize}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/hackathons"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] border border-cyan-300/24 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-300/40 hover:bg-white/[0.07]"
          >
            See all hackathons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
