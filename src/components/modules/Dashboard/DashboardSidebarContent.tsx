"use client";

import { NavSection } from "@/interface/dashboard.interface";
import {
  Album,
  BadgeCheck,
  Clock3,
  FileSpreadsheet,
  FileText,
  FolderOpenDot,
  Gift,
  Home,
  Layers3,
  LayoutDashboard,
  PlusSquare,
  Settings,
  Trophy,
  User,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandMark from "@/components/ui/BrandMark";

interface DashboardSidebarContentProps {
  navItems: NavSection[];
  dashboardHome: string;
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  LayoutDashboard,
  User,
  FolderOpenDot,
  Album,
  BadgeCheck,
  Trophy,
  PlusSquare,
  Gift,
  FileSpreadsheet,
  Users,
  Layers3,
  FileText,
  Clock3,
  Wallet,
  Settings,
};

const DashboardSidebarContent = ({
  dashboardHome,
  navItems,
}: DashboardSidebarContentProps) => {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <aside className="relative flex min-h-screen w-64 flex-col overflow-hidden border-r border-border/70 bg-[linear-gradient(180deg,rgb(var(--background-elevated))_0%,rgb(var(--card))_38%,rgb(var(--card-strong))_100%)] text-foreground lg:w-72 dark:bg-[linear-gradient(180deg,rgba(10,15,34,0.96)_0%,rgba(8,12,30,0.98)_45%,rgba(6,10,24,1)_100%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(141,92,255,0.12),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(93,190,255,0.08),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.54),transparent_38%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(168,93,255,0.14),transparent_28%),radial-gradient(circle_at_78%_12%,rgba(91,192,255,0.10),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_34%)]"
      />

      <div className="relative border-b border-border/70 p-3">
        <BrandMark
          href={dashboardHome}
          size="sm"
          subtitle="Hackathon Dashboard"
          className="w-full px-1 py-1 transition hover:opacity-90"
        />
      </div>

      <nav className="relative flex-1 overflow-y-auto px-2 pb-3">
        <div className="space-y-4">
          {/* <Link
            href={dashboardHome}
            className={`flex h-12 items-center gap-3 rounded-2xl border px-3 transition lg:justify-start ${
              isActiveRoute(dashboardHome)
                ? "border-cyan-300/20 bg-cyan-400/10 text-white"
                : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
            }`}
          >
            <LayoutDashboard
              size={18}
              className={
                isActiveRoute(dashboardHome)
                  ? "text-cyan-300"
                  : "text-slate-400"
              }
            />
            <span className="font-medium">Dashboard Home</span>
          </Link> */}

          {navItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-1.5">
              {section.title && (
                <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {section.title}
                </p>
              )}

              {section.items.map((item, itemIndex) => {
                const Icon = iconMap[item.icon] || Home;
                const isActive = isActiveRoute(item.href);

                return (
                  <Link
                    key={`${item.href}-${itemIndex}`}
                    href={item.href}
                    className={`flex h-12 items-center gap-3 rounded-2xl border px-3 transition lg:justify-start ${
                      isActive
                        ? "border-primary/20 bg-primary/10 text-foreground shadow-[0_16px_32px_rgb(var(--primary)/0.12)]"
                        : "border-transparent text-muted hover:border-border/70 hover:bg-accent/85 hover:text-foreground"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={
                        isActive ? "text-primary" : "text-muted-foreground"
                      }
                    />
                    <span className="flex-1 font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </nav>

      <div className="relative border-t border-border/70 p-3">
        <Link
          href="/"
          className="flex h-12 items-center gap-3 rounded-2xl border border-border/70 bg-card/76 px-3 text-muted transition hover:border-primary/18 hover:bg-accent/80 hover:text-foreground lg:justify-start"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebarContent;
