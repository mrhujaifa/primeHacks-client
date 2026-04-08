"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEventHandler } from "react";

type BrandMarkProps = {
  href?: string;
  size?: "sm" | "md" | "lg";
  subtitle?: string;
  showSubtitle?: boolean;
  tone?: "auto" | "inverse";
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

const sizeMap = {
  sm: {
    icon: "h-10 w-10",
    title: "text-[16px]",
    subtitle: "text-[10px]",
  },
  md: {
    icon: "h-11 w-11",
    title: "text-[17px]",
    subtitle: "text-[11px]",
  },
  lg: {
    icon: "h-12 w-12",
    title: "text-[19px]",
    subtitle: "text-[11px]",
  },
} as const;

const BrandMark = ({
  href = "/",
  size = "md",
  subtitle = "AI Event Platform",
  showSubtitle = true,
  tone = "auto",
  className = "",
  onClick,
}: BrandMarkProps) => {
  const sizeStyles = sizeMap[size];
  const isInverse = tone === "inverse";
  const titleColor = isInverse ? "text-white" : "text-foreground";
  const subtitleColor = isInverse ? "text-white/68" : "text-muted";

  return (
    <Link
      href={href}
      aria-label="PrimeHacks home"
      onClick={onClick}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <Image
        src="/logos/app-logo.png"
        alt="PrimeHacks logo"
        width={500}
        height={500}
        priority={false}
        className={`shrink-0 object-contain ${sizeStyles.icon}`}
      />

      <div className="min-w-0 leading-none">
        <p
          className={`font-brand ${sizeStyles.title} font-semibold tracking-[-0.06em] ${titleColor}`}
        >
          <span>Prime</span>
          <span className="bg-[linear-gradient(135deg,rgb(var(--primary))_0%,rgb(var(--hero-glow-secondary))_100%)] bg-clip-text text-transparent">
            Hacks
          </span>
        </p>

        {showSubtitle ? (
          <p
            className={`mt-1 text-[11px] uppercase tracking-[0.28em] ${subtitleColor}`}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </Link>
  );
};

export default BrandMark;
