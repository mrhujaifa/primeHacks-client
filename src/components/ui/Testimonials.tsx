import { MessagesSquare, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We stopped explaining the process in ten different places. Participants understood the timeline, judges had clarity, and our team finally felt in control.",
      name: "Mariam Khan",
      role: "Program Lead",
      company: "Nova Builders League",
    },
    {
      quote:
        "Sponsor-backed tracks looked much more professional. That made partnership conversations easier and gave builders a clearer sense of what each challenge needed.",
      name: "Arian Chowdhury",
      role: "Community Manager",
      company: "LaunchGrid Hackathon",
    },
    {
      quote:
        "The biggest win was structure. Registration, submissions, and judging felt connected instead of separate systems stitched together at the last minute.",
      name: "Sadia Rahman",
      role: "Operations Coordinator",
      company: "ScaleSprint Labs",
    },
  ];
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/18 bg-amber-300/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-amber-100">
              <MessagesSquare className="h-3.5 w-3.5" />
              Testimonials
            </div>

            <h2 className="mt-6 font-[family:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
              Teams choose structure when the event stakes get real
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
            The strongest platforms make it easier for people to understand the
            event, submit with confidence, and move through judging without
            confusion.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="ph-panel rounded-[30px] p-6 sm:p-7"
            >
              <div className="flex items-center gap-1 text-amber-200">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-6 text-base leading-8 text-slate-200">
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-8 border-t border-white/8 pt-5">
                <p className="font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-sm text-slate-400">
                  {item.role} - {item.company}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
