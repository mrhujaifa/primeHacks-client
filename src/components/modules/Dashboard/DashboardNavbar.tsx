"use client";

import React from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { LogOut } from "lucide-react";
import { useCurrentUser } from "@/hooks/useSession";
import ThemeToggle from "@/components/ui/ThemeToggle";
import BrandMark from "@/components/ui/BrandMark";
import { logoutUser } from "@/services/user.service";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useState } from "react";

const DashboardNavbar = () => {
  const { data: user } = useCurrentUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = async () => {
    if (isLoggingOut) return;

    setIsLoggingOut(true);

    try {
      await logoutUser();
      queryClient.clear();
      toast.success("Signed out successfully");
      router.replace("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Failed to sign out. Please try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="sticky top-0 z-40 border-b border-border/70 bg-navbar/78 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.12),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(86,186,255,0.10),transparent_18%)]" />

      <div className="navbar relative min-h-[74px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 lg:hidden">
          <BrandMark
            href="/dashboard"
            size="sm"
            showSubtitle={false}
            className="min-w-0"
          />

          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square border border-border/70 bg-card/70 text-foreground shadow-none backdrop-blur-md hover:bg-accent/75"
          >
            <Menu size={18} />
          </label>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <ThemeToggle className="md:hidden" />
          <ThemeToggle showLabel className="hidden md:inline-flex" />

          <button className="btn btn-circle border border-border/70 bg-card/70 text-muted shadow-none backdrop-blur-md hover:bg-accent/75 hover:text-foreground">
            <Bell size={18} />
          </button>

          <div className="hidden h-9 w-px bg-border/70 sm:block" />

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-border/70 bg-card/70 px-2 py-1.5 shadow-panel backdrop-blur-md transition hover:border-primary/22 hover:bg-accent/75"
            >
              <div className="avatar">
                <div className="w-10 rounded-2xl ring-1 ring-primary/30">
                  <img
                    src={user?.image || "https://i.pravatar.cc/100?img=12"}
                    alt="User"
                  />
                </div>
              </div>

              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-foreground">
                  {user?.name}
                </p>
                <p className="text-xs text-muted lowercase">{user?.role}</p>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-muted md:block"
              />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[50] mt-3 w-56 rounded-2xl border border-border/70 bg-popover/95 p-2 text-popover-foreground shadow-panel backdrop-blur-xl"
            >
              <li>
                <a className="rounded-xl hover:bg-accent/80">Profile</a>
              </li>
              <li>
                <a className="rounded-xl hover:bg-accent/80">
                  Workspace Settings
                </a>
              </li>
              <li>
                <a className="rounded-xl hover:bg-accent/80">Notifications</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-destructive transition hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <LogOut size={16} />
                  {isLoggingOut ? "Signing out..." : "Logout"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
