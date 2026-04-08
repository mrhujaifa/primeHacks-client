import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CalendarClock,
  FileCheck2,
  Flag,
  Globe2,
  HandCoins,
  MessageSquareQuote,
  Rocket,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  UsersRound,
  Workflow,
} from "lucide-react";

const platformPillars = [
  {
    icon: Workflow,
    title: "Operational clarity",
    description:
      "Keep registration, team formation, submissions, judging, and announcements inside one premium workflow.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted launch flow",
    description:
      "Move faster with guided setup, smarter event structure, and cleaner participant support moments.",
  },
  {
    icon: HandCoins,
    title: "Sponsor-ready visibility",
    description:
      "Present branded challenges, prize pools, and outcomes in a way that feels serious and credible.",
  },
];

const featuredHackathons = [
  {
    title: "PrimeHacks AI Venture Sprint",
    stage: "Applications open",
    summary:
      "For builders shipping applied AI tools in productivity, support, education, and operations.",
    prize: "$20,000",
    teams: "1,240",
    deadline: "12 days left",
    accent:
      "linear-gradient(135deg, rgba(89,61,190,0.22), rgba(12,18,38,0.32), rgba(71,170,255,0.18))",
  },
  {
    title: "Climate Systems Builder Challenge",
    stage: "Team matching live",
    summary:
      "Prototype resilient software for carbon visibility, climate data, adaptation, and urban resilience.",
    prize: "$15,000",
    teams: "760",
    deadline: "21 days left",
    accent:
      "linear-gradient(135deg, rgba(72,135,255,0.18), rgba(12,18,38,0.34), rgba(177,98,255,0.18))",
  },
  {
    title: "Fintech Compliance Hack Week",
    stage: "Mentor sessions live",
    summary:
      "Build tools for onboarding, fraud reduction, payments infrastructure, and financial accessibility.",
    prize: "$18,500",
    teams: "980",
    deadline: "7 days left",
    accent:
      "linear-gradient(135deg, rgba(177,98,255,0.24), rgba(12,18,38,0.34), rgba(255,120,244,0.16))",
  },
];

const experienceTracks = [
  {
    icon: Rocket,
    title: "For builders",
    lead: "Join faster and spend more time shipping.",
    points: [
      "Discover relevant hackathons with clear tracks and timelines",
      "Form teams, manage projects, and submit without confusion",
      "Track mentors, milestones, and judging readiness in one flow",
    ],
  },
  {
    icon: Flag,
    title: "For organizers",
    lead: "Run a polished program without patching tools together.",
    points: [
      "Launch a premium event page with rules, prizes, and schedule",
      "Manage participant updates, approvals, and submissions centrally",
      "Give judges and sponsors cleaner dashboards and sharper visibility",
    ],
  },
  {
    icon: Globe2,
    title: "For sponsors",
    lead: "Showcase challenges in a format serious teams trust.",
    points: [
      "Highlight branded tracks, prize pools, and judging criteria",
      "See stronger project quality through better challenge clarity",
      "Turn events into long-term builder pipeline and brand exposure",
    ],
  },
];

const testimonials = [
  {
    quote:
      "PrimeHacks made our event feel like a real product. Participants understood the flow immediately, and sponsors noticed the quality of the presentation.",
    name: "Mariam Khan",
    role: "Program Lead, Nova Builders League",
  },
  {
    quote:
      "We stopped stitching together forms, spreadsheets, and last-minute docs. Registration, submissions, and judging finally felt connected.",
    name: "Arian Chowdhury",
    role: "Hackathon Ops, LaunchGrid",
  },
  {
    quote:
      "The platform gave us better structure without making the event feel rigid. Builders moved faster and our team had far less support friction.",
    name: "Sadia Rahman",
    role: "Community Manager, ScaleSprint Labs",
  },
];

