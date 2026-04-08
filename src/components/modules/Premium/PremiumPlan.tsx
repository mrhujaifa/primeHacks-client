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
      accent:
        "linear-gradient(135deg, rgba(120,78,255,0.16), rgba(10,15,34,0.22), rgba(86,186,255,0.08))",
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
      accent:
        "linear-gradient(135deg, rgba(178,122,255,0.24), rgba(18,21,47,0.22), rgba(255,120,244,0.10))",
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
      accent:
        "linear-gradient(135deg, rgba(86,186,255,0.14), rgba(10,15,34,0.24), rgba(120,78,255,0.10))",
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
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(178,122,255,0.14),transparent_22%),radial-gradient(circle_at_86%_10%,rgba(86,186,255,0.10),transparent_18%),linear-gradient(180deg,transparent,rgba(6,9,24,0.14))]" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="badge-muted">
            <BarChart3 className="h-3.5 w-3.5" />
            Pricing
          </div>

          <h2 className="mt-6 font-display text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl">
            Pricing that fits both first launches and scaled programs
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Start simple, upgrade when your events grow, and choose the level of
            workflow control that matches your organization.
          </p>

          {mounted && isPremiumUser && (
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/18 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300">
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
                className={`card-theme rounded-[2rem] p-6 sm:p-7 ${
                  plan.featured
                    ? "border-primary/20 bg-[linear-gradient(180deg,rgba(20,18,46,0.84),rgba(10,14,32,0.94))] shadow-[0_28px_90px_rgba(120,78,255,0.16)]"
                    : "border-border/60 bg-card/78"
                }`}
              >
                <div
                  className="rounded-[1.5rem] border border-border/60 px-5 py-5"
                  style={{ background: plan.accent }}
                >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${
                      plan.featured
                        ? "border-primary/22 bg-primary/14 text-primary shadow-glow-soft"
                        : "border-white/10 bg-white/[0.06] text-primary"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {plan.featured ? (
                    <span className="rounded-full border border-primary/20 bg-primary/12 px-3 py-1 text-xs font-medium text-primary">
                      Most Popular
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                  {plan.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/70">
                  {plan.description}
                </p>

                <div className="mt-6 flex items-end gap-1">
                  <p className="font-display text-4xl font-semibold text-white">
                    {plan.price}
                  </p>
                  {plan.period ? (
                    <p className="pb-1 text-sm text-white/52">{plan.period}</p>
                  ) : null}
                </div>
                </div>

                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-[1.15rem] border border-border/50 bg-background/24 px-4 py-3"
                    >
                      <BadgeCheck className="mt-0.5 h-4.5 w-4.5 shrink-0 text-primary" />
                      <p className="text-sm leading-6 text-muted">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>

                {plan.type === "FREE" ? (
                  <button
                    type="button"
                    className="btn-theme-outline mt-8 w-full"
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
                        ? "bg-button-primary text-primary-foreground shadow-glow hover:-translate-y-0.5 hover:shadow-glow-soft"
                        : "border border-border/70 bg-card/60 text-foreground shadow-inset backdrop-blur-xl hover:border-primary/35 hover:bg-accent/80"
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
