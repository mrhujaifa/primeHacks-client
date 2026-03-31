"use client";

import { useCurrentUser } from "@/hooks/useSession";
import { createCheckoutSession } from "@/services/payment.service";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Building2,
  Crown,
  Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

const PremiumPlan = () => {
  const { data } = useCurrentUser();
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isPremiumUser = data?.isPremium === true;

  const handleSubscribe = async (plan: "MONTHLY" | "YEARLY") => {
    if (isPremiumUser) return;

    try {
      setLoadingPlan(plan);

      const res = await createCheckoutSession(plan);
      const checkoutUrl = res?.data?.checkoutUrl;

      if (checkoutUrl) {
        window.location.href = checkoutUrl;
      }
    } catch (error) {
      console.error(error);
      alert("Failed to redirect to payment page");
    } finally {
      setLoadingPlan(null);
    }
  };

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free",
      description: "For small community hackathons and first launches.",
      icon: Sparkles,
      features: [
        "Single hackathon workspace",
        "Event page and basic registration flow",
        "Project submissions and participant management",
        "Standard organizer support",
      ],
      cta: "Start Free",
      type: "FREE",
    },
    {
      name: "Plus",
      price: "$9.99",
      period: "/month",
      description: "For active organizations running recurring programs.",
      icon: Crown,
      featured: true,
      features: [
        "Everything in Starter",
        "Custom branding and sponsor track sections",
        "Judging workflows and score visibility",
        "Priority support for event operations",
      ],
      cta: loadingPlan === "MONTHLY" ? "Redirecting..." : "Choose Plus",
      type: "MONTHLY",
    },
    {
      name: "Business",
      price: "$49.99",
      period: "/year",
      description: "For universities, accelerators, and large ecosystems.",
      icon: Building2,
      features: [
        "Multi-event management",
        "Partner-ready workflows and governance support",
        "Advanced onboarding and admin controls",
        "Dedicated success and launch planning",
      ],
      cta: loadingPlan === "YEARLY" ? "Redirecting..." : "Choose Business",
      type: "YEARLY",
    },
  ];

  return (
    <section className="relative px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(103,232,249,0.08),transparent_24%)]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-200">
            <BarChart3 className="h-3.5 w-3.5" />
            Pricing
          </div>

          <h2 className="mt-6 font-[family:var(--font-space-grotesk)] text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Pricing that fits both first launches and scaled programs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Start simple, upgrade when your events grow, and choose the level of
            workflow control that matches your organization.
          </p>

          {mounted && isPremiumUser && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
              <BadgeCheck className="h-4 w-4" />
              You already have a premium plan
            </div>
          )}
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            const isPaidPlan =
              plan.type === "MONTHLY" || plan.type === "YEARLY";

            return (
              <article
                key={plan.name}
                className={`rounded-[32px] border p-6 sm:p-7 ${
                  plan.featured
                    ? "border-cyan-300/22 bg-[linear-gradient(180deg,rgba(12,31,43,0.98),rgba(7,18,28,0.96))] shadow-[0_30px_90px_rgba(6,182,212,0.16)]"
                    : "border-white/8 bg-[linear-gradient(180deg,rgba(10,23,35,0.92),rgba(6,16,26,0.96))] shadow-[0_30px_80px_rgba(2,8,18,0.28)]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.06] text-cyan-100">
                    <Icon className="h-5 w-5" />
                  </div>

                  {plan.featured ? (
                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-6 font-[family:var(--font-space-grotesk)] text-2xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <p className="font-[family:var(--font-space-grotesk)] text-4xl font-semibold text-white">
                    {plan.price}
                  </p>
                  {plan.period ? (
                    <p className="pb-1 text-sm text-slate-400">{plan.period}</p>
                  ) : null}
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-cyan-200" />
                      <p className="text-sm leading-6 text-slate-300">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {plan.type === "FREE" ? (
                  <button
                    type="button"
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3.5 text-sm font-semibold text-white"
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      handleSubscribe(plan.type as "MONTHLY" | "YEARLY")
                    }
                    disabled={
                      loadingPlan === plan.type || (mounted && isPremiumUser)
                    }
                    className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition ${
                      plan.featured
                        ? "bg-[linear-gradient(135deg,#67e8f9,#f59e0b)] text-slate-950 hover:scale-[1.01]"
                        : "border border-white/10 bg-white/[0.04] text-white hover:border-cyan-300/24 hover:bg-white/[0.06]"
                    } disabled:cursor-not-allowed disabled:opacity-70`}
                  >
                    {isPaidPlan && mounted && isPremiumUser
                      ? "Already Subscribed"
                      : plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PremiumPlan;
