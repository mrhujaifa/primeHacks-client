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
import { logoutUser } from "@/services/user.service";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function ProfileDropdown() {
  const { data: user, isPending } = useCurrentUser();
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const queryClinet = useQueryClient();
  const handleLogout = async () => {
    try {
      await logoutUser();
      queryClinet.clear();
      router.push("/login");
      router.refresh();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div
      className="relative z-[60]"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        className="group flex items-center gap-3 rounded-full border border-border/70 bg-card/65 pl-1.5 pr-3 py-1.5 text-left shadow-panel backdrop-blur-xl transition duration-200 hover:border-primary/20 hover:bg-accent/75"
      >
        {isPending ? (
          <>
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-border/70 animate-pulse bg-foreground/10" />
            <div className="hidden min-w-[90px] sm:block">
              <div className="h-4 w-20 rounded bg-foreground/10 animate-pulse" />
              <div className="mt-2 h-3 w-16 rounded bg-foreground/10 animate-pulse" />
            </div>
          </>
        ) : (
          <>
            <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-border/70 transition group-hover:ring-primary/30">
              <img
                src={user?.image || "https://i.pravatar.cc/100?img=12"}
                alt="Profile"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(2,6,23,0.08))]" />
            </div>

            <div className="hidden min-w-[90px] sm:block">
              <p className="text-sm font-semibold text-foreground">
                {user?.name}
              </p>
              <p className="text-[11px] text-muted">{user?.role} Account</p>
            </div>
          </>
        )}

        <ChevronDown
          className={`h-4 w-4 text-muted transition duration-200 ${
            open ? "rotate-180 text-foreground" : ""
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
        <div className="absolute inset-x-0 -top-4 h-4" />

        <div className="overflow-hidden rounded-[26px] border border-border/70 bg-popover/95 shadow-panel backdrop-blur-2xl">
          {/* Top */}
          <div className="relative border-b border-border/70 p-4">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,92,255,0.14),transparent_30%),radial-gradient(circle_at_left,rgba(86,186,255,0.10),transparent_26%)]" />

            <div className="relative flex items-center gap-3">
              {isPending ? (
                <>
                  <div className="h-14 w-14 rounded-2xl ring-1 ring-border/70 animate-pulse bg-foreground/10" />

                  <div className="min-w-0 flex-1">
                    <div className="h-4 w-28 rounded bg-foreground/10 animate-pulse" />
                    <div className="mt-2 h-3 w-36 rounded bg-foreground/10 animate-pulse" />
                    <div className="mt-2 h-6 w-28 rounded-full bg-foreground/10 animate-pulse" />
                  </div>
                </>
              ) : (
                <>
                  <div className="h-14 w-14 overflow-hidden rounded-2xl ring-1 ring-border/70">
                    <img
                      src={user?.image || "https://i.pravatar.cc/100?img=12"}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h4 className="truncate text-sm font-semibold text-foreground">
                      {user?.name}
                    </h4>
                    <p className="truncate text-xs text-muted">
                      {user?.email}
                    </p>

                    {user?.isPremium && (
                      <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                        <Crown className="h-3.5 w-3.5" />
                        Premium Builder
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Menu */}
          <div className="p-2">
            <Link
              href="/profile"
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/80"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card/70">
                <User className="h-4 w-4" />
              </div>
              <div>
                <p>My Profile</p>
                <p className="text-xs text-muted">Manage personal info</p>
              </div>
            </Link>

            <Link
              href="/dashboard"
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/80"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card/70">
                <LayoutDashboard className="h-4 w-4" />
              </div>
              <div>
                <p>Dashboard</p>
                <p className="text-xs text-muted">Open workspace panel</p>
              </div>
            </Link>

            <Link
              href="/settings"
              className="flex items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-foreground transition hover:bg-accent/80"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/70 bg-card/70">
                <Settings className="h-4 w-4" />
              </div>
              <div>
                <p>Settings</p>
                <p className="text-xs text-muted">Account preferences</p>
              </div>
            </Link>
          </div>

          {/* Bottom */}
          <div className="border-t border-border/70 p-2">
            <button
              type="button"
              onClick={() => handleLogout()}
              className="flex w-full items-center gap-3 rounded-2xl px-3.5 py-3 text-sm font-medium text-destructive transition hover:bg-destructive/10"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-destructive/15 bg-destructive/10">
                <LogOut className="h-4 w-4" />
              </div>
              <div className="text-left">
                <p>Sign out</p>
                <p className="text-xs text-destructive/70">End current session</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
