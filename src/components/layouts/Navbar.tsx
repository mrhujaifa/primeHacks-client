"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Crown,
  HelpCircle,
  Menu,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useCurrentUser } from "@/hooks/useSession";
import ProfileDropdown from "./components/ProfileDropdown";

const navItems = [
  { label: "Hackathons", href: "/hackathons" },
  { label: "Builder", href: "/builder" },
  { label: "Organizers", href: "/organizers" },
  { label: "Leaderboard", href: "/leaderboard" },
];

export default function PrimeHacksNavbar() {
  const { data: user, isPending } = useCurrentUser();
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

  useEffect(() => {
    if (mobileOpen) {
      setSearchOpen(false);
    }
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-white/12 bg-[rgba(7,12,24,0.86)] shadow-[0_20px_60px_rgba(2,6,23,0.34)] backdrop-blur-2xl"
            : "border-white/10 bg-[rgba(10,15,28,0.62)] backdrop-blur-xl"
        }`}
      >
        <div className="mx-auto container">
          <div className="flex h-[76px] items-center justify-between px-4 sm:px-5 lg:px-6">
            {/* Left */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <div className="ph-glow flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#0f172a,#0e7490_54%,#f59e0b)] text-white shadow-[0_10px_24px_rgba(8,145,178,0.22)]">
                  <Sparkles className="h-4 w-4" />
                </div>

                <div className="flex flex-col leading-none">
                  <span className="font-[family:var(--font-space-grotesk)] text-[17px] font-semibold tracking-tight text-white">
                    PrimeHacks
                  </span>
                  <span className="mt-1 text-[11px] uppercase tracking-[0.28em] text-slate-400">
                    Industrial Launchpad
                  </span>
                </div>
              </Link>

              <nav className="hidden items-center gap-7 lg:flex">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-[14px] font-medium text-slate-300 transition duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right */}
            <div className="hidden items-center gap-2 lg:flex">
              <button
                ref={searchButtonRef}
                type="button"
                onClick={() => setSearchOpen((prev) => !prev)}
                aria-label="Search"
                className={`inline-flex h-11 w-11 items-center justify-center rounded-full border text-slate-300 transition ${
                  searchOpen
                    ? "border-cyan-300/30 bg-cyan-400/10 text-white"
                    : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Search className="h-4.5 w-4.5" />
              </button>

              <Link
                href="/premium"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-amber-300/20 bg-[linear-gradient(135deg,rgba(251,191,36,0.16),rgba(249,115,22,0.12),rgba(255,255,255,0.05))] px-4 py-2.5 text-sm font-semibold text-amber-200 shadow-[0_10px_30px_rgba(245,158,11,0.16),inset_0_1px_0_rgba(255,255,255,0.12)] transition duration-300 hover:-translate-y-[1px] hover:border-amber-200/30 hover:text-white hover:shadow-[0_14px_38px_rgba(245,158,11,0.24),inset_0_1px_0_rgba(255,255,255,0.16)]"
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.18),transparent)] opacity-0 transition duration-500 group-hover:translate-x-full group-hover:opacity-100" />
                <Crown className="relative h-4 w-4 text-amber-300" />
                <span className="relative">Premium</span>
              </Link>

              {user ? (
                <ProfileDropdown />
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-full px-4 py-2.5 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] px-4 py-2.5 text-sm font-semibold text-slate-950 transition duration-200 hover:scale-[1.02]"
                  >
                    Launch Workspace
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Toggle */}
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-slate-200 lg:hidden"
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

        {/* Desktop Search Panel */}
        <div
          className={`hidden lg:block overflow-hidden border-t border-white/8 transition-all duration-300 ${
            searchOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mx-auto container px-4 pb-4 pt-4 sm:px-5 lg:px-6">
            <div
              ref={searchPanelRef}
              className="rounded-[24px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(9,18,30,0.96),rgba(5,13,22,0.96))] p-3 shadow-[0_18px_50px_rgba(2,8,18,0.30)]"
            >
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                <Search className="h-5 w-5 shrink-0 text-slate-400" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search hackathons, tracks, organizers..."
                  className="h-7 w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                />
                <kbd className="hidden rounded-lg border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] text-slate-400 xl:inline-flex">
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
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${
          mobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-slate-950/72 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`absolute left-4 right-4 top-[92px] rounded-[28px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(7,18,28,0.98),rgba(5,13,22,0.98))] p-4 shadow-[0_30px_80px_rgba(2,8,18,0.52)] transition-all duration-300 ${
            mobileOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="space-y-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <div className="flex items-center gap-3">
                <Search className="h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search hackathons..."
                  className="w-full bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500"
                />
              </div>
            </div>

            <Link
              href="/premium"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-orange-300 transition hover:bg-orange-500/10"
            >
              <Crown className="h-4 w-4" />
              Premium
            </Link>

            <Link
              href="/help"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05]"
            >
              <HelpCircle className="h-4 w-4" />
              Help Center
            </Link>
          </div>

          <div className="my-4 h-px bg-white/10" />

          <div className="flex flex-col gap-2">
            <Link
              href="/login"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
            >
              Sign in
            </Link>

            <Link
              href="/register"
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] px-4 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90"
            >
              Launch Workspace
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
