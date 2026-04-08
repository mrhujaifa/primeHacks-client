import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    category: "Setup Guide",
    tag: "For Organizers",
    title: "How to launch a polished hackathon without operational chaos",
    excerpt:
      "A practical guide for structuring registrations, timelines, submissions, and updates so your event feels clear from day one.",
    coverClass:
      "bg-[linear-gradient(135deg,rgba(12,10,31,1)_0%,rgba(49,24,113,0.98)_48%,rgba(121,78,255,0.92)_100%)]",
    glowClass:
      "bg-[radial-gradient(circle_at_26%_32%,rgba(255,255,255,0.12),transparent_16%),radial-gradient(circle_at_72%_40%,rgba(86,186,255,0.18),transparent_20%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.28)_100%)]",
    overlayTitle: "Hackathon Setup Guide",
  },
  {
    category: "AI Tools",
    tag: "Operations",
    title: "5 workflow automations that save time during live hackathons",
    excerpt:
      "See where AI and workflow automation can reduce repetitive organizer work across approvals, announcements, judging prep, and support.",
    coverClass:
      "bg-[linear-gradient(135deg,rgba(9,10,30,1)_0%,rgba(27,17,76,1)_42%,rgba(111,72,255,0.92)_100%)]",
    glowClass:
      "bg-[radial-gradient(circle_at_30%_24%,rgba(86,186,255,0.12),transparent_14%),linear-gradient(90deg,rgba(86,186,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:auto,28px_28px,28px_28px]",
    overlayTitle: "AI Ops Stack for Hackathons",
  },
  {
    category: "Case Study",
    tag: "Sponsors",
    title: "How branded challenge tracks can increase sponsor visibility",
    excerpt:
      "A breakdown of what makes sponsor tracks easier to understand, more attractive to builders, and stronger for long-term partnerships.",
    coverClass:
      "bg-[linear-gradient(135deg,rgba(12,11,34,1)_0%,rgba(36,19,57,1)_38%,rgba(95,59,138,0.92)_72%,rgba(173,91,255,0.74)_100%)]",
    glowClass:
      "bg-[radial-gradient(circle_at_16%_46%,rgba(255,255,255,0.10),transparent_14%),radial-gradient(circle_at_82%_22%,rgba(214,115,255,0.20),transparent_18%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.28)_100%)]",
    overlayTitle: "Sponsor-Ready Challenge Design",
  },
  {
    category: "Product Update",
    tag: "For Builders",
    title: "Meet the new mentor and support flow for participant teams",
    excerpt:
      "A cleaner support experience for builders with better routing for help, track questions, mentor requests, and submission readiness.",
    coverClass:
      "bg-[linear-gradient(135deg,rgba(10,9,27,1)_0%,rgba(31,16,63,1)_44%,rgba(18,37,58,0.96)_100%)]",
    glowClass:
      "bg-[radial-gradient(circle_at_24%_28%,rgba(255,255,255,0.10),transparent_16%),radial-gradient(circle_at_72%_36%,rgba(86,186,255,0.18),transparent_18%),linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.3)_100%)]",
    overlayTitle: "PrimeHacks Mentor Flow",
  },
];

export default function HackathonBlog() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Blog
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
            Expert advice, case studies, and strategies to help your team run
            impactful hackathons
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stories.map((story) => (
            <article key={story.title} className="group">
              <div
                className={`relative h-[176px] overflow-hidden rounded-[20px] border border-border/70 ${story.coverClass} shadow-panel`}
              >
                <div className={`absolute inset-0 ${story.glowClass}`} />
                <div className="absolute inset-x-5 bottom-5">
                  <div className="max-w-[220px] rounded-[18px] border border-border/70 bg-background/20 px-4 py-3 backdrop-blur-xl">
                    <p className="font-display text-[24px] font-semibold leading-7 tracking-[-0.04em] text-white">
                      {story.overlayTitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-[8px] border border-primary/14 bg-primary/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-primary">
                  {story.category}
                </span>
                <span className="rounded-[8px] border border-border/70 bg-card/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-muted">
                  {story.tag}
                </span>
              </div>

              <h3 className="mt-4 font-display text-[30px] font-semibold leading-9 tracking-[-0.04em] text-foreground">
                {story.title}
              </h3>
              <p className="mt-3 text-[15px] leading-7 text-muted">
                {story.excerpt}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link href="/blog" className="btn-theme-outline">
            See more stories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
