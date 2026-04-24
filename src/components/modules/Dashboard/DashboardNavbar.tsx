"use client";

import React from "react";
import { Bell, ChevronDown, Menu, LogOut } from "lucide-react";
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

      <div className="navbar relative min-h-[64px] px-3 sm:px-6 lg:min-h-[74px]">
        {/* Mobile Left Section: Menu & Brand */}
        <div className="flex items-center gap-2 lg:hidden">
          <label
            htmlFor="my-drawer-4"
            className="btn btn-square btn-sm border border-border/70 bg-card/70 text-foreground shadow-none backdrop-blur-md hover:bg-accent/75 sm:btn-md"
          >
            <Menu size={18} />
          </label>
        </div>

        {/* Right Section: Actions & User */}
        <div className="flex flex-1 items-center justify-end gap-1.5 sm:gap-3">
          {/* Theme Toggle - Hidden label on very small screens */}
          <div className="flex items-center">
            <ThemeToggle className="md:hidden" />
            <ThemeToggle showLabel className="hidden md:inline-flex" />
          </div>

          <button className="btn btn-circle btn-sm border border-border/70 bg-card/70 text-muted shadow-none backdrop-blur-md hover:bg-accent/75 hover:text-foreground sm:btn-md">
            <Bell size={18} />
          </button>

          <div className="hidden h-8 w-px bg-border/70 sm:block" />

          {/* User Profile Dropdown */}
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center gap-2 rounded-xl border border-border/70 bg-card/70 p-1 pr-2 shadow-panel backdrop-blur-md transition hover:border-primary/22 hover:bg-accent/75 md:rounded-2xl md:px-2 md:py-1.5"
            >
              <div className="avatar">
                <div className="w-8 rounded-lg ring-1 ring-primary/30 md:w-10 md:rounded-2xl">
                  <img
                    src={user?.image || "https://i.pravatar.cc/100?img=12"}
                    alt="User"
                  />
                </div>
              </div>

              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-foreground truncate max-w-[120px]">
                  {user?.name}
                </p>
                <p className="text-[10px] text-muted lowercase leading-tight">
                  {user?.role}
                </p>
              </div>

              <ChevronDown size={14} className="hidden text-muted md:block" />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[50] mt-3 w-52 rounded-2xl border border-border/70 bg-popover/95 p-2 text-popover-foreground shadow-xl backdrop-blur-xl sm:w-56"
            >
              <div className="px-3 py-2 md:hidden">
                <p className="text-sm font-bold truncate">{user?.name}</p>
                <p className="text-xs text-muted truncate">{user?.email}</p>
              </div>
              <div className="h-px bg-border/50 my-1 md:hidden" />
              <li>
                <a className="rounded-xl py-2.5">Profile</a>
              </li>
              <li>
                <a className="rounded-xl py-2.5">Settings</a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="mt-1 flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-destructive hover:bg-destructive/10 disabled:opacity-50"
                >
                  <LogOut size={16} />
                  <span>{isLoggingOut ? "Signing out..." : "Logout"}</span>
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
