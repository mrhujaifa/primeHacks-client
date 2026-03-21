import Link from "next/link";
import { ArrowRight, ShieldCheck, UsersRound } from "lucide-react";

const organizationShowcaseCards = [
  {
    title: "Easy hackathon setup",
    description:
      "Streamline planning and execution with a single workflow for registration, team discovery, challenge timelines, announcements, and project submissions.",
    variant: "setup",
  },
  {
    title: "Custom hackathon page",
    description:
      "Convert more participants with a polished landing page that presents your brand, timeline, rules, prizes, and registration flow in one place.",
    variant: "page",
  },
];

const ctaBullets = [
  "Launch a branded hackathon page that is easy to trust",
  "Keep registrations, tracks, submissions, and judging aligned",
  "Give sponsors and participants a cleaner event experience",
];

export default function PrimeHacksLandingSections() {
  return (
    <>
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="container mx-auto">
          <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,21,33,0.94),rgba(6,16,26,0.98))] px-5 py-14 shadow-[0_30px_90px_rgba(2,8,18,0.30)] sm:px-8 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(103,232,249,0.12),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(245,158,11,0.10),transparent_20%),radial-gradient(circle_at_52%_100%,rgba(14,165,233,0.08),transparent_32%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200">
                For Organizations
              </p>

              <h2 className="mt-5 font-[family:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                Simplify Your Hackathon Experience
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                Managing a hackathon can be a challenge without the right tools.
                We simplify the full process so your organization can launch,
                manage, and scale events with more clarity.
              </p>
            </div>

            <div className="relative mt-14 grid gap-5 lg:grid-cols-2">
              {organizationShowcaseCards.map((card) => (
                <article
                  key={card.title}
                  className="overflow-hidden rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.02))] shadow-[0_18px_40px_rgba(2,8,18,0.22)]"
                >
                  <div className="px-8 pb-8 pt-7">
                    <h3 className="font-[family:var(--font-space-grotesk)] text-[28px] font-semibold tracking-[-0.03em] text-white">
                      {card.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-[15px] leading-8 text-slate-300">
                      {card.description}
                    </p>
                  </div>

                  {card.variant === "setup" ? (
                    <div className="px-8 pb-8">
                      <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-[18px] border border-cyan-300/12 bg-[radial-gradient(circle_at_center,rgba(103,232,249,0.12),transparent_42%),linear-gradient(180deg,rgba(9,21,33,0.96)_0%,rgba(6,16,26,1)_100%)]">
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(125,211,252,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(125,211,252,0.09)_1px,transparent_1px)] bg-[size:30px_30px]" />
                        <div className="absolute h-[156px] w-[156px] border border-dashed border-cyan-300/30" />

                        <div className="relative z-10 h-[152px] w-[152px]">
                          <div className="absolute left-[40px] top-[0px] h-[118px] w-[26px] rotate-[-38deg] rounded-[8px] border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(186,230,253,0.84),rgba(103,232,249,0.48))]" />
                          <div className="absolute left-[61px] top-[56px] h-[26px] w-[82px] rotate-[52deg] rounded-[8px] border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(186,230,253,0.84),rgba(103,232,249,0.48))]" />
                          <div className="absolute left-[39px] top-[92px] h-[26px] w-[94px] rotate-[-14deg] rounded-[8px] border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(186,230,253,0.84),rgba(103,232,249,0.48))]" />
                          <div className="absolute left-[20px] top-[52px] h-[118px] w-[26px] rotate-[12deg] rounded-[8px] border border-cyan-200/20 bg-[linear-gradient(180deg,rgba(186,230,253,0.84),rgba(103,232,249,0.48))]" />
                          <div className="absolute bottom-[8px] right-[-6px] h-0 w-0 rotate-[18deg] border-b-[12px] border-l-[22px] border-t-[12px] border-b-transparent border-l-amber-300/80 border-t-transparent drop-shadow-[0_6px_10px_rgba(245,158,11,0.16)]" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px-8 pb-8">
                      <div className="overflow-hidden rounded-[18px] border border-white/8 bg-[linear-gradient(180deg,rgba(10,24,37,0.96),rgba(7,17,27,0.96))] shadow-[0_12px_34px_rgba(2,8,18,0.24)]">
                        <div className="flex items-center gap-2 border-b border-white/8 px-5 py-3">
                          <span className="h-3 w-3 rounded-full bg-[#f16d5d]" />
                          <span className="h-3 w-3 rounded-full bg-[#f5c14b]" />
                          <span className="h-3 w-3 rounded-full bg-[#67c36f]" />
                          <div className="ml-4 h-8 flex-1 rounded-full border border-white/8 bg-white/[0.04]" />
                        </div>

                        <div className="relative h-[300px] overflow-hidden bg-[linear-gradient(180deg,#125c55_0%,#0c7b66_42%,#0b4f4f_100%)]">
                          <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(90deg,rgba(245,158,11,0.5),transparent_24%,transparent_80%,rgba(6,17,26,0.28))]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,209,57,0.34),transparent_6%),radial-gradient(circle_at_20%_34%,rgba(24,173,104,0.24),transparent_20%),radial-gradient(circle_at_76%_36%,rgba(8,100,62,0.26),transparent_24%)]" />
                          <div className="absolute left-6 top-14 text-[13px] font-semibold tracking-[0.3em] text-white/35">
                            0100110101
                          </div>
                          <div className="absolute right-8 top-10 w-[180px] rotate-[-8deg] rounded-[18px] bg-[linear-gradient(180deg,rgba(7,23,37,0.92),rgba(10,82,68,0.92))] px-5 py-6 text-white shadow-[0_16px_24px_rgba(0,0,0,0.18)]">
                            <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-cyan-100">
                              Global Climate Buildathon
                            </p>
                            <p className="mt-4 text-[13px] font-medium leading-6 text-white/85">
                              Rules, timeline, prizes, tracks, and project
                              submissions in one branded destination.
                            </p>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,rgba(9,21,33,0.98),rgba(6,16,26,1))]">
                            <div className="flex items-center gap-5 px-6 py-4 text-xs text-slate-400">
                              <span>Overview</span>
                              <span>Timeline</span>
                              <span>Rules</span>
                              <span>Prizes</span>
                              <span className="font-semibold text-cyan-100">
                                Projects
                              </span>
                            </div>
                            <div className="px-6 pb-4">
                              <div className="h-10 rounded-full border border-white/8 bg-white/[0.04]" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              ))}
            </div>

            <div className="relative mt-12 flex justify-center">
              <Link
                href="/explore"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Explore more features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-20 sm:px-6 lg:px-8 lg:pb-12 lg:pt-24">
        <div className="container mx-auto">
          <div className="overflow-hidden rounded-[36px] border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(10,28,39,0.96),rgba(7,17,27,0.96))] shadow-[0_32px_90px_rgba(2,8,18,0.34)]">
            <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-cyan-100">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Launch Your Event
                </div>

                <h2 className="mt-6 max-w-2xl font-[family:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
                  Build a hackathon experience people can understand and trust
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  If your goal is to run a polished program without confusing
                  participants or overloading your ops team, PrimeHacks gives
                  you a cleaner starting point.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/register"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    Start Your Hackathon
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link
                    href="/login"
                    className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-white transition hover:border-cyan-300/24 hover:bg-white/[0.06]"
                  >
                    Explore Dashboard
                  </Link>
                </div>
              </div>

              <div className="rounded-[30px] border border-white/8 bg-white/[0.04] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                  Why teams move fast with PrimeHacks
                </p>

                <div className="mt-6 space-y-4">
                  {ctaBullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/10 px-4 py-4"
                    >
                      <UsersRound className="mt-0.5 h-4.5 w-4.5 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-6 text-slate-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
