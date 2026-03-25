"use client";

import Link from "next/link";
import { ArrowLeft, Compass, Home, SearchX, Sparkles } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#061019_0%,#071521_35%,#0a1b2a_100%)] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.16),transparent_24%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.10),transparent_30%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute left-10 top-1/3 h-44 w-44 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-300 uppercase">
              <Sparkles className="h-4 w-4" />
              Page Not Found
            </div>

            <div className="mb-4 text-7xl font-black leading-none text-transparent sm:text-8xl lg:text-9xl bg-[linear-gradient(135deg,#67e8f9_0%,#22d3ee_35%,#60a5fa_100%)] bg-clip-text">
              404
            </div>

            <h1 className="max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              Oops! This page doesn’t exist in your workspace.
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              The page you are looking for may have been moved, deleted, or the
              route might be incorrect. Let’s get you back to something useful.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#67e8f9_0%,#22d3ee_35%,#3b82f6_100%)] px-6 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.35)] transition hover:scale-[1.02]"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>

              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <Compass className="h-4 w-4" />
                Go to Dashboard
              </Link>
            </div>

            <button
              onClick={() => window.history.back()}
              className="mt-4 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyan-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
