"use client";

import {
  ArrowRight,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

export default function ChangePasswordForm() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="container mx-auto">
      <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(8,18,30,0.98),rgba(4,12,22,0.98))] p-5 shadow-[0_30px_80px_rgba(2,8,18,0.42)]">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            Account Security
          </div>

          <h2 className="mt-5 font-[family:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-white">
            Change Password
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            Update your password to keep your PrimeHacks account secure.
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Current Password
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3.5">
              <Lock className="h-4.5 w-4.5 shrink-0 text-slate-400" />
              <input
                type={showCurrent ? "text" : "password"}
                placeholder="Enter your current password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowCurrent((prev) => !prev)}
                className="btn-theme-outline"
              >
                {showCurrent ? (
                  <EyeOff className="h-4.5 w-4.5" />
                ) : (
                  <Eye className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              New Password
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-cyan-300/14 bg-[rgba(255,255,255,0.03)] px-4 py-3.5">
              <KeyRound className="h-4.5 w-4.5 shrink-0 text-cyan-300" />
              <input
                type={showNew ? "text" : "password"}
                placeholder="Create a strong new password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowNew((prev) => !prev)}
                className="btn-theme-outline"
              >
                {showNew ? (
                  <EyeOff className="h-4.5 w-4.5" />
                ) : (
                  <Eye className="h-4.5 w-4.5" />
                )}
              </button>
            </div>

            <div className="mt-3">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-400">Password strength</span>
                <span className="font-medium text-cyan-300">Strong</span>
              </div>

              <div className="mt-2 flex gap-2">
                <div className="h-2 flex-1 rounded-full bg-emerald-400" />
                <div className="h-2 flex-1 rounded-full bg-emerald-400" />
                <div className="h-2 flex-1 rounded-full bg-cyan-400" />
                <div className="h-2 flex-1 rounded-full bg-white/10" />
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-200">
              Confirm New Password
            </label>
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3.5">
              <ShieldCheck className="h-4.5 w-4.5 shrink-0 text-slate-400" />
              <input
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your new password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="btn-theme-outline"
              >
                {showConfirm ? (
                  <EyeOff className="h-4.5 w-4.5" />
                ) : (
                  <Eye className="h-4.5 w-4.5" />
                )}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <button type="button" className="btn-theme-outline">
              Cancel
            </button>

            <button type="button" className="btn-theme">
              Update Password
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
