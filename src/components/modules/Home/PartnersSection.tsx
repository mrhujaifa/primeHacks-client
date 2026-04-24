"use client";

import { ShieldCheck, Sparkles } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      name: "Google",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Microsoft",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    },
    {
      name: "Meta",
      url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg",
    },
    {
      name: "Amazon",
      url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
    {
      name: "OpenAI",
      url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_logo.svg",
    },
    {
      name: "NVIDIA",
      url: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
    },
  ];

  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-background px-6 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[300px] w-[700px] -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute bottom-0 left-1/4 h-[220px] w-[220px] rounded-full bg-hero-secondary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[180px] w-[180px] rounded-full bg-hero-tertiary/10 blur-[110px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--grid)_/_0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--grid)_/_0.04)_1px,transparent_1px)] bg-[size:36px_36px] opacity-40" />
      </div>

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 backdrop-blur-xl">
            <ShieldCheck className="h-4 w-4 text-hero-secondary" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted">
              Trusted Ecosystem
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Supported by{" "}
            <span className="bg-gradient-to-r from-primary via-hero-tertiary to-hero-secondary bg-clip-text text-transparent">
              Global Innovation Leaders
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted md:text-base">
            PrimeHacks is built for the future of builders - inspired by the
            world&apos;s most ambitious technology companies, research labs, and
            infrastructure pioneers.
          </p>
        </div>

        <div className="card-theme relative mb-10 overflow-hidden rounded-[32px] p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--primary)_/_0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgb(var(--hero-glow-secondary)_/_0.1),transparent_30%)]" />

          <div className="relative z-10 grid items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                PrimeHacks Partner Network
              </div>

              <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                Building credible hackathon experiences with trusted technology
                alignment.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted md:text-base">
                From AI tooling and cloud platforms to developer ecosystems and
                research-driven infrastructure, this platform reflects a
                world-class standard for innovation, community, and execution.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {partners.slice(0, 4).map((partner, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white/95 p-5 shadow-inset transition-all duration-500 hover:-translate-y-1 hover:border-primary/30"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-hero-secondary/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/10 group-hover:to-hero-secondary/10 group-hover:opacity-100" />
                  <div className="relative flex h-20 items-center justify-center">
                    <img
                      src={partner.url}
                      alt={partner.name}
                      className="h-8 w-auto grayscale opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/70 bg-white/95 p-6 shadow-inset transition-all duration-500 hover:-translate-y-1 hover:border-hero-secondary/30"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(var(--primary)_/_0.08),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-16 items-center justify-center">
                <img
                  src={partner.url}
                  alt={partner.name}
                  className="h-7 w-auto grayscale opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-border/70 bg-card/60 px-5 py-3 backdrop-blur-xl">
            <span className="text-sm text-muted">
              Want your brand to support the next generation of builders?
            </span>
            <button className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-primary/15">
              Become a Sponsor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
