"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ChevronDown,
  Crown,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from "lucide-react";
import { useCurrentUser } from "@/hooks/useSession";

export default function ProfileDropdown() {
  const { data: user, isPending } = useCurrentUser();
  const [open, setOpen] = useState(false);

  console.log(user);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] pl-1.5 pr-3 py-1.5 text-left shadow-[0_10px_30px_rgba(2,8,18,0.16)] backdrop-blur-xl transition duration-200 hover:border-cyan-300/20 hover:bg-white/[0.08]"
      >
        <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-white/10 transition group-hover:ring-cyan-300/30">
          <img
            src={user.image || "https://i.pravatar.cc/100?img=12"}
            alt="Profile"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.08))]" />
        </div>

        <div className="hidden min-w-[90px] sm:block">
          <p className="text-sm font-semibold text-white">{user.name}</p>
          <p className="text-[11px] text-slate-400">{user.role} Account</p>
        </div>

        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition duration-200 ${
            open ? "rotate-180 text-white" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute right-0 top-[calc(100%+14px)] z-50 w-[290px] origin-top-right transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[26px] border border-cyan-300/14 bg-[linear-gradient(180deg,rgba(9,18,30,0.98),rgba(5,13,22,0.98))] shadow-[0_28px_80px_rgba(2,8,18,0.48)] backdrop-blur-2xl">
          {/* Top */}
          <div className="relative border-b border-white/8 p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(245,158,11,0.12),transparent_26%)]" />

            <div className="relative flex items-center gap-3">
              <div className="h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-white/10">
                <img
                  src={user.image || "https://i.pravatar.cc/100?img=12"}
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="truncate text-sm font-semibold text-white">
                  {user.name}
                </h4>
                <p className="truncate text-xs text-slate-400">{user?.email}</p>

                {/*TODO: if user buy priemium conditional handle  */}
                <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-amber-300/20 bg-amber-400/10 px-2.5 py-1 text-[11px] font-medium text-amber-200">
                  <Crown className="h-3.5 w-3.5" />
                  Premium Builder
                </div>
              </div>
            </div>
          </div>

          {/* Menu */}
          <div className="p-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p>My Profile</p>
                <p className="text-xs text-slate-500">Manage personal info</p>
              </div>
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <LayoutDashboard className="h-4 w-4" />
              </div>
              <div>
                <p>Dashboard</p>
                <p className="text-xs text-slate-500">Open workspace panel</p>
              </div>
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.05] hover:text-white"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                <Settings className="h-4 w-4" />
              </div>
              <div>
                <p>Settings</p>
                <p className="text-xs text-slate-500">Account preferences</p>
              </div>
            </Link>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/8 p-2">
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-rose-200 transition hover:bg-rose-500/10 hover:text-rose-100"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-rose-300/10 bg-rose-500/10">
                <LogOut className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p>Sign out</p>
                <p className="text-xs text-rose-300/60">End current session</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
