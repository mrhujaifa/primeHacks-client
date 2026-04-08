import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const heroSignals = [
  { value: "25K+", label: "global builders" },
  { value: "320+", label: "hackathons launched" },
  { value: "$2.4M+", label: "prize pools supported" },
];

const heroBackgroundUrl =
  "https://themes.muffingroup.com/be/ai3/wp-content/uploads/2024/08/ai3-home-bg1.webp";

export default function HackathonHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 16% 18%, rgb(var(--hero-glow-primary) / 0.22), transparent 24%),
            radial-gradient(circle at 86% 14%, rgb(var(--hero-glow-secondary) / 0.16), transparent 20%),
            radial-gradient(circle at 88% 8%, rgb(var(--hero-glow-tertiary) / 0.18), transparent 16%),
            linear-gradient(180deg, rgb(var(--background-elevated)) 0%, rgb(var(--background)) 46%, rgb(var(--background-deep)) 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundUrl})`,
          backgroundPosition: "center top",
          opacity: 0.92,
          maskImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 56%, rgba(0,0,0,0.48) 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.98) 56%, rgba(0,0,0,0.48) 78%, transparent 100%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 14%, rgb(var(--hero-glow-primary) / 0.16), transparent 16%),
            radial-gradient(circle at 82% 14%, rgb(var(--hero-glow-tertiary) / 0.16), transparent 18%),
            radial-gradient(circle at 78% 78%, rgb(var(--hero-glow-secondary) / 0.16), transparent 24%)
          `,
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,23,0.14)_0%,rgba(5,8,23,0.20)_16%,rgba(5,8,23,0.36)_54%,rgba(5,8,23,0.70)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,8,23,0.64)_0%,rgba(5,8,23,0.34)_24%,rgba(5,8,23,0.10)_50%,rgba(5,8,23,0.34)_100%)]" />
      <div
        className="absolute inset-x-0 bottom-0 h-[42%]"
        style={{
          background: `
            radial-gradient(circle at 16% 56%, rgb(var(--hero-glow-primary) / 0.18), transparent 26%),
            radial-gradient(circle at 86% 50%, rgb(var(--hero-glow-secondary) / 0.16), transparent 28%),
            linear-gradient(180deg, transparent 0%, rgb(var(--background)) 52%, rgb(var(--background-deep)) 100%)
          `,
        }}
      />
      <div className="absolute left-[-10%] top-[64%] h-px w-[130%] rotate-[-15deg] bg-[linear-gradient(90deg,transparent,rgba(255,124,247,0.34),rgba(92,193,255,0.24),transparent)] blur-sm" />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container mx-auto px-6 pb-28 pt-8 sm:px-8 lg:px-12 lg:pb-36">
          <div className="max-w-5xl">
            <div className="max-w-[720px] text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.05] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.28em] text-white/80 backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              AI-Powered Hackathon Platform
              </div>

              <h1 className="mt-9 max-w-[11ch] font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.3rem]">
                <span className="bg-[linear-gradient(135deg,#8e4dff_0%,#c35dff_54%,#ff88f6_100%)] bg-clip-text text-transparent">
                  AI-Powered
                </span>
                <br />
                Hackathons for
                <br />
                Builders Who Ship
              </h1>

              <p className="mt-6 max-w-[640px] text-base leading-8 text-white/72 sm:text-lg">
                Launch global hackathons, collect standout submissions, and
                help creators, developers, and teams turn bold prototypes into
                prize-winning products on one premium innovation platform.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/register" className="btn-theme min-w-[220px]">
                  Start 30 day trial
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link href="/login" className="btn-theme-outline min-w-[220px]">
                  Explore dashboard
                </Link>
              </div>
            </div>

            <div className="mt-14 grid max-w-5xl gap-3 sm:grid-cols-3">
              {heroSignals.map((signal) => (
                <div
                  key={signal.label}
                  className="rounded-[1.6rem] border border-border/60 bg-[linear-gradient(180deg,rgba(18,22,46,0.52),rgba(10,14,32,0.62))] px-5 py-5 shadow-[0_18px_50px_rgba(2,6,23,0.16)] backdrop-blur-xl"
                >
                  <p className="font-display text-3xl font-semibold text-white">
                    {signal.value}
                  </p>
                  <p className="mt-2 text-sm text-white/62">{signal.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