const insights = [
  {
    eyebrow: "Organizer Guide",
    title: "How to structure a hackathon page that serious teams actually trust",
    excerpt:
      "A cleaner approach to timelines, challenge framing, prizes, and submissions so your event feels premium from the first click.",
  },
  {
    eyebrow: "Builder Playbook",
    title: "What winning teams do in the first 48 hours of a strong hackathon",
    excerpt:
      "Set the right scope, align teammates, and avoid common execution traps before demo week pressure hits.",
  },
  {
    eyebrow: "Sponsor Strategy",
    title: "Why sponsor-backed tracks perform better with sharper problem framing",
    excerpt:
      "Well-scoped tracks create better submissions, stronger brand perception, and clearer post-event value.",
  },
];

export default function HomeShowcase() {
  return (
    <div className="pb-24">
      <section className="relative z-20 -mt-16 px-4 pb-10 pt-0 sm:-mt-20 sm:px-6 lg:-mt-24 lg:px-8 lg:pb-14">
        <div className="container mx-auto">
          <div className="section-shell section-background px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="ph-grid absolute inset-0 opacity-[0.08]" />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="badge-theme">
                  <Sparkles className="h-3.5 w-3.5" />
                  Built for modern hackathons
                </div>

                <h2 className="mt-6 max-w-2xl font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  A premium launch surface for high-stakes events, serious
                  builders, and stronger outcomes
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
                  PrimeHacks helps your platform feel polished from discovery to
                  final judging. The goal is simple: less friction, better
                  submissions, and an event experience people immediately trust.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {platformPillars.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                      <article key={pillar.title} className="card-theme p-5">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-5 text-lg font-semibold text-foreground">
                          {pillar.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted">
                          {pillar.description}
                        </p>
                      </article>
                    );
                  })}
                </div>
              </div>

              <div className="card-theme overflow-hidden rounded-[2rem]">
                <div
                  className="relative px-6 py-7 sm:px-7"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 18%, rgb(var(--hero-glow-tertiary) / 0.22), transparent 20%), radial-gradient(circle at 18% 26%, rgb(var(--hero-glow-secondary) / 0.16), transparent 24%), linear-gradient(180deg, rgba(14,18,42,0.88), rgba(8,12,28,0.96))",
                  }}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.24em] text-primary">
                        Event command layer
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-white">
                        Everything you need to launch and run with confidence
                      </h3>
                    </div>

                    <div className="hidden rounded-full border border-primary/18 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary sm:inline-flex">
                      Live workflow
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    {[
                      {
                        icon: CalendarClock,
                        title: "Timeline control",
                        text: "Registrations, announcements, and milestones stay aligned from launch day to demo day.",
                      },
                      {
                        icon: FileCheck2,
                        title: "Submission quality",
                        text: "Clear project requirements reduce confusion and improve what teams actually deliver.",
                      },
                      {
                        icon: ShieldCheck,
                        title: "Judging readiness",
                        text: "Mentors, judges, and sponsors get cleaner access to the context they need.",
                      },
                    ].map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.title}
                          className="rounded-[1.4rem] border border-white/8 bg-white/[0.04] px-4 py-4 backdrop-blur-xl"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] text-primary">
                              <Icon className="h-4.5 w-4.5" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {item.title}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-white/62">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="badge-muted">
                <Trophy className="h-3.5 w-3.5" />
                Featured hackathons
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                Join curated challenges that attract ambitious teams and real
                prize-backed momentum
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              These spotlight events show how the platform can present
              high-quality opportunities for builders, mentors, and sponsors in
              one consistent premium experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 xl:grid-cols-3">
            {featuredHackathons.map((hackathon) => (
              <article
                key={hackathon.title}
                className="card-theme rounded-[1.9rem] p-5 transition duration-300 hover:-translate-y-1 hover:border-primary/25"
              >
                <div
                  className="overflow-hidden rounded-[1.5rem] border border-border/60 p-5"
                  style={{ background: hackathon.accent }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      {hackathon.stage}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/14 bg-white/10 text-white">
                      <Target className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="mt-10 max-w-[14ch] font-display text-[30px] font-semibold leading-9 tracking-[-0.04em] text-white">
                    {hackathon.title}
                  </h3>
                </div>

                <p className="mt-5 text-[15px] leading-7 text-muted">
                  {hackathon.summary}
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {[
                    { label: "Prize", value: hackathon.prize },
                    { label: "Builders", value: hackathon.teams },
                    { label: "Timeline", value: hackathon.deadline },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.2rem] border border-border/60 bg-background/30 px-3 py-3"
                    >
                      <p className="text-[11px] uppercase tracking-[0.14em] text-muted">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-foreground">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-5">
                  <p className="text-sm text-muted">
                    Clean event presentation builds stronger participation.
                  </p>

                  <Link href="/hackathons" className="btn-theme-outline px-4 py-2.5">
                    View
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto">
          <div className="section-shell px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="badge-theme">
                <UsersRound className="h-3.5 w-3.5" />
                Who it is for
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                One platform for builders, organizers, mentors, and sponsors
              </h2>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                The best hackathon products feel useful to every role involved.
                PrimeHacks is designed so each side gets clearer workflows and
                better visibility without adding clutter.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              {experienceTracks.map((track) => {
                const Icon = track.icon;

                return (
                  <article key={track.title} className="card-theme rounded-[1.9rem] p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h3 className="mt-6 font-display text-[28px] font-semibold tracking-[-0.03em] text-foreground">
                      {track.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted">
                      {track.lead}
                    </p>

                    <div className="mt-6 space-y-3">
                      {track.points.map((point) => (
                        <div
                          key={point}
                          className="rounded-[1.2rem] border border-border/60 bg-background/30 px-4 py-4"
                        >
                          <p className="text-sm leading-6 text-foreground/88">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="badge-muted">
                <MessageSquareQuote className="h-3.5 w-3.5" />
                Reviews
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                Teams remember how polished and easy the event felt
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-7 text-muted sm:text-base">
              Great design is not decoration here. It helps participants trust
              the process, reduces support load, and makes the whole program
              feel more credible.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="card-theme rounded-[1.9rem] p-6">
                <div className="flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <p className="mt-6 text-base leading-8 text-foreground">
                  &ldquo;{item.quote}&rdquo;
                </p>

                <div className="mt-8 border-t border-border/60 pt-5">
                  <p className="font-semibold text-foreground">{item.name}</p>
                  <p className="mt-1 text-sm text-muted">{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto">
          <div className="section-shell px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <div className="badge-theme">
                  <Sparkles className="h-3.5 w-3.5" />
                  Insights and stories
                </div>

                <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  Content that helps builders launch stronger and organizers run
                  smarter
                </h2>
              </div>

              <Link href="/blog" className="btn-theme-outline">
                Read more insights
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-12 grid gap-6 xl:grid-cols-3">
              {insights.map((item, index) => (
                <article key={item.title} className="card-theme rounded-[1.9rem] p-5">
                  <div
                    className="rounded-[1.5rem] border border-border/60 px-5 py-6"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg, rgba(74,48,180,0.22), rgba(10,15,34,0.32), rgba(86,186,255,0.14))"
                          : index === 1
                            ? "linear-gradient(135deg, rgba(86,186,255,0.16), rgba(10,15,34,0.34), rgba(177,98,255,0.18))"
                            : "linear-gradient(135deg, rgba(177,98,255,0.18), rgba(10,15,34,0.36), rgba(255,120,244,0.14))",
                    }}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.24em] text-white/74">
                      {item.eyebrow}
                    </p>
                    <h3 className="mt-10 max-w-[15ch] font-display text-[30px] font-semibold leading-9 tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-muted">
                    {item.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        <div className="container mx-auto">
          <div className="section-shell overflow-hidden px-5 py-12 sm:px-8 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(178,122,255,0.14),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(86,186,255,0.12),transparent_20%)]" />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  Ready to launch
                </p>
                <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  Turn your next hackathon into a product-quality experience
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                  Build a home for registrations, submissions, judging, mentor
                  support, and sponsor visibility that feels intentional from
                  the first interaction.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="btn-theme">
                  Start your hackathon
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/hackathons" className="btn-theme-outline">
                  Explore active hackathons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
