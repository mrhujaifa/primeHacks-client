"use client";

import { useState } from "react";
import { ArrowLeft, MailCheck, RefreshCw, ShieldCheck } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { verifyEmailOtp } from "@/services/user.service";
import toast from "react-hot-toast";

export default function VerifyEmailOtpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const defaultEmail = searchParams.get("email") || "";

  const [email, setEmail] = useState(defaultEmail);
  const [otp, setOtp] = useState("");

  const handleVerifyEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || otp.length !== 6) {
      return;
    }

    const res = await verifyEmailOtp(email, otp);

    if (res.success) {
      toast.success("Email verified successfully! Please login to continue.");
      router.push("/login");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10 text-slate-950 dark:bg-slate-950 dark:text-white">
      <section className="w-full max-w-md">
        <button
          type="button"
          onClick={() => router.push("/login")}
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to login
        </button>

        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900 sm:p-8">
          <div className="mb-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-300">
              <MailCheck className="h-6 w-6" />
            </div>

            <div className="flex items-start justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold tracking-tight">
                  Verify your email
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  Enter the 6 digit code we sent to your email to activate your
                  PrimeHacks account.
                </p>
              </div>

              <span className="hidden rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300 sm:inline-flex">
                Secure
              </span>
            </div>
          </div>

          <form onSubmit={handleVerifyEmail} className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Email address
              </label>

              <input
                type="email"
                value={email}
                disabled={!!defaultEmail}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:bg-slate-100 disabled:text-slate-500 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-600 dark:disabled:bg-slate-900 dark:disabled:text-slate-500"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
                Verification code
              </label>

              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                placeholder="000000"
                className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-2xl font-bold tracking-[0.45em] text-slate-950 outline-none transition placeholder:text-slate-300 focus:border-violet-500 focus:ring-4 focus:ring-violet-500/10 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-700"
              />
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-violet-600 dark:text-violet-300" />
                <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                  This code will expire soon. Do not share this code with
                  anyone.
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-violet-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-violet-700 focus:outline-none focus:ring-4 focus:ring-violet-500/20 active:scale-[0.99]"
            >
              Verify Email
            </button>
          </form>

          <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-5 dark:border-white/10">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Didn&apos;t receive code?
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-violet-600 transition hover:bg-violet-50 dark:text-violet-300 dark:hover:bg-violet-500/10"
            >
              <RefreshCw className="h-4 w-4" />
              Resend
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
