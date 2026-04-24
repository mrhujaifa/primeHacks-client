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
    icon: "h-9 w-9",
    title: "text-[18px]",
    subtitle: "text-[9px]",
  },
  md: {
    icon: "h-11 w-11",
    title: "text-[21px]",
    subtitle: "text-[10px]",
  },
  lg: {
    icon: "h-13 w-13",
    title: "text-[24px]",
    subtitle: "text-[11px]",
  },
} as const;

const BrandMark = ({
  href = "/",
  size = "md",
  subtitle = "Hack the Future",
  showSubtitle = true,
  tone = "auto",
  className = "",
  onClick,
}: BrandMarkProps) => {
  const sizeStyles = sizeMap[size];
  const isInverse = tone === "inverse";
  const titleColor = isInverse ? "text-white" : "text-foreground";
  const subtitleColor = isInverse
    ? "text-white/60"
    : "text-muted-foreground/70";

  return (
    <Link
      href={href}
      aria-label="PrimeHacks home"
      onClick={onClick}
      className={`inline-flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <div className="relative shrink-0">
        <Image
          src="/logos/app-logo.png"
          alt="PrimeHacks logo"
          width={400}
          height={400}
          priority
          className={`object-contain transition-all duration-500 ${sizeStyles.icon}`}
        />
      </div>

      <div className="flex flex-col justify-center leading-none">
        <p
          className={`${sizeStyles.title} tracking-tighter flex items-center gap-0.5`}
        >
          <span className={`font-medium ${titleColor}`}>Prime</span>
          <span className="font-black bg-gradient-to-br from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">
            Hacks
          </span>
        </p>

        {showSubtitle && (
          <p
            className={`mt-1 font-bold uppercase tracking-[0.3em] ${sizeStyles.subtitle} ${subtitleColor}`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BrandMark;
