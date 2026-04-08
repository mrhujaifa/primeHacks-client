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
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.12),transparent_30%)]" />

      <section className="card-theme relative z-10 w-full max-w-xl rounded-[32px] p-8">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-10 w-10" />
        </div>

        <h1 className="mt-6 text-center font-display text-3xl font-bold text-foreground">
          Payment Successful
        </h1>

        <p className="mt-3 text-center text-sm leading-7 text-muted">
          Your payment was completed successfully. Premium access will be
          activated shortly after webhook processing.
        </p>

        {session_id ? (
          <div className="mt-6 rounded-2xl border border-border/70 bg-background/45 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              Session ID
            </p>
            <p className="mt-2 break-all text-sm text-foreground">
              {session_id}
            </p>
          </div>
        ) : null}

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link href="/dashboard" className="btn-theme">
            Go to Dashboard
          </Link>

          <Link href="/hackathons" className="btn-theme-outline">
            Explore Hackathons
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PaymentSuccessPage;
