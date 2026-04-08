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
      <section className="relative z-20 -mt-16 px-4 pb-20 pt-0 sm:-mt-20 sm:px-6 lg:-mt-24 lg:px-8 lg:pb-24">
        <div className="container mx-auto">
          <div className="section-shell section-background px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="ph-grid absolute inset-0 opacity-[0.1]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                For Organizations
              </p>

              <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-foreground sm:text-5xl">
                Launch a polished event system with one premium visual language
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                The whole platform now speaks the same design language across
                discovery, registration, judging, and dashboards, so your event
                feels like one premium product instead of disconnected tools.
              </p>
            </div>

            <div className="relative mt-14 grid gap-5 lg:grid-cols-2">
              {organizationShowcaseCards.map((card) => (
                <article
                  key={card.title}
                  className="card-theme"
                >
                  <div className="px-8 pb-8 pt-7">
                    <h3 className="font-display text-[28px] font-semibold tracking-[-0.03em] text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-5 max-w-xl text-[15px] leading-8 text-muted">
                      {card.description}
                    </p>
                  </div>

                  {card.variant === "setup" ? (
                    <div className="px-8 pb-8">
                      <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-[18px] border border-border/70 bg-[linear-gradient(180deg,rgba(11,16,36,0.88),rgba(7,11,28,0.98))]">
                        <div className="ph-grid absolute inset-0 opacity-[0.2]" />
                        <div className="absolute h-[170px] w-[170px] rounded-full border border-primary/25 bg-primary/10 blur-sm" />
                        <div className="absolute h-[156px] w-[156px] rounded-full border border-primary/30" />

                        <div className="relative z-10 h-[152px] w-[152px]">
                          <div className="absolute left-[38px] top-[2px] h-[118px] w-[28px] rotate-[-38deg] rounded-[10px] border border-primary/20 bg-button-primary opacity-90" />
                          <div className="absolute left-[60px] top-[56px] h-[28px] w-[82px] rotate-[52deg] rounded-[10px] border border-primary/20 bg-button-primary opacity-90" />
                          <div className="absolute left-[39px] top-[92px] h-[28px] w-[94px] rotate-[-14deg] rounded-[10px] border border-primary/20 bg-button-primary opacity-85" />
                          <div className="absolute left-[18px] top-[52px] h-[118px] w-[28px] rotate-[12deg] rounded-[10px] border border-primary/20 bg-button-primary opacity-75" />
                          <div className="absolute bottom-[4px] right-[-2px] flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-card/80 text-xs font-semibold text-primary shadow-glow">
                            AI
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="px-8 pb-8">
                      <div className="overflow-hidden rounded-[18px] border border-border/70 bg-[linear-gradient(180deg,rgba(10,15,34,0.98),rgba(7,11,26,0.98))] shadow-panel">
                        <div className="flex items-center gap-2 border-b border-border/70 px-5 py-3">
                          <span className="h-3 w-3 rounded-full bg-primary/60" />
                          <span className="h-3 w-3 rounded-full bg-hero-secondary/55" />
                          <span className="h-3 w-3 rounded-full bg-hero-tertiary/65" />
                          <div className="ml-4 h-8 flex-1 rounded-full border border-border/70 bg-card/60" />
                        </div>

                        <div className="relative h-[300px] overflow-hidden bg-[linear-gradient(180deg,rgba(17,14,39,0.98),rgba(11,10,29,1))]">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(255,255,255,0.12),transparent_12%),radial-gradient(circle_at_76%_24%,rgba(179,122,255,0.40),transparent_22%),radial-gradient(circle_at_16%_78%,rgba(86,186,255,0.16),transparent_24%)]" />
                          <div className="absolute left-6 top-12 text-[13px] font-semibold tracking-[0.3em] text-white/28">
                            AI CONTROL LAYER
                          </div>
                          <div className="absolute right-8 top-10 w-[190px] rotate-[-8deg] rounded-[18px] border border-border/70 bg-card/80 px-5 py-6 text-foreground shadow-panel">
                            <p className="text-[11px] font-semibold uppercase leading-5 tracking-[0.14em] text-primary">
                              PrimeHacks launch page
                            </p>
                            <p className="mt-4 text-[13px] font-medium leading-6 text-muted">
                              Rules, timeline, prizes, tracks, and submissions
                              presented in one premium glassy destination.
                            </p>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-20 bg-[linear-gradient(180deg,rgba(10,15,34,0.74),rgba(8,12,28,1))]">
                            <div className="flex items-center gap-5 px-6 py-4 text-xs text-muted">
                              <span>Overview</span>
                              <span>Timeline</span>
                              <span>Rules</span>
                              <span>Prizes</span>
                              <span className="font-semibold text-primary">
                                Projects
                              </span>
                            </div>
                            <div className="px-6 pb-4">
                              <div className="h-10 rounded-full border border-border/70 bg-card/70" />
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
              <Link href="/explore" className="btn-theme">
                Explore more features
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-8 pt-20 sm:px-6 lg:px-8 lg:pb-12 lg:pt-24">
        <div className="container mx-auto">
          <div className="section-shell overflow-hidden">
            <div className="grid gap-10 px-6 py-8 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-10">
              <div>
                <div className="badge-theme">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Launch Your Event
                </div>

                <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  Build an event experience people immediately trust
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  If your goal is to run a polished program without confusing
                  participants or overloading your ops team, PrimeHacks gives
                  you a cleaner starting point.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/register" className="btn-theme">
                    Start Your Hackathon
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <Link href="/login" className="btn-theme-outline">
                    Explore Dashboard
                  </Link>
                </div>
              </div>

              <div className="card-theme rounded-[1.9rem] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-muted">
                  Why teams move fast with PrimeHacks
                </p>

                <div className="mt-6 space-y-4">
                  {ctaBullets.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/35 px-4 py-4"
                    >
                      <UsersRound className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                      <p className="text-sm leading-6 text-muted">{item}</p>
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
