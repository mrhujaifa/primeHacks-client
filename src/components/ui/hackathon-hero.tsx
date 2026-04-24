import Link from "next/link";
import { ArrowRight, Terminal, Box, Cpu } from "lucide-react";

const heroSignals = [
  { value: "25K+", label: "Builders" },
  { value: "320+", label: "Events" },
  { value: "$2.4M", label: "Prizes" },
];

const heroBackgroundUrl =
  "https://themes.muffingroup.com/be/ai3/wp-content/uploads/2024/08/ai3-home-bg1.webp";

export default function HackathonHero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 16% 18%, rgb(var(--hero-glow-primary) / 0.22), transparent 24%), radial-gradient(circle at 86% 14%, rgb(var(--hero-glow-secondary) / 0.16), transparent 20%), radial-gradient(circle at 88% 8%, rgb(var(--hero-glow-tertiary) / 0.18), transparent 16%), linear-gradient(180deg, rgb(var(--background-elevated)) 0%, rgb(var(--background)) 46%, rgb(var(--background-deep)) 100%)`,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackgroundUrl})`,
          opacity: 0.92,
          maskImage:
            "linear-gradient(180deg, rgba(1,3,12,1) 0%, rgba(2,5,20,0.98) 44%, rgba(5,8,34,0.88) 66%, rgba(8,12,44,0.56) 84%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, rgba(1,3,12,1) 0%, rgba(2,5,20,0.98) 44%, rgba(5,8,34,0.88) 66%, rgba(8,12,44,0.56) 84%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex min-h-[100svh] items-center">
        <div className="container mx-auto px-6 pb-28 pt-8 sm:px-8 lg:px-12 lg:pb-36">
          <div className="max-w-5xl">
            <h1 className="font-display text-6xl font-black leading-[0.9] tracking-[-0.05em] text-white sm:text-7xl lg:text-[6.5rem]">
              Build, Compete <br />
              <span className="italic font-light text-primary">
                & Win Big
              </span>{" "}
              <br />
              <span className="bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent">
                Together.
              </span>
            </h1>

            <p className="mt-10 max-w-[540px] text-lg leading-relaxed text-muted-foreground/90 border-l-2 border-primary/30 pl-6">
              The ultimate home for developers to{" "}
              <span className="text-white">launch hackathons</span> and join
              global challenges. Turn your ideas into products with AI-powered
              judging.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-10">
              <Link
                href="/register"
                className="group flex items-center gap-4 bg-white text-black px-10 py-5 rounded-full text-sm font-black transition-all hover:bg-primary hover:text-white hover:shadow-[0_0_30px_rgba(var(--primary),0.3)]"
              >
                Get Started
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Link>

              <div className="flex gap-10">
                {heroSignals.map((s, i) => (
                  <div key={i} className="flex flex-col">
                    <span className="text-2xl font-black text-white tracking-tighter">
                      {s.value}
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 lg:max-w-3xl">
              {[
                { icon: Terminal, label: "Advanced CLI" },
                { icon: Box, label: "Smart Assets" },
                { icon: Cpu, label: "GPU Clusters" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-black uppercase tracking-[0.15em] text-white/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
