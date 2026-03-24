"use client";

import { NavSection } from "@/interface/dashboard.interface";
import { UserInfo } from "@/types/user.types";
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

interface DashboardSidebarContentProps {
  userInfo: UserInfo;
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
  userInfo,
}: DashboardSidebarContentProps) => {
  const pathname = usePathname();

  const isActiveRoute = (href: string) => {
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const getInitial = () => {
    if (userInfo?.name) return userInfo.name.charAt(0).toUpperCase();
    if (userInfo?.email) return userInfo.email.charAt(0).toUpperCase();
    return "U";
  };

  return (
    <aside className="flex min-h-screen w-64 flex-col border-r border-white/10 bg-[linear-gradient(180deg,#071521_0%,#081824_45%,#0b1d2a_100%)] text-slate-100 lg:w-72">
      <div className="border-b border-white/10 p-3">
        <Link
          href={dashboardHome}
          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 lg:justify-start"
        >
          <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,0.18),rgba(245,158,11,0.16))]">
            <LayoutDashboard size={18} className="text-cyan-300" />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-white">
              PrimeHacks Dashboard
            </p>
            <p className="text-xs text-slate-400">Hackathon</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-2 pb-3">
        <div className="space-y-4">
          <Link
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
          </Link>

          {navItems.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-1.5">
              {section.title && (
                <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
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
                        ? "border-cyan-300/20 bg-cyan-400/10 text-white"
                        : "border-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-cyan-300" : "text-slate-400"}
                    />
                    <span className="flex-1 font-medium">{item.title}</span>
                  </Link>
                );
              })}
            </div>
          ))}
        </div>
      </nav>

      <div className="border-t border-white/10 p-3">
        <Link
          href="/"
          className="flex h-12 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-3 text-slate-300 transition hover:bg-white/10 hover:text-white lg:justify-start"
        >
          <Home size={18} />
          <span>Back to Home</span>
        </Link>
      </div>
    </aside>
  );
};

export default DashboardSidebarContent;
