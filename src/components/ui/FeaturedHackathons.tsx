import Link from "next/link";
import {
  ArrowRight,
  GitBranch,
  Trophy,
  UsersRound,
  Clock3,
} from "lucide-react";

type FeaturedAccent = "primary" | "secondary" | "tertiary" | "mixed";

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
    accent: "primary",
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
    accent: "secondary",
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
    accent: "tertiary",
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
    accent: "mixed",
    initials: "CZ",
  },
] satisfies Array<{
  status: string;
  title: string;
  description: string;
  participants: number;
  projects: number;
  prize: string;
  daysLeft: number;
  progress: string;
  accent: FeaturedAccent;
  initials: string;
}>;

const accentStyles = {
  primary: {
    badge: "border-primary/18 bg-primary/85 text-white shadow-glow",
    meta: "text-primary",
    pill: "border-primary/18 bg-primary/10 text-primary",
    cover:
      "linear-gradient(135deg, rgb(var(--background-elevated)), rgb(var(--primary) / 0.72), rgb(var(--background-deep)))",
    art: "radial-gradient(circle at 20% 18%, rgb(var(--surface-overlay) / 0.44), transparent 14%), radial-gradient(circle at 72% 26%, rgb(var(--hero-glow-secondary) / 0.26), transparent 20%), linear-gradient(180deg, transparent 0%, rgb(var(--background-deep) / 0.32) 100%)",
    logo: "linear-gradient(135deg, rgb(var(--primary)), rgb(var(--hero-glow-secondary)))",
  },
  secondary: {
    badge: "border-hero-secondary/18 bg-hero-secondary/85 text-white shadow-glow-soft",
    meta: "text-hero-secondary",
    pill: "border-hero-secondary/18 bg-hero-secondary/10 text-hero-secondary",
    cover:
      "linear-gradient(135deg, rgb(var(--background-elevated)), rgb(var(--hero-glow-secondary) / 0.6), rgb(var(--background-deep)))",
    art: "radial-gradient(circle at 22% 24%, rgb(var(--surface-overlay) / 0.34), transparent 14%), radial-gradient(circle at 60% 34%, rgb(var(--primary) / 0.28), transparent 24%), linear-gradient(180deg, transparent 0%, rgb(var(--background-deep) / 0.24) 100%)",
    logo: "linear-gradient(135deg, rgb(var(--hero-glow-secondary)), rgb(var(--primary)))",
  },
  tertiary: {
    badge: "border-hero-tertiary/18 bg-hero-tertiary/80 text-white shadow-glow-soft",
    meta: "text-hero-tertiary",
    pill: "border-hero-tertiary/18 bg-hero-tertiary/10 text-hero-tertiary",
    cover:
      "linear-gradient(135deg, rgb(var(--background-elevated)), rgb(var(--hero-glow-tertiary) / 0.64), rgb(var(--background-deep)))",
    art: "radial-gradient(circle at 14% 24%, rgb(var(--surface-overlay) / 0.28), transparent 14%), radial-gradient(circle at 82% 22%, rgb(var(--primary) / 0.34), transparent 18%), linear-gradient(180deg, transparent 0%, rgb(var(--background-deep) / 0.26) 100%)",
    logo: "linear-gradient(135deg, rgb(var(--hero-glow-tertiary)), rgb(var(--primary)))",
  },
  mixed: {
    badge: "border-primary/18 bg-primary/85 text-white shadow-glow",
    meta: "text-primary",
    pill: "border-primary/18 bg-primary/10 text-primary",
    cover:
      "linear-gradient(135deg, rgb(var(--background-elevated)), rgb(var(--secondary-foreground) / 0.74), rgb(var(--hero-glow-secondary) / 0.48), rgb(var(--background-deep)))",
    art: "radial-gradient(circle at 18% 18%, rgb(var(--surface-overlay) / 0.32), transparent 12%), radial-gradient(circle at 78% 30%, rgb(var(--hero-glow-secondary) / 0.26), transparent 18%), linear-gradient(180deg, transparent 0%, rgb(var(--background-deep) / 0.3) 100%)",
    logo: "linear-gradient(135deg, rgb(var(--secondary-foreground)), rgb(var(--hero-glow-secondary)))",
  },
} as const;

