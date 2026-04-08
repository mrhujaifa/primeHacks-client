import Link from "next/link";
import {
  ArrowRight,
  BrainCircuit,
  CalendarRange,
  FileCheck2,
  MessageSquareQuote,
  Sparkles,
  Star,
  Trophy,
  UsersRound,
  Workflow,
} from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "One clean workflow",
    text: "Registrations, team formation, submissions, judging, and updates stay aligned in one premium system.",
  },
  {
    icon: BrainCircuit,
    title: "AI-assisted structure",
    text: "Launch faster with clearer event framing, better participant flow, and stronger operational clarity.",
  },
  {
    icon: CalendarRange,
    title: "Professional launch",
    text: "Give organizers, builders, and sponsors a platform that feels serious from the first click.",
  },
];

const reviews = [
  {
    quote:
      "PrimeHacks made our event feel like a product, not a patchwork of forms and docs.",
    name: "Mariam Khan",
    role: "Program Lead, Nova Builders League",
  },
  {
    quote:
      "Teams understood the process faster, and our ops workload dropped because the platform was much clearer.",
    name: "Arian Chowdhury",
    role: "Hackathon Ops, LaunchGrid",
  },
];

const posts = [
  {
    label: "Organizer Guide",
    title: "How to structure a hackathon page that strong teams trust instantly",
    text: "A cleaner way to present rules, prizes, tracks, and timing so your event looks more credible.",
  },
  {
    label: "Builder Playbook",
    title: "What strong teams do in the first 48 hours of a serious hackathon",
    text: "Set the right scope early, align execution, and avoid the mistakes that kill momentum before demo week.",
  },
];

export default function HomeLanding() {
  return (
    <div className="pb-24">
      <section className="relative z-20 -mt-16 px-4 pb-10 pt-0 sm:-mt-20 sm:px-6 lg:-mt-24 lg:px-8 lg:pb-14">
        <div className="container mx-auto">
          <div className="section-shell section-background px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="ph-grid absolute inset-0 opacity-[0.08]" />

            <div className="relative grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <div className="badge-theme">
                  <Sparkles className="h-3.5 w-3.5" />
                  Built for hackathons
                </div>

                <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                  Make your platform feel premium the moment someone lands on it
                </h2>

                <p className="mt-5 max-w-xl text-base leading-8 text-muted sm:text-lg">
                  PrimeHacks is built to make hackathons look sharper, run
                  smoother, and feel more trustworthy for builders, organizers,
                  judges, and sponsors.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/register" className="btn-theme">
                    Start your hackathon
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/hackathons" className="btn-theme-outline">
                    Explore hackathons
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {features.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article key={item.title} className="card-theme p-5">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/18 bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-foreground">
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
                Featured hackathons
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                Discover challenges people actually want to join
              </h2>
            </div>

            <Link href="/hackathons" className="btn-theme-outline">
              View all hackathons
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="card-theme overflow-hidden rounded-[2rem] p-5">
              <div className="rounded-[1.7rem] border border-border/60 bg-[linear-gradient(135deg,rgba(107,72,255,0.28),rgba(12,18,38,0.34),rgba(86,186,255,0.20))] px-6 py-7 sm:px-7">
                <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/82">
                  Applications open
                </span>

                <h3 className="mt-10 max-w-[13ch] font-display text-[38px] font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-[44px]">
                  PrimeHacks AI Venture Sprint
                </h3>

                <p className="mt-5 max-w-xl text-[15px] leading-8 text-white/74">
                  For builders shipping practical AI tools across productivity,
                  support, education, and operations.
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-3">
                  {[
                    { label: "Prize pool", value: "$20,000" },
                    { label: "Participants", value: "1,240 builders" },
                    { label: "Deadline", value: "12 days left" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-[1.2rem] border border-white/12 bg-white/10 px-4 py-4 backdrop-blur-xl"
                    >
                      <p className="text-[11px] uppercase tracking-[0.14em] text-white/58">
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
              <article className="card-theme rounded-[1.8rem] p-5">
                <div className="rounded-[1.4rem] border border-border/60 bg-[linear-gradient(135deg,rgba(86,186,255,0.20),rgba(12,18,38,0.34),rgba(177,98,255,0.18))] px-5 py-5">
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    Team matching live
                  </span>
                  <h3 className="mt-8 max-w-[13ch] font-display text-[28px] font-semibold leading-8 tracking-[-0.04em] text-white">
                    Climate Systems Builder Challenge
                  </h3>
                </div>
                <p className="mt-5 text-[15px] leading-7 text-muted">
                  Prototype climate data, resilience, and infrastructure
                  software with global mentors.
                </p>
              </article>

              <article className="card-theme rounded-[1.8rem] p-5">
                <div className="rounded-[1.4rem] border border-border/60 bg-[linear-gradient(135deg,rgba(177,98,255,0.22),rgba(12,18,38,0.36),rgba(255,120,244,0.16))] px-5 py-5">
                  <span className="rounded-full border border-white/14 bg-white/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    Mentor sessions live
                  </span>
                  <h3 className="mt-8 max-w-[13ch] font-display text-[28px] font-semibold leading-8 tracking-[-0.04em] text-white">
                    Fintech Compliance Hack Week
                  </h3>
                </div>
                <p className="mt-5 text-[15px] leading-7 text-muted">
                  Build onboarding, fraud, and financial infrastructure tools
                  with prize-backed challenge tracks.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto">
          <div className="section-shell px-5 py-14 sm:px-8 lg:px-12 lg:py-16">
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="badge-theme">
                <UsersRound className="h-3.5 w-3.5" />
                Core product features
              </div>

              <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
                The parts of a serious hackathon product that matter most
              </h2>

              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                Strong platforms reduce confusion, improve submission quality,
                and make the full event experience feel connected instead of
                improvised.
              </p>
            </div>

            <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: "Builder experience",
                  text: "Make joining, teaming up, tracking progress, and submitting projects feel fast and clear.",
                },
                {
                  title: "Organizer control",
                  text: "Run branded event pages, updates, timelines, and submissions from one cleaner command layer.",
                },
                {
                  title: "Judge and sponsor clarity",
                  text: "Present tracks, prize pools, criteria, and outcomes in a way serious partners can trust.",
                },
              ].map((item) => (
                <article key={item.title} className="card-theme rounded-[1.8rem] p-6">
                  <h3 className="font-display text-[28px] font-semibold tracking-[-0.03em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="container mx-auto grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="section-shell px-5 py-12 sm:px-8">
            <div className="badge-muted">
              <MessageSquareQuote className="h-3.5 w-3.5" />
              Reviews
            </div>

            <h2 className="mt-6 max-w-lg font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              People remember when the event feels polished and easy to trust
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
              <FileCheck2 className="h-3.5 w-3.5" />
              Blog and insights
            </div>

            <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
              Content that helps organizers and builders move smarter
            </h2>

            <div className="mt-10 space-y-4">
              {posts.map((item, index) => (
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
                  Build a hackathon homepage that feels as strong as the event
                  behind it
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-muted">
                  Give builders, judges, mentors, and sponsors a better first
                  impression with cleaner structure and a more professional
                  platform experience.
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
