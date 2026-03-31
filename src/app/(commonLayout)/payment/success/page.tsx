"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { verifyPaymentSession } from "@/services/payment.service";
import { useRouter, useSearchParams } from "next/navigation";

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const session_id = searchParams.get("session_id");
  const router = useRouter();

  useEffect(() => {
    if (session_id) {
      verifyPaymentSession(session_id)
        .then(() => {
          // Refresh user data or redirect
          router.refresh();
        })
        .catch((error) => {
          console.error("Failed to verify payment session:", error);
        });
    }
  }, [session_id, router]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_30%)]" />

      <section className="relative z-10 w-full max-w-xl rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h1 className="mt-6 text-center font-[family:var(--font-space-grotesk)] text-3xl font-bold text-white">
          Payment Successful
        </h1>

        <p className="mt-3 text-center text-sm leading-7 text-slate-300">
          Your payment was completed successfully. Premium access will be
          activated shortly after webhook processing.
        </p>

        {session_id ? (
          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Session ID
            </p>
            <p className="mt-2 break-all text-sm text-slate-200">
              {session_id}
            </p>
          </div>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/dashboard"
            className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
          >
            Go to Dashboard
          </Link>

          <Link
            href="/hackathons"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-300/30 hover:bg-white/[0.06]"
          >
            Explore Hackathons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PaymentSuccessPage;