export default function FeaturedHackathons() {
  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.10),transparent_26%),linear-gradient(180deg,transparent_0%,rgba(7,11,28,0.16)_100%)]" />
      <div className="relative container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <span className="badge-theme px-4 py-1 text-[11px] tracking-[0.22em]">
            Featured Hackathons
          </span>

          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            Discover high-impact challenges worth joining
          </h2>

          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Explore curated hackathons with strong rewards, active participants,
            and meaningful problem spaces.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredHackathons.map((hackathon) => (
            <article
              key={hackathon.title}
              className="card-theme group rounded-[1.8rem] transition duration-300 hover:-translate-y-1.5 hover:border-primary/25"
            >
              <div
                className="relative h-[180px] overflow-hidden"
                style={{
                  background: accentStyles[hackathon.accent].cover,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: accentStyles[hackathon.accent].art,
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0)_10%,rgba(6,10,18,0.18)_55%,rgba(6,10,18,0.36)_100%)]" />

                <div className="absolute left-4 top-4">
                  <span
                    className={`inline-flex rounded-xl border px-3 py-2 text-[12px] font-semibold tracking-[0.01em] ${accentStyles[hackathon.accent].badge}`}
                  >
                    {hackathon.status}
                  </span>
                </div>

                <div className="absolute bottom-[-30px] left-5 flex h-[64px] w-[64px] items-center justify-center rounded-2xl border border-white/30 bg-background/90 p-[4px] shadow-panel backdrop-blur-md">
                  <div
                    className="flex h-full w-full items-center justify-center rounded-[14px] text-lg font-semibold text-white"
                    style={{
                      background: accentStyles[hackathon.accent].logo,
                    }}
                  >
                    {hackathon.initials}
                  </div>
                </div>
              </div>

              <div className="px-5 pb-5 pt-11">
                <div className="flex items-center justify-between gap-3 text-[12px] text-muted">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <UsersRound
                        className={`h-3.5 w-3.5 ${accentStyles[hackathon.accent].meta}`}
                      />
                      <span>{hackathon.participants}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <GitBranch className="h-3.5 w-3.5 text-primary" />
                      <span>{hackathon.projects}</span>
                    </div>
                  </div>

                  <div
                    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] ${accentStyles[hackathon.accent].pill}`}
                  >
                    <Clock3 className="h-3.5 w-3.5" />
                    {hackathon.daysLeft} days left
                  </div>
                </div>

                <h3 className="mt-4 font-display text-[21px] font-semibold leading-8 tracking-[-0.03em] text-foreground">
                  {hackathon.title}
                </h3>

                <p className="mt-3 min-h-[72px] text-[14px] leading-7 text-muted">
                  {hackathon.description}
                </p>

                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Registration progress
                    </span>
                    <span
                      className={`text-[12px] font-semibold ${accentStyles[hackathon.accent].meta}`}
                    >
                      {hackathon.progress}
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-border/40">
                    <div
                      className="h-full rounded-full shadow-glow"
                      style={{
                        width: hackathon.progress,
                        backgroundImage:
                          "linear-gradient(90deg, rgb(var(--gradient-start)), rgb(var(--gradient-end)))",
                      }}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-end justify-between border-t border-border/70 pt-4">
                  <div>
                    <p className="text-[12px] uppercase tracking-[0.16em] text-muted-foreground">
                      Prize Pool
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Trophy className="h-4 w-4 text-primary" />
                      <p className="font-display text-[28px] font-semibold leading-none text-foreground">
                        {hackathon.prize}
                      </p>
                    </div>
                  </div>

                  <button className="btn-theme-outline rounded-xl px-3.5 py-2 text-[13px]">
                    View details
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
