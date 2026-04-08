import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  FileCode2,
  Globe2,
  Layers3,
  LineChart,
  MessageSquareQuote,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
  WandSparkles,
} from "lucide-react";

const foundationCards = [
  {
    icon: Layers3,
    number: "01",
    title: "End-to-end event structure",
    text: "Keep registration, team formation, submissions, and judging inside one polished product flow.",
  },
  {
    icon: WandSparkles,
    number: "02",
    title: "Stronger first impression",
    text: "Make your event look modern, credible, and easier to trust for builders and sponsors.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Better project outcomes",
    text: "Clearer tracks and cleaner guidance help teams submit stronger work with less confusion.",
  },
];

const programs = [
  {
    title: "PrimeHacks AI Venture Sprint",
    state: "Applications open",
    description:
      "A product-focused challenge for teams shipping practical AI software across productivity, support, education, and operations.",
    prize: "$20,000",
    participants: "1,240 builders",
    deadline: "12 days left",
  },
  {
    title: "Climate Systems Builder Challenge",
    state: "Team matching live",
    description:
      "Build resilient climate data and infrastructure tools with global mentor support and strong participation.",
  },
  {
    title: "Fintech Compliance Hack Week",
    state: "Mentor sessions live",
    description:
      "Prototype onboarding, fraud, and payments infrastructure tools inside prize-backed challenge tracks.",
  },
];

const flowCards = [
  {
    icon: Globe2,
    label: "Step 01",
    title: "Launch a serious event page",
    text: "Present tracks, rules, prizes, and event timing in one destination people trust instantly.",
  },
  {
    icon: UsersRound,
    label: "Step 02",
    title: "Guide teams through the build phase",
    text: "Make updates, support, milestones, and submission expectations easier to follow.",
  },
  {
    icon: BadgeCheck,
    label: "Step 03",
    title: "Run judging with confidence",
    text: "Give judges, mentors, and sponsors cleaner context so evaluation feels credible and sharp.",
  },
];

const reviews = [
  {
    quote:
      "The platform made our hackathon feel like a real product instead of a collection of tools and forms.",
    name: "Mariam Khan",
    role: "Program Lead, Nova Builders League",
  },
  {
    quote:
      "Participants understood the process faster, and sponsors immediately saw a more premium event presence.",
    name: "Arian Chowdhury",
    role: "Hackathon Ops, LaunchGrid",
  },
];

const stories = [
  {
    label: "Organizer Guide",
    title: "How to make a hackathon homepage look instantly trustworthy",
    text: "The right structure for tracks, prizes, dates, and submissions changes how people judge event quality.",
  },
  {
    label: "Builder Playbook",
    title: "What strong teams do before the first mentor session",
    text: "Winning teams set scope early, align roles fast, and remove friction before demo week pressure starts.",
  },
];

