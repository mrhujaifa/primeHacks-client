"use client";

import { Sparkles, ShieldCheck, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Modern Hackathon Experience",
    description:
      "A polished and intuitive platform where participants can discover events, join competitions, and submit projects without friction.",
  },
  {
    icon: Trophy,
    title: "Built for Serious Builders",
    description:
      "From solo makers to ambitious teams, PrimeHacks creates a competitive and inspiring environment for real innovation.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Submission Workflow",
    description:
      "Smooth project submission, organized review flow, and better visibility help both participants and organizers stay productive.",
  },
  {
    icon: Users,
    title: "Community-Driven Growth",
    description:
      "Encourage collaboration, visibility, and recognition through a platform designed to support learning and real project momentum.",
  },
];

export default function WhyChoosePrimeHacks() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#160d33_0%,#070b24_32%,#020817_58%,#04102a_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.14),transparent_30%)]" />

      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Why Choose PrimeHacks
          </span>

          <h2 className="mt-4 text-left text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            A premium platform crafted for modern hackathon builders
          </h2>

          <p className="mt-4 text-left text-sm leading-7 text-slate-300 sm:text-base">
            PrimeHacks is designed to make hackathon participation smoother,
            more engaging, and more professional for both participants and
            organizers.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.08]"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.10),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-sky-500/10 to-violet-500/20 shadow-[0_0_30px_rgba(34,211,238,0.08)]">
                    <Icon className="h-6 w-6 text-cyan-300" />
                  </div>

                  <h3 className="mt-5 text-left text-lg font-semibold text-white">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-left text-sm leading-7 text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
