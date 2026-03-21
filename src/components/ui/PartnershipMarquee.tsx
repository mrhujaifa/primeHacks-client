import { Sparkles } from "lucide-react";

type PartnerTone =
  | "cyan"
  | "slate"
  | "white"
  | "amber"
  | "emerald"
  | "violet";

const partners = [
  { name: "OpenAI", tone: "cyan" },
  { name: "GitHub", tone: "slate" },
  { name: "Vercel", tone: "white" },
  { name: "AWS Activate", tone: "amber" },
  { name: "Cloudflare", tone: "cyan" },
  { name: "MongoDB", tone: "emerald" },
  { name: "Stripe", tone: "violet" },
  { name: "Supabase", tone: "cyan" },
] satisfies Array<{ name: string; tone: PartnerTone }>;

const toneClasses = {
  cyan: "from-cyan-300/16 to-cyan-300/6 text-cyan-100 border-cyan-300/18",
  slate: "from-slate-200/10 to-slate-200/5 text-slate-100 border-white/10",
  white: "from-white/14 to-white/6 text-white border-white/12",
  amber: "from-amber-300/16 to-amber-300/6 text-amber-100 border-amber-300/18",
  emerald:
    "from-emerald-300/16 to-emerald-300/6 text-emerald-100 border-emerald-300/18",
  violet:
    "from-violet-300/16 to-violet-300/6 text-violet-100 border-violet-300/18",
} as const;

const marqueePartners = [...partners, ...partners];

export default function PartnershipMarquee() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="ph-panel overflow-hidden rounded-[34px]">
          <div className="relative border-b border-white/8 px-6 py-8 sm:px-8 lg:px-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_16%,rgba(103,232,249,0.12),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(245,158,11,0.12),transparent_20%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/18 bg-cyan-300/10 px-4 py-2 text-xs uppercase tracking-[0.28em] text-cyan-100">
                <Sparkles className="h-3.5 w-3.5" />
                Partnerships
              </div>

              <h2 className="mt-5 font-[family:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.05em] text-white sm:text-4xl lg:text-5xl">
                Trusted by ecosystem partners building stronger hackathon
                programs
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                PrimeHacks is designed for sponsor-backed challenges, community
                launches, and product-focused hackathons that need a premium,
                production-ready home.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden px-0 py-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(90deg,rgba(6,17,26,0.98),rgba(6,17,26,0))]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(270deg,rgba(6,17,26,0.98),rgba(6,17,26,0))]" />

            <div className="ph-marquee-track flex min-w-max items-center gap-5 px-5 sm:px-6 lg:px-8">
              {marqueePartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className={`flex h-[86px] min-w-[220px] items-center gap-4 rounded-[24px] border bg-[linear-gradient(180deg,var(--tw-gradient-from),var(--tw-gradient-to))] px-5 shadow-[0_18px_40px_rgba(2,8,18,0.18)] backdrop-blur-xl ${toneClasses[partner.tone]}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06] text-sm font-semibold tracking-[0.22em] text-white">
                    {partner.name.slice(0, 2).toUpperCase()}
                  </div>

                  <div>
                    <p className="font-[family:var(--font-space-grotesk)] text-[22px] font-semibold tracking-[-0.03em] text-white">
                      {partner.name}
                    </p>
                    <p className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-400">
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