export default function HomeLandingV2() {
  const featured = programs[0];
  const secondary = programs.slice(1);

  return (
    <div className="pb-24">
      <section className="relative z-20 -mt-14 px-4 pb-10 pt-0 sm:-mt-18 sm:px-6 lg:-mt-24 lg:px-8 lg:pb-14">
        <div className="container mx-auto">
          <div className="section-shell overflow-hidden px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(178,122,255,0.12),transparent_22%),radial-gradient(circle_at_86%_18%,rgba(86,186,255,0.10),transparent_18%)]" />
            <div className="ph-grid absolute inset-0 opacity-[0.08]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <div>
                <div className="badge-theme">
                  <Sparkles className="h-3.5 w-3.5" />
                  Platform foundation
                </div>

                <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  A cleaner homepage direction for a more serious hackathon
                  platform
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
                  This layout focuses on stronger structure, clearer storytelling,
                  and a more product-like presentation instead of stacking too
                  many generic sections.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/register" className="btn-theme">
                    Start your hackathon
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/hackathons" className="btn-theme-outline">
                    Explore live hackathons
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {foundationCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title} className="card-theme rounded-[1.8rem] p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-sm font-semibold text-primary/80">
                          {item.number}
                        </span>
                      </div>

                      <h3 className="mt-6 text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
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
                Spotlight programs
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                Featured hackathons presented like product launches, not random
                listings
              </h2>
            </div>

            <Link href="/hackathons" className="btn-theme-outline">
              See all programs
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            <article className="card-theme overflow-hidden rounded-[2rem] p-5">
              <div className="rounded-[1.7rem] border border-border/60 bg-[linear-gradient(135deg,rgba(107,72,255,0.28),rgba(12,18,38,0.36),rgba(86,186,255,0.20))] px-6 py-7 sm:px-7 sm:py-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/82">
                    {featured.state}
                  </span>
                  <span className="rounded-full border border-white/10 bg-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/68">
                    Featured launch
                  </span>
                </div>

                <h3 className="mt-10 max-w-[12.5ch] font-display text-[40px] font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-[46px]">
                  {featured.title}
                </h3>

                <p className="mt-5 max-w-xl text-[15px] leading-8 text-white/74">
                  {featured.description}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Prize pool", value: featured.prize },
                    { label: "Participants", value: featured.participants },
                    { label: "Deadline", value: featured.deadline },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.2rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-xl"
                    >
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/56">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="grid gap-6">
              {secondary.map((program, index) => (
                <article
                  key={program.title}
                  className="card-theme rounded-[1.8rem] overflow-hidden p-5"
                >
                  <div
                    className="rounded-[1.4rem] border border-border/60 px-5 py-5"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg,rgba(86,186,255,0.20),rgba(12,18,38,0.34),rgba(177,98,255,0.18))"
                          : "linear-gradient(135deg,rgba(177,98,255,0.22),rgba(12,18,38,0.36),rgba(255,120,244,0.16))",
                    }}
                  >
                    <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      {program.state}
                    </span>

                    <h3 className="mt-8 max-w-[13ch] font-display text-[28px] font-semibold leading-8 tracking-[-0.04em] text-white">
                      {program.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-[15px] leading-7 text-muted">
                    {program.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto">
          <div className="section-shell px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="badge-theme">
                <CalendarDays className="h-3.5 w-3.5" />
                Product flow
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                A stronger landing flow for modern hackathon operations
              </h2>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Instead of flooding the page with cards, this direction explains
                the product through event flow, clearer structure, and better
                storytelling.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              {flowCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="card-theme rounded-[1.8rem] p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/80">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-[28px] font-semibold tracking-[-0.03em] text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-muted">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="section-shell px-5 py-12 sm:px-8">
            <div className="badge-muted">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              Reviews
            </div>

            <h2 className="mt-6 max-w-lg font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              The platform feels stronger when the event feels easier to trust
            </h2>

            <div className="mt-10 space-y-4">
              {reviews.map((item) => (
                <article key={item.name} className="card-theme rounded-[1.7rem] p-5">
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-foreground">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-border/60 pt-4">
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="mt-1 text-sm text-muted">{item.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="section-shell px-5 py-12 sm:px-8">
            <div className="badge-theme">
              <FileCode2 className="h-3.5 w-3.5" />
              Blog and insights
            </div>

            <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Useful content for organizers and builders who want stronger
              results
            </h2>

            <div className="mt-10 space-y-4">
              {stories.map((item, index) => (
                <article
                  key={item.title}
                  className="card-theme rounded-[1.7rem] p-5 transition duration-300 hover:border-primary/25"
                >
                  <div
                    className="rounded-[1.3rem] border border-border/60 px-5 py-5"
                    style={{
                      background:
                        index === 0
                          ? "linear-gradient(135deg, rgba(78,51,188,0.22), rgba(10,15,34,0.34), rgba(86,186,255,0.14))"
                          : "linear-gradient(135deg, rgba(86,186,255,0.16), rgba(10,15,34,0.36), rgba(177,98,255,0.16))",
                    }}
                  >
                    <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                      {item.label}
                    </p>
                    <h3 className="mt-8 max-w-[15ch] font-display text-[28px] font-semibold leading-8 tracking-[-0.04em] text-white">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-muted">
                    {item.text}
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
                  Build a homepage that makes your hackathon platform feel
                  premium before anyone even signs up
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                  Give builders, judges, mentors, and sponsors a better first
                  impression with cleaner structure and a more product-quality
                  experience.
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
