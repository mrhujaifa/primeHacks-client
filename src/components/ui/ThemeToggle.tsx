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
  className = "",
}: {
  showLabel?: boolean;
  className?: string;
}) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const resolvedTheme =
    typeof document === "undefined" ? theme : getCurrentTheme();
  const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

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
      className={`theme-toggle ${className}`}
    >
      <span
        suppressHydrationWarning
        className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/12 text-primary"
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
          className="pr-1 text-sm font-medium text-foreground"
        >
          {resolvedTheme === "dark" ? "Dark" : "Light"}
        </span>
      ) : null}
    </button>
  );
}
