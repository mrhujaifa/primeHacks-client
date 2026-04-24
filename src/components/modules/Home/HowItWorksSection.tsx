"use client";

import {
  BadgeCheck,
  CalendarRange,
  FolderGit2,
  Route,
  Search,
} from "lucide-react";
import HomeSectionHeader from "./HomeSectionHeader";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Explore Hackathons",
    description:
      "Users can browse active and upcoming hackathons with clear details, deadlines, and category-based discovery.",
    accent: "text-primary",
    surface: "border-primary/20 bg-primary/10",
  },
  {
    icon: CalendarRange,
    step: "02",
    title: "Join the Right Challenge",
    description:
      "Participants can choose events that match their interests, skill level, and timeline without confusion.",
    accent: "text-hero-secondary",
    surface: "border-hero-secondary/20 bg-hero-secondary/10",
  },
  {
    icon: FolderGit2,
    step: "03",
    title: "Build & Submit Projects",
    description:
      "A structured submission flow makes it easy to upload project details, links, and supporting resources in one place.",
    accent: "text-hero-tertiary",
    surface: "border-hero-tertiary/20 bg-hero-tertiary/10",
  },
  {
    icon: BadgeCheck,
    step: "04",
    title: "Review & Get Recognized",
    description:
      "Organizers can manage reviews efficiently while participants track their project progress and final outcomes.",
    accent: "text-success",
    surface: "border-success/20 bg-success/10",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(var(--background)_/_0.72),rgb(var(--card)_/_0.5),rgb(var(--background-deep)_/_0.78))]" />
      <div className="absolute inset-0 ph-grid opacity-20" />

      <div className="container relative mx-auto">
        <HomeSectionHeader
          eyebrow="How It Works"
          title="A simple path from"
          highlight="Discovery to Submission."
          description="PrimeHacks keeps the journey intuitive for participants and organized for admins, so the entire hackathon experience feels smooth from start to finish."
          icon={Route}
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={index}
                className="card-theme group rounded-[1.75rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="absolute right-5 top-5 font-display text-5xl font-semibold text-foreground/[0.04] transition duration-300 group-hover:text-primary/10">
                  {item.step}
                </div>

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border ${item.surface} ${item.accent}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <span
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${item.surface} ${item.accent}`}
                    >
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold leading-7 text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-border/45">
                    <div className="h-full w-full rounded-full bg-button-primary opacity-80 transition duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
