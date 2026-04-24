"use client";

import Link from "next/link";
import type { CSSProperties, ElementType } from "react";
import { useCurrentUser } from "@/hooks/useSession";
import {
  BadgeCheck,
  CalendarDays,
  ChevronRight,
  CircleUser,
  CreditCard,
  Crown,
  Hash,
  KeyRound,
  LayoutDashboard,
  Loader2,
  Mail,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";

type ProfileUser = {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  emailVerified?: boolean | null;
  image?: string | null;
  role?: string | null;
  status?: string | null;
  isPremium?: boolean | null;
  premiumPlan?: string | null;
  premiumExpiresAt?: string | null;
  createdAt?: string | null;
  needPasswordChange?: boolean | null;
};

const heroGlowStyle: CSSProperties = {
  background: `
    radial-gradient(circle at 12% 18%, rgb(var(--hero-glow-primary) / 0.32), transparent 24%),
    radial-gradient(circle at 82% 12%, rgb(var(--hero-glow-secondary) / 0.26), transparent 22%),
    radial-gradient(circle at 86% 76%, rgb(var(--hero-glow-tertiary) / 0.18), transparent 18%),
    linear-gradient(
      135deg,
      rgb(var(--background-elevated)) 0%,
      rgb(var(--card-strong)) 50%,
      rgb(var(--background)) 100%
    )
  `,
};

const coverMeshStyle: CSSProperties = {
  backgroundImage:
    "linear-gradient(rgb(var(--grid) / 0.12) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid) / 0.12) 1px, transparent 1px)",
  backgroundSize: "28px 28px",
};

const formatLabel = (value?: string | null) => {
  if (!value) return "N/A";

  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const formatDate = (value?: string | null) => {
  if (!value) return "N/A";

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return "N/A";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const getMemberDuration = (value?: string | null) => {
  if (!value) return "N/A";

  const createdAt = new Date(value).getTime();

  if (Number.isNaN(createdAt)) return "N/A";

  const ms = Date.now() - createdAt;
  const years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(
    (ms % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30),
  );

  if (years > 0) return `${years} yr${years > 1 ? "s" : ""}`;
  if (months > 0) return `${months} mo`;

  return "New";
};

const getInitials = (name?: string | null) => {
  if (!name) return "U";

  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
};

function StatItem({
  value,
  label,
  tone = "neutral",
}: {
  value: string;
  label: string;
  tone?: "primary" | "success" | "warning" | "neutral";
}) {
  const toneClasses = {
    primary:
      "border-primary/18 bg-primary/10 text-primary shadow-[0_18px_40px_rgb(var(--primary)/0.08)]",
    success:
      "border-emerald-400/18 bg-emerald-400/10 text-emerald-600 shadow-[0_18px_40px_rgba(34,197,94,0.08)] dark:text-emerald-300",
    warning:
      "border-amber-400/18 bg-amber-400/10 text-amber-600 shadow-[0_18px_40px_rgba(245,158,11,0.08)] dark:text-amber-300",
    neutral: "border-border/70 bg-background/55 text-foreground shadow-inset",
  };

  return (
    <div className="rounded-[1.5rem] border border-border/70 bg-background/52 p-4 backdrop-blur-xl">
      <div
        className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${toneClasses[tone]}`}
      >
        {label}
      </div>
      <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
        {value}
      </p>
    </div>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
  iconClassName = "text-primary",
  mono = false,
}: {
  icon: ElementType;
  label: string;
  value: string;
  iconClassName?: string;
  mono?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/70 bg-card/75 shadow-inset">
          <Icon className={`h-4 w-4 ${iconClassName}`} />
        </span>

        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
            {label}
          </p>
          <p
            className={`mt-1 truncate text-sm font-medium text-foreground ${mono ? "font-mono text-[13px] text-muted" : ""}`}
          >
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuickLink({
  href,
  icon: Icon,
  title,
  description,
  iconClassName,
  iconSurfaceClassName,
}: {
  href: string;
  icon: ElementType;
  title: string;
  description: string;
  iconClassName: string;
  iconSurfaceClassName: string;
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-[1.4rem] border border-transparent px-3 py-3 transition duration-200 hover:border-border/70 hover:bg-accent/80"
    >
      <span
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border ${iconSurfaceClassName}`}
      >
        <Icon className={`h-4 w-4 ${iconClassName}`} />
      </span>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-foreground">{title}</p>
        <p className="mt-1 text-xs leading-5 text-muted">{description}</p>
      </div>

      <ChevronRight className="h-4 w-4 text-muted transition group-hover:text-foreground" />
    </Link>
  );
}

function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="card-theme w-full max-w-sm rounded-[2rem] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-primary/18 bg-primary/10 shadow-glow-soft">
          <Loader2 className="h-7 w-7 animate-spin text-primary" />
        </div>
        <p className="mt-5 text-sm font-medium uppercase tracking-[0.22em] text-muted">
          Loading profile
        </p>
      </div>
    </div>
  );
}

function ErrorScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="card-theme w-full max-w-md rounded-[2rem] p-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-destructive/18 bg-destructive/10">
          <ShieldCheck className="h-7 w-7 text-destructive" />
        </div>

        <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground">
          Profile unavailable
        </h2>
        <p className="mt-3 text-sm leading-7 text-muted">
          We couldn&apos;t load your account details right now. Please sign in
          again and try once more.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/login" className="btn-theme">
            Sign In
          </Link>
          <Link href="/dashboard" className="btn-theme-outline">
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function UserProfilePage() {
  const { data, isLoading, error } = useCurrentUser();

  if (isLoading) return <LoadingScreen />;
  if (error || !data) return <ErrorScreen />;

  const user = data as ProfileUser;
  const shortId = user.id?.slice(-6) ?? "------";
  const planLabel = user.isPremium ? formatLabel(user.premiumPlan) : "Free Plan";
  const premiumUntil = user.isPremium
    ? formatDate(user.premiumExpiresAt)
    : "Upgrade anytime";
  const needsPasswordChange = Boolean(user.needPasswordChange);

  return (
    <main className="relative mt-20 min-h-screen px-4 py-10 sm:px-6 lg:py-14">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-80 bg-[radial-gradient(circle_at_top,rgba(178,122,255,0.16),transparent_54%)]" />

      <div className="relative mx-auto max-w-6xl space-y-5">
        <section className="section-shell overflow-hidden">
          <div className="absolute inset-0 opacity-95" style={heroGlowStyle} />
          <div className="absolute inset-0 opacity-40" style={coverMeshStyle} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_24%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.06),transparent_24%)]" />

          <div className="relative px-5 py-6 sm:px-8 sm:py-8 lg:px-10">
            <div className="badge-theme">
              <CircleUser className="h-3.5 w-3.5" />
              Profile overview
            </div>

            <div className="mt-7 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-[2rem] border border-white/15 bg-[linear-gradient(135deg,rgba(120,78,255,0.92),rgba(86,186,255,0.7))] shadow-[0_22px_60px_rgba(72,89,255,0.22)]">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name ?? "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-3xl font-semibold text-white">
                      {getInitials(user.name)}
                    </div>
                  )}

                  <span className="absolute bottom-2 right-2 h-3.5 w-3.5 rounded-full border-2 border-white/80 bg-emerald-400 dark:border-[rgb(var(--card-strong))]" />
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="font-display text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl">
                      {user.name ?? "User"}
                    </h1>

                    {user.emailVerified ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/18 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-300">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    ) : null}

                    {user.isPremium ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/18 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-600 dark:text-amber-300">
                        <Crown className="h-3.5 w-3.5" />
                        Premium
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-xs font-semibold text-muted">
                        <Sparkles className="h-3.5 w-3.5" />
                        Free member
                      </span>
                    )}
                  </div>

                  <p className="flex flex-wrap items-center gap-2 text-sm text-muted">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>{user.email ?? "No email provided"}</span>
                  </p>

                  <p className="max-w-2xl text-sm leading-7 text-muted sm:text-base">
                    Account summary, plan details, and quick actions all in one
                    theme-aware view that now matches the rest of PrimeHacks.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/dashboard" className="btn-theme">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
                <Link href="/change-password" className="btn-theme-outline">
                  <KeyRound className="h-4 w-4" />
                  Security
                </Link>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              <StatItem
                value={getMemberDuration(user.createdAt)}
                label="Member"
                tone="primary"
              />
              <StatItem value={planLabel} label="Plan" tone="warning" />
              <StatItem
                value={formatLabel(user.status)}
                label="Status"
                tone="success"
              />
              <StatItem
                value={formatLabel(user.role)}
                label="Role"
                tone="neutral"
              />
            </div>
          </div>
        </section>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(300px,0.75fr)]">
          <section className="card-theme rounded-[2rem] p-5 sm:p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
                  Personal details
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  Account information
                </h2>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-muted">
                <Hash className="h-3.5 w-3.5" />
                usr_{shortId}
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                <InfoRow
                  icon={UserRound}
                  label="Role"
                  value={formatLabel(user.role)}
                  iconClassName="text-primary"
                />
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                <InfoRow
                  icon={ShieldCheck}
                  label="Status"
                  value={formatLabel(user.status)}
                  iconClassName="text-emerald-600 dark:text-emerald-300"
                />
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                <InfoRow
                  icon={CalendarDays}
                  label="Member since"
                  value={formatDate(user.createdAt)}
                  iconClassName="text-violet-600 dark:text-violet-300"
                />
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                <InfoRow
                  icon={CreditCard}
                  label="Plan"
                  value={planLabel}
                  iconClassName="text-amber-600 dark:text-amber-300"
                />
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                <InfoRow
                  icon={Crown}
                  label="Premium until"
                  value={premiumUntil}
                  iconClassName="text-primary"
                />
              </div>

              <div className="rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                <InfoRow
                  icon={Hash}
                  label="User ID"
                  value={`usr_${shortId}`}
                  mono
                />
              </div>
            </div>

            {needsPasswordChange ? (
              <div className="mt-5 rounded-[1.6rem] border border-destructive/18 bg-destructive/10 px-4 py-4">
                <p className="text-sm font-semibold text-destructive">
                  Password update recommended
                </p>
                <p className="mt-1 text-sm leading-6 text-destructive/80">
                  Your account is asking for a password refresh. Use the
                  security action to update it and keep your session protected.
                </p>
              </div>
            ) : (
              <div className="mt-5 rounded-[1.6rem] border border-emerald-400/18 bg-emerald-400/10 px-4 py-4">
                <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-300">
                  Security looks healthy
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-700/90 dark:text-emerald-200/80">
                  Your profile is active and there are no immediate account
                  security reminders.
                </p>
              </div>
            )}
          </section>

          <div className="space-y-5">
            <section className="card-theme rounded-[2rem] p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
                Quick actions
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                Jump back in
              </h2>

              <div className="mt-5 space-y-1">
                <QuickLink
                  href="/dashboard"
                  icon={LayoutDashboard}
                  title="Dashboard"
                  description="Open your workspace and keep building."
                  iconClassName="text-primary"
                  iconSurfaceClassName="border-primary/16 bg-primary/10"
                />
                <QuickLink
                  href="/change-password"
                  icon={KeyRound}
                  title="Security"
                  description={
                    needsPasswordChange
                      ? "A password update is recommended right now."
                      : "Review password and account access settings."
                  }
                  iconClassName="text-violet-600 dark:text-violet-300"
                  iconSurfaceClassName="border-violet-400/16 bg-violet-400/10"
                />
                <QuickLink
                  href="/premium"
                  icon={Crown}
                  title="Subscription"
                  description="Manage plan details and billing access."
                  iconClassName="text-amber-600 dark:text-amber-300"
                  iconSurfaceClassName="border-amber-400/16 bg-amber-400/10"
                />
                <QuickLink
                  href="/hackathons"
                  icon={Sparkles}
                  title="Explore hackathons"
                  description="Browse current events and discover new challenges."
                  iconClassName="text-cyan-600 dark:text-cyan-300"
                  iconSurfaceClassName="border-cyan-400/16 bg-cyan-400/10"
                />
              </div>
            </section>

            <section className="card-theme overflow-hidden rounded-[2rem] p-5 sm:p-6">
              <div className="absolute inset-x-6 top-0 h-28 rounded-b-[2rem] bg-[radial-gradient(circle_at_top,rgba(178,122,255,0.16),transparent_64%)]" />

              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.26em] text-muted">
                  Plan status
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  {planLabel}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {user.isPremium
                    ? `Your premium access is active through ${premiumUntil}.`
                    : "Upgrade anytime to unlock more organizer power, premium workflows, and additional event capacity."}
                </p>

                <div className="mt-5 rounded-[1.6rem] border border-border/70 bg-background/50 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted">
                        Current tier
                      </p>
                      <p className="mt-2 text-lg font-semibold text-foreground">
                        {planLabel}
                      </p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/16 bg-primary/10">
                      {user.isPremium ? (
                        <Crown className="h-5 w-5 text-primary" />
                      ) : (
                        <Sparkles className="h-5 w-5 text-primary" />
                      )}
                    </div>
                  </div>
                </div>

                <Link href="/premium" className="btn-theme mt-5 w-full">
                  {user.isPremium ? "Manage plan" : "Upgrade to premium"}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
