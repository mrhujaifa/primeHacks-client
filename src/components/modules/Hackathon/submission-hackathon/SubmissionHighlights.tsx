import {
  ShieldCheck,
  FolderGit2,
  Layers3,
  Rocket,
  Video,
  FileText,
} from "lucide-react";

const items = [
  {
    icon: Rocket,
    title: "Strong First Impression",
    description:
      "A polished submission helps judges quickly understand your idea, value, and execution quality.",
  },
  {
    icon: FolderGit2,
    title: "Share Key Links",
    description:
      "Provide repository, demo, and video links so reviewers can validate your work easily.",
  },
  {
    icon: Layers3,
    title: "Highlight Your Stack",
    description:
      "Show the core technologies you used to build the product and demonstrate technical depth.",
  },
  {
    icon: FileText,
    title: "Clear Project Story",
    description:
      "Summarize the problem, solution, and impact in a way that feels concise and convincing.",
  },
  {
    icon: Video,
    title: "Demo Matters",
    description:
      "A good live demo or video walkthrough can strongly improve the overall evaluation experience.",
  },
  {
    icon: ShieldCheck,
    title: "Professional Submission",
    description:
      "Well-structured project details make your hackathon entry look more complete and serious.",
  },
];

export const SubmissionHighlights = () => {
  return (
    <div className="card-theme rounded-[28px] p-5 md:p-6">
      <div className="mb-5">
        <h3 className="text-lg font-semibold text-foreground md:text-xl">
          What makes a great submission?
        </h3>
        <p className="mt-2 text-sm leading-6 text-muted">
          Make your project easier to review with a clean summary, useful links,
          and clear technical details.
        </p>
      </div>

      <div className="space-y-3">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border/70 bg-background/35 p-4 transition duration-300 hover:border-primary/20 hover:bg-accent/60"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
