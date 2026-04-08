"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Crown,
  HelpCircle,
  LayoutGrid,
  Menu,
  Rocket,
  Search,
  Sparkles,
  Trophy,
  Users2,
  X,
  type LucideIcon,
} from "lucide-react";
import { useCurrentUser } from "@/hooks/useSession";
import ProfileDropdown from "./components/ProfileDropdown";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Hackathons",
    href: "/hackathons",
    description: "Explore live challenges and prize pools",
    icon: LayoutGrid,
  },
  {
    label: "Builder",
    href: "/builder",
    description: "Create projects and grow your team",
    icon: Rocket,
  },
  {
    label: "Organizers",
    href: "/organizers",
    description: "Launch branded events with ease",
    icon: Users2,
  },
  {
    label: "Leaderboard",
    href: "/leaderboard",
    description: "Track standout teams and winners",
    icon: Trophy,
  },
];

type NavItem = {
  label: string;
  href: string;
  description: string;
  icon: LucideIcon;
};

export default function PrimeHacksNavbar() {
  const { data: user, isPending } = useCurrentUser();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const searchPanelRef = useRef<HTMLDivElement | null>(null);
  const searchButtonRef = useRef<HTMLButtonElement | null>(null);
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!searchOpen) return;

    const timer = setTimeout(() => {
      searchInputRef.current?.focus();
    }, 120);

    return () => clearTimeout(timer);
  }, [searchOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        searchPanelRef.current &&
        !searchPanelRef.current.contains(target) &&
        searchButtonRef.current &&
        !searchButtonRef.current.contains(target)
      ) {
        setSearchOpen(false);
      }
    };

    if (searchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={`relative overflow-visible border-b transition-all duration-300 ${
            scrolled
              ? "border-primary/16 bg-navbar/92 shadow-[0_24px_70px_rgba(2,6,23,0.26)] backdrop-blur-2xl"
              : "border-navbar-border/70 bg-navbar/88 shadow-[0_18px_48px_rgba(2,6,23,0.14)] backdrop-blur-xl"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at top right, rgb(var(--hero-glow-tertiary) / 0.16), transparent 22%), radial-gradient(circle at 14% 18%, rgb(var(--hero-glow-primary) / 0.12), transparent 20%)",
            }}
          />

          <div className="mx-auto container">
            <div className="relative flex h-[76px] items-center justify-between px-4  lg:px-0">
              <div className="flex items-center gap-8">
                <Link href="/" className="flex items-center gap-3">
                  <div className="ph-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-button-primary text-white">
                    <Sparkles className="h-4 w-4" />
                  </div>

                  <div className="flex flex-col leading-none">
                    <span className="font-display text-[17px] font-semibold tracking-tight text-foreground">
                      PrimeHacks
                    </span>
                    <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-muted">
                      AI Event Platform
                    </span>
                  </div>
                </Link>

                <nav className="hidden items-center gap-7 lg:flex">
                  {navItems.map((item: NavItem) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="text-[14px] font-medium text-muted transition duration-200 hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="hidden items-center gap-2 lg:flex">
                <button
                  ref={searchButtonRef}
                  type="button"
                  onClick={() => setSearchOpen((prev) => !prev)}
                  aria-label="Search"
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full border transition ${
                    searchOpen
                      ? "border-primary/28 bg-primary/12 text-primary"
                      : "border-border/70 bg-card/60 text-muted hover:border-primary/24 hover:text-foreground"
                  }`}
                >
                  <Search className="h-4.5 w-4.5" />
                </button>

                <ThemeToggle showLabel className="hidden xl:inline-flex" />

                <Link
                  href="/premium"
                  className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition duration-300 hover:border-primary/28 hover:bg-primary/14 hover:text-foreground"
                >
                  <Crown className="h-4 w-4" />
                  Premium
                </Link>

                {isPending ? (
                  <div className="group flex items-center gap-3 rounded-full border border-border/70 bg-card/65 pl-1.5 pr-3 py-1.5 text-left shadow-inset backdrop-blur-xl">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-border/60">
                      <div className="h-full w-full animate-pulse bg-foreground/8" />
                    </div>

                    <div className="hidden min-w-[140px] sm:block">
                      <div className="h-4 w-32 animate-pulse rounded bg-foreground/8" />
                      <div className="mt-2 h-3 w-24 animate-pulse rounded bg-foreground/6" />
                    </div>

                    <div className="h-4 w-4 animate-pulse rounded bg-foreground/8" />
                  </div>
                ) : user ? (
                  <ProfileDropdown />
                ) : (
                  <>
                    <Link href="/login" className="btn-theme-ghost">
                      Sign in
                    </Link>
                    <Link href="/register" className="btn-theme">
                      Start 30 day trial
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </>
                )}
              </div>

              <div className="flex items-center gap-2 lg:hidden">
                <ThemeToggle className="px-2.5" />
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen((prev) => !prev);
                    if (!mobileOpen) setSearchOpen(false);
                  }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card/65 text-foreground"
                  aria-label="Toggle menu"
                >
                  {mobileOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div
              className={`hidden overflow-hidden border-t border-border/50 transition-all duration-300 lg:block ${
                searchOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-4 pb-4 pt-4 sm:px-5 lg:px-6">
                <div
                  ref={searchPanelRef}
                  className="section-shell rounded-[1.5rem] p-3"
                >
                  <div className="flex items-center gap-3 rounded-2xl border border-input/80 bg-background/50 px-4 py-3">
                    <Search className="h-5 w-5 shrink-0 text-muted" />
                    <input
                      ref={searchInputRef}
                      type="text"
                      placeholder="Search hackathons, tracks, organizers..."
                      className="h-7 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                    />
                    <kbd className="hidden rounded-lg border border-border/70 bg-card/80 px-2 py-1 text-[11px] text-muted xl:inline-flex">
                      ESC
                    </kbd>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {[
                      "AI",
                      "Web3",
                      "Open Source",
                      "Fintech",
                      "Beginner Friendly",
                    ].map((tag) => (
                      <button
                        key={tag}
                        type="button"
                        className="rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs font-medium text-muted transition hover:border-primary/22 hover:bg-accent/75 hover:text-foreground"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className={`absolute inset-x-3 top-3 bottom-3 overflow-hidden rounded-[2rem] border border-border/70 bg-[linear-gradient(180deg,rgb(var(--background-elevated))_0%,rgb(var(--background))_56%,rgb(var(--background-deep))_100%)] shadow-[0_28px_80px_rgba(2,6,23,0.32)] backdrop-blur-2xl transition-all duration-300 dark:bg-[linear-gradient(180deg,rgba(11,15,35,0.98)_0%,rgba(7,11,28,0.98)_58%,rgba(5,9,22,1)_100%)] ${
            mobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-[0.985] opacity-0"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgb(var(--hero-glow-primary)/0.16),transparent_22%),radial-gradient(circle_at_88%_10%,rgb(var(--hero-glow-secondary)/0.12),transparent_18%),linear-gradient(180deg,rgb(var(--surface-overlay)/0.06),transparent_34%)]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-7 bottom-4 h-12 rounded-full bg-[linear-gradient(90deg,rgb(var(--hero-glow-primary)/0.58),rgb(var(--hero-glow-tertiary)/0.54),rgb(var(--hero-glow-secondary)/0.56))] blur-2xl"
          />

          <div className="relative flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-border/70 px-4 py-4">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className="flex min-w-0 items-center gap-3"
              >
                <div className="ph-glow flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-button-primary text-white">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="min-w-0">
                  <p className="truncate font-display text-[17px] font-semibold tracking-tight text-foreground">
                    PrimeHacks
                  </p>
                  <p className="mt-1 truncate text-[11px] uppercase tracking-[0.28em] text-muted">
                    AI Event Platform
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-2">
                <ThemeToggle className="h-11 px-2.5" />
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border/70 bg-card/70 text-foreground shadow-inset backdrop-blur-xl transition hover:border-primary/24 hover:bg-accent/80"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-5">
              <div className="section-shell rounded-[2rem] p-4">
                <div className="space-y-2">
                  {navItems.map((item: NavItem) => {
                    const isActive = isActiveRoute(item.href);
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-start gap-3 rounded-[1.35rem] border px-4 py-3.5 transition ${
                          isActive
                            ? "border-primary/20 bg-primary/10 shadow-[0_18px_38px_rgb(var(--primary)/0.12)]"
                            : "border-transparent bg-transparent hover:border-border/70 hover:bg-accent/72"
                        }`}
                      >
                        <div
                          className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${
                            isActive
                              ? "border-primary/18 bg-primary/12 text-primary"
                              : "border-border/70 bg-card/70 text-muted"
                          }`}
                        >
                          <Icon className="h-4.5 w-4.5" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[15px] font-semibold text-foreground">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs leading-5 text-muted">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="my-4 h-px bg-border/70" />

                <div className="space-y-3">
                  <div className="rounded-[1.35rem] border border-input/80 bg-background/45 px-4 py-3.5 shadow-inset">
                    <div className="flex items-center gap-3">
                      <Search className="h-4.5 w-4.5 text-muted" />
                      <input
                        type="text"
                        placeholder="Search hackathons..."
                        className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted"
                      />
                    </div>
                  </div>

                  <Link
                    href="/premium"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-[1.35rem] border border-primary/18 bg-primary/10 px-4 py-3.5 text-sm font-semibold text-primary transition hover:border-primary/24 hover:bg-primary/14"
                  >
                    <Crown className="h-4.5 w-4.5" />
                    Premium
                  </Link>

                  <Link
                    href="/help"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-3 rounded-[1.35rem] px-4 py-3.5 text-sm font-semibold text-foreground transition hover:bg-accent/72"
                  >
                    <HelpCircle className="h-4.5 w-4.5 text-muted" />
                    Help Center
                  </Link>
                </div>

                <div className="my-4 h-px bg-border/70" />

                <div className="space-y-3">
                  {isPending ? (
                    <>
                      <div className="h-14 animate-pulse rounded-[1.35rem] border border-border/70 bg-card/70" />
                      <div className="h-12 animate-pulse rounded-[1.35rem] bg-card/70" />
                    </>
                  ) : user ? (
                    <>
                      <div className="rounded-[1.35rem] border border-border/70 bg-card/72 px-4 py-3.5 shadow-inset">
                        <p className="text-sm font-semibold text-foreground">
                          Signed in as {user.name}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-muted">
                          Continue exploring hackathons, teams, and live
                          opportunities.
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-2.5">
                        <Link
                          href="/dashboard"
                          onClick={() => setMobileOpen(false)}
                          className="btn-theme-outline h-11 px-4 text-sm"
                        >
                          Dashboard
                        </Link>

                        <Link
                          href="/profile"
                          onClick={() => setMobileOpen(false)}
                          className="btn-theme-outline h-11 px-4 text-sm"
                        >
                          Profile
                        </Link>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        onClick={() => setMobileOpen(false)}
                        className="btn-theme-outline w-full justify-center"
                      >
                        Sign in
                      </Link>

                      <Link
                        href="/register"
                        onClick={() => setMobileOpen(false)}
                        className="btn-theme w-full justify-center"
                      >
                        Start 30 day trial
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
