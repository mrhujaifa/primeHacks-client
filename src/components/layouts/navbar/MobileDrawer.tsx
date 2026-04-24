"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  X,
  LayoutGrid,
  Plus,
  MessageSquare,
  User,
  Home,
  LayoutDashboard,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import BrandMark from "@/components/ui/BrandMark";

type MobileNavigationProps = {
  isOpen?: boolean;
  onClose?: () => void;
  user?: unknown;
  isActive?: (href: string) => boolean;
};

type MobileNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  isAction?: boolean;
};

export default function MobileNavigation({
  user,
  isActive,
}: MobileNavigationProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems: MobileNavItem[] = [
    { label: "Home", href: "/", icon: Home },
    { label: "Hackathons", href: "/hackathons", icon: LayoutGrid },
    { label: "Chat", href: "/messages", icon: MessageSquare },
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    // { label: "Host", href: "/host", isAction: true },
    { label: "Profile", href: user ? "/profile" : "/login", icon: User },
  ];

  return (
    <>
      {/* --- Top Header --- */}
      <header className="fixed top-0 inset-x-0 z-[90] border-b border-navbar-border/80 bg-navbar/90 shadow-sm shadow-primary/5 backdrop-blur-xl lg:hidden">
        <div className="h-16 px-5 flex items-center justify-between relative overflow-hidden">
          {/* Logo Section */}
          <AnimatePresence mode="wait">
            {!isSearchOpen && (
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
              >
                <BrandMark href="/" size="sm" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Search System */}
          <div
            className={`flex items-center justify-end transition-all duration-300 ${
              isSearchOpen ? "flex-1 ml-2" : "w-10"
            }`}
          >
            <motion.div
              animate={{ width: isSearchOpen ? "100%" : "40px" }}
              className="relative flex items-center h-10 overflow-hidden rounded-xl border border-border/70 bg-card/80"
            >
              <input
                type="text"
                placeholder="Search hackathons..."
                className={`w-full bg-transparent pl-10 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 ${
                  isSearchOpen ? "opacity-100" : "opacity-0"
                }`}
                autoFocus={isSearchOpen}
              />

              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
              >
                {isSearchOpen ? (
                  <X className="h-4 w-4 text-primary" />
                ) : (
                  <Search className="h-4.5 w-4.5" />
                )}
              </button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* --- Bottom Navigation --- */}
      <nav className="fixed bottom-0 inset-x-0 z-[100] border-t border-navbar-border/80 bg-navbar/90 pb-safe shadow-[0_-14px_40px_rgb(var(--primary)_/_0.08)] backdrop-blur-2xl lg:hidden">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item, idx) => {
            const Icon = item.icon;
            const active = isActive ? isActive(item.href) : false;

            // Center Action Button (Plus)
            if (item.isAction) {
              return (
                <Link key={idx} href={item.href} className="relative -mt-8">
                  <div className="h-12 w-12 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 rotate-45 transition-transform active:scale-90 group">
                    <Plus className="h-6 w-6 text-primary-foreground -rotate-45" />
                  </div>
                </Link>
              );
            }

            return (
              <Link
                key={idx}
                href={item.href}
                className={`relative flex flex-col items-center justify-center gap-1 w-full h-full transition-colors ${
                  active ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <Icon
                  className={`h-5 w-5 ${active ? "stroke-[2.5px]" : "stroke-[2px]"}`}
                />
                <span className="text-[10px] font-bold uppercase tracking-tighter">
                  {item.label}
                </span>

                {active && (
                  <motion.div
                    layoutId="bottomTab"
                    className="absolute -bottom-[2px] h-[3px] w-6 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
