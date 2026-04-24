import Link from "next/link";
import { Search, Crown, ArrowRight, Menu, X, Command } from "lucide-react";
import BrandMark from "@/components/ui/BrandMark";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { NAV_ITEMS } from "./nav-data";
import ProfileDropdown from "../components/ProfileDropdown";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function DesktopNav({
  user,
  isPending,
  scrolled,
  searchOpen,
  setSearchOpen,
  setMobileOpen,
  searchInputRef,
}: any) {
  const [searchValue, setSearchValue] = useState("");
  const isFloating = scrolled || searchOpen;

  // ESC key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setSearchOpen]);

  return (
    <>
      <div
        className={`relative border-b transition-all duration-500 z-[60] ${
          isFloating
            ? "border-navbar-border/80 bg-navbar/90 shadow-xl shadow-primary/5 backdrop-blur-2xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto container flex h-[80px] items-center justify-between px-6 lg:px-8">
          {/* --- Logo & Navigation --- */}
          <div className="flex items-center gap-10">
            <div className="flex-shrink-0 transform transition-transform hover:scale-105 active:scale-95">
              <BrandMark
                href="/"
                size="md"
                tone={isFloating ? "auto" : "inverse"}
                className="cursor-pointer"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group relative text-[14px] font-semibold transition-colors duration-300 ${
                    isFloating
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/72 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                      isFloating ? "bg-primary" : "bg-white"
                    }`}
                  />
                </Link>
              ))}
            </nav>
          </div>

          {/* --- Actions Section --- */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className={`group h-10 px-3 flex items-center gap-3 rounded-xl border transition-all duration-300 
                ${
                  searchOpen
                    ? "border-primary bg-primary/10 text-primary"
                    : isFloating
                      ? "border-border/60 text-muted-foreground hover:border-primary/50 hover:bg-primary/5"
                      : "border-white/15 bg-white/10 text-white/75 hover:border-white/25 hover:bg-white/15 hover:text-white"
                }`}
            >
              <Search className="h-4.5 w-4.5" />
              <div className="flex items-center gap-1.5 opacity-50 group-hover:opacity-100 transition-opacity">
                <Command className="h-3 w-3" />
                <span className="text-[11px] font-bold">K</span>
              </div>
            </button>

            <div
              className={`h-6 w-[1px] mx-1 ${
                isFloating ? "bg-border/60" : "bg-white/20"
              }`}
            />
            <ThemeToggle
              showLabel
              tone={isFloating ? "default" : "inverse"}
              className="hidden xl:inline-flex"
            />

            <Link
              href="/premium"
              className="relative group inline-flex items-center gap-2 rounded-xl border border-amber-500/30 bg-amber-500/5 px-5 py-2.5 text-sm font-bold text-amber-600 dark:text-amber-400 transition-all hover:bg-amber-500/10"
            >
              <Crown className="h-4 w-4 fill-amber-500/20 group-hover:animate-bounce" />
              <span>Premium</span>
            </Link>

            {isPending ? (
              <div className="h-10 w-32 animate-pulse rounded-xl bg-muted" />
            ) : user ? (
              <ProfileDropdown />
            ) : (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className={`px-4 py-2.5 text-sm font-bold transition ${
                    isFloating
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/72 hover:text-white"
                  }`}
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="group flex items-center gap-2 rounded-xl bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:translate-y-[-2px]"
                >
                  Start trial
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className={`lg:hidden h-11 w-11 flex items-center justify-center rounded-xl border transition ${
              isFloating
                ? "border-border bg-secondary text-secondary-foreground"
                : "border-white/15 bg-white/10 text-white"
            }`}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {/* --- Search Overlay Logic --- */}
        <AnimatePresence>
          {searchOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSearchOpen(false)}
                className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm z-[-1]"
              />

              {/* Search Panel */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="absolute top-full left-0 w-full bg-background border-b border-border/50 shadow-2xl z-[55] overflow-hidden"
              >
                <div className="container mx-auto px-6 py-10">
                  <div className="max-w-3xl mx-auto space-y-6">
                    {/* Search Input Group */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl opacity-0 group-focus-within:opacity-40 transition-opacity" />
                      <div className="relative flex items-center bg-card/85 border-2 border-border/50 rounded-2xl p-2 group-focus-within:border-primary/50 group-focus-within:bg-background transition-all">
                        <div className="pl-4 pr-3 text-muted-foreground">
                          <Search className="h-6 w-6" />
                        </div>
                        <input
                          autoFocus
                          ref={searchInputRef}
                          value={searchValue}
                          onChange={(e) => setSearchValue(e.target.value)}
                          placeholder="Search hackathons, builders, or events..."
                          className="w-full bg-transparent py-4 text-lg outline-none placeholder:text-muted-foreground/60"
                        />
                        <div className="flex items-center gap-2 pr-4">
                          {searchValue && (
                            <button
                              type="button"
                              onClick={() => setSearchValue("")}
                              className="p-1 hover:bg-accent rounded-md text-muted-foreground"
                            >
                              <X className="h-5 w-5" />
                            </button>
                          )}
                          <kbd className="hidden md:flex h-7 items-center gap-1 rounded border bg-background px-2 font-mono text-[10px] font-medium text-muted-foreground">
                            ESC
                          </kbd>
                        </div>
                      </div>
                    </div>

                    {/* Quick Suggestions / Recent Searches */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 animate-in fade-in slide-in-from-top-4 duration-500">
                      <div>
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-4">
                          Trending Hacks
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "AI Agents",
                            "Solana",
                            "Web3 Gaming",
                            "Next.js 15",
                          ].map((tag) => (
                            <button
                              key={tag}
                              className="px-3 py-1.5 rounded-lg bg-secondary/50 border border-border/50 text-xs font-semibold hover:border-primary/30 hover:text-primary transition-all"
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="border-l border-border/50 pl-8 hidden md:block">
                        <h4 className="text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-4">
                          Quick Links
                        </h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                            <ArrowRight className="h-3 w-3" /> Explore all
                            Hackathons
                          </div>
                          <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                            <ArrowRight className="h-3 w-3" /> View Global
                            Leaderboard
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
