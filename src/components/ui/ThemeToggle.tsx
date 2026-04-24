"use client";

import { MoonStar, SunMedium } from "lucide-react";
import { useState } from "react";

type ThemeMode = "dark" | "light";

const STORAGE_KEY = "primehacks-theme";

const getCurrentTheme = (): ThemeMode => {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.classList.contains("dark")
    ? "dark"
    : "light";
};

const applyTheme = (theme: ThemeMode) => {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  window.localStorage.setItem(STORAGE_KEY, theme);
};

export default function ThemeToggle({
  showLabel = false,
  tone = "default",
  className = "",
}: {
  showLabel?: boolean;
  tone?: "default" | "inverse";
  className?: string;
}) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const resolvedTheme =
    typeof document === "undefined" ? theme : getCurrentTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
  const isInverse = tone === "inverse";

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={resolvedTheme === "dark"}
      onClick={() => {
        const updatedTheme = resolvedTheme === "dark" ? "light" : "dark";
        setTheme(updatedTheme);
        applyTheme(updatedTheme);
      }}
      className={`theme-toggle ${
        isInverse
          ? "border-white/15 bg-white/10 text-white hover:border-white/25 hover:bg-white/15"
          : ""
      } ${className}`}
    >
      <span
        suppressHydrationWarning
        className={`flex h-7 w-7 items-center justify-center rounded-full ${
          isInverse ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
        }`}
      >
        {resolvedTheme === "dark" ? (
          <MoonStar className="h-4 w-4" />
        ) : (
          <SunMedium className="h-4 w-4" />
        )}
      </span>

      {showLabel ? (
        <span
          suppressHydrationWarning
          className={`pr-1 text-sm font-medium ${
            isInverse ? "text-white" : "text-foreground"
          }`}
        >
          {resolvedTheme === "dark" ? "Dark" : "Light"}
        </span>
      ) : null}
    </button>
  );
}
