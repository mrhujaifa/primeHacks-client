import type { LucideIcon } from "lucide-react";

type HomeSectionHeaderProps = {
  eyebrow: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  align?: "center" | "left";
  maxWidth?: string;
  className?: string;
};

const HomeSectionHeader = ({
  eyebrow,
  title,
  highlight,
  description,
  icon: Icon,
  align = "center",
  maxWidth = "max-w-3xl",
  className = "",
}: HomeSectionHeaderProps) => {
  const isLeftAligned = align === "left";

  return (
    <div
      className={`${isLeftAligned ? "mx-0 text-left" : "mx-auto text-center"} ${maxWidth} ${className}`}
    >
      <div className={`badge-theme ${isLeftAligned ? "" : "mx-auto"}`}>
        <Icon className="h-3.5 w-3.5" />
        {eyebrow}
      </div>

      <h2 className="mt-6 font-display text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">
        {title} <span className="ph-text-gradient">{highlight}</span>
      </h2>

      <p
        className={`${isLeftAligned ? "mx-0" : "mx-auto"} mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base`}
      >
        {description}
      </p>
    </div>
  );
};

export default HomeSectionHeader;
