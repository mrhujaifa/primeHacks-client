"use client";

import React from "react";
import { Bell, ChevronDown, Menu } from "lucide-react";
import { useCurrentUser } from "@/hooks/useSession";

const DashboardNavbar = () => {
  const { data: user } = useCurrentUser();

  return (
    <nav className="sticky top-0 z-40 border-b border-white/10 bg-[#07111a]/80 backdrop-blur-xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(251,191,36,0.10),transparent_18%)]" />

      <div className="navbar relative min-h-[74px] px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 flex-1 items-center gap-3 lg:hidden">
          <label
            htmlFor="my-drawer-4"
            aria-label="open sidebar"
            className="btn btn-square border border-white/10 bg-white/5 text-white shadow-none backdrop-blur-md hover:bg-white/10"
          >
            <Menu size={18} />
          </label>

          <div className="min-w-0">
            <h1 className="truncate text-sm font-semibold tracking-tight text-white">
              PrimeHacks Dashboard
            </h1>
            <p className="truncate text-xs text-slate-400">
              Manage your workspace
            </p>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <button className="btn btn-circle border border-white/10 bg-white/5 text-slate-200 shadow-none backdrop-blur-md hover:bg-white/10 hover:text-white">
            <Bell size={18} />
          </button>

          <div className="hidden h-9 w-px bg-white/10 sm:block" />

          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="flex cursor-pointer items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-2 py-1.5 shadow-[0_8px_30px_rgba(0,0,0,0.20)] backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="avatar">
                <div className="w-10 rounded-2xl ring-1 ring-cyan-400/30">
                  <img
                    src={user?.image || "https://i.pravatar.cc/100?img=12"}
                    alt="User"
                  />
                </div>
              </div>

              <div className="hidden text-left md:block">
                <p className="text-sm font-semibold text-white">{user?.name}</p>
                <p className="text-xs text-slate-400 lowercase">{user?.role}</p>
              </div>

              <ChevronDown
                size={16}
                className="hidden text-slate-400 md:block"
              />
            </label>

            <ul
              tabIndex={0}
              className="menu dropdown-content z-[50] mt-3 w-56 rounded-2xl border border-white/10 bg-[#0b1622]/95 p-2 text-slate-200 shadow-2xl backdrop-blur-xl"
            >
              <li>
                <a className="rounded-xl hover:bg-white/10">Profile</a>
              </li>
              <li>
                <a className="rounded-xl hover:bg-white/10">
                  Workspace Settings
                </a>
              </li>
              <li>
                <a className="rounded-xl hover:bg-white/10">Notifications</a>
              </li>
              <li>
                <a className="rounded-xl text-red-300 hover:bg-red-500/10">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
