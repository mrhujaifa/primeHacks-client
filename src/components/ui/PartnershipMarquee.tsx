import { Sparkles } from "lucide-react";

type PartnerTone =
  | "primary"
  | "muted"
  | "light"
  | "secondary"
  | "tertiary";

const partners = [
  { name: "OpenAI", tone: "primary" },
  { name: "GitHub", tone: "muted" },
  { name: "Vercel", tone: "light" },
  { name: "AWS Activate", tone: "secondary" },
  { name: "Cloudflare", tone: "primary" },
  { name: "MongoDB", tone: "muted" },
  { name: "Stripe", tone: "tertiary" },
  { name: "Supabase", tone: "secondary" },
] satisfies Array<{ name: string; tone: PartnerTone }>;

const toneClasses = {
  primary: "from-primary/18 to-primary/6 text-primary border-primary/18",
  muted: "from-card/90 to-card/70 text-foreground border-border/70",
  light: "from-white/18 to-white/6 text-foreground border-border/70",
  secondary:
    "from-hero-secondary/18 to-hero-secondary/6 text-hero-secondary border-hero-secondary/18",
  tertiary:
    "from-hero-tertiary/18 to-hero-tertiary/6 text-hero-tertiary border-hero-tertiary/18",
} as const;

const marqueePartners = [...partners, ...partners];

export default function PartnershipMarquee() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="section-shell overflow-hidden rounded-[34px]">
          <div className="relative border-b border-border/70 px-6 py-8 sm:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(124,92,255,0.12),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(86,186,255,0.10),transparent_20%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="badge-theme">
                <Sparkles className="h-3.5 w-3.5" />
                Partnerships
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
                Trusted by ecosystem partners building stronger hackathon
                programs
              </h2>

              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                PrimeHacks is designed for sponsor-backed challenges, community
                launches, and product-focused hackathons that need a premium,
                production-ready home.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden px-0 py-8">
            <div
              className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20"
              style={{
                background:
                  "linear-gradient(90deg, rgb(var(--background) / 0.96), rgb(var(--background) / 0))",
              }}
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20"
              style={{
                background:
                  "linear-gradient(270deg, rgb(var(--background) / 0.96), rgb(var(--background) / 0))",
              }}
            />

            <div className="ph-marquee-track flex min-w-max items-center gap-5 px-5 sm:px-6 lg:px-8">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex h-[86px] min-w-[220px] items-center gap-4 rounded-[24px] border bg-[linear-gradient(180deg,var(--tw-gradient-from),var(--tw-gradient-to))] px-5 shadow-panel backdrop-blur-xl ${toneClasses[partner.tone]}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-sm font-semibold tracking-[0.22em] text-foreground">
                    {partner.name.slice(0, 2).toUpperCase()}
                  </div>

                  <div>
                    <p className="font-display text-[22px] font-semibold tracking-[-0.03em] text-foreground">
                      {partner.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-muted">
                      Official Partner
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
