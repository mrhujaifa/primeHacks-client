"use client";

import Link from "next/link";
import { useCurrentUser } from "@/hooks/useSession";
import {
  BadgeCheck,
  CalendarDays,
  Crown,
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
    month: "short",
    day: "numeric",
  });
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

function LoadingScreen() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4">
      <div className="card-theme w-full max-w-sm rounded-[2rem] p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
        </div>
        <p className="mt-4 text-sm font-medium text-muted">
          Loading profile...
        </p>
      </div>
    </main>
  );
}

function InfoItem({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-border/70 bg-background/45 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10">
        <Icon className="h-4 w-4 text-primary" />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
          {label}
        </p>
        <p className="mt-1 truncate text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

export default function UserProfilePage() {
  const { data, isLoading, error } = useCurrentUser();

  if (isLoading) return <LoadingScreen />;

  if (error || !data) {
    return (
      <main className="flex min-h-screen items-center justify-center px-4">
        <div className="card-theme w-full max-w-md rounded-[2rem] p-8 text-center">
          <ShieldCheck className="mx-auto h-10 w-10 text-destructive" />
          <h2 className="mt-4 text-2xl font-bold text-foreground">
            Profile unavailable
          </h2>
          <p className="mt-2 text-sm text-muted">
            Please login again to view your profile.
          </p>
          <Link href="/login" className="btn-theme mt-6">
            Login
          </Link>
        </div>
      </main>
    );
  }

  const user = data as ProfileUser;

  const role = formatLabel(user.role);
  const status = formatLabel(user.status);
  const plan = user.isPremium ? formatLabel(user.premiumPlan) : "Free Plan";

  return (
    <main className="relative mt-20 min-h-screen overflow-hidden px-4 pb-28 pt-8 sm:px-6 lg:pb-12 lg:pt-12">
      {/* Same theme background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(139,92,246,0.20),transparent_28%),radial-gradient(circle_at_85%_8%,rgba(56,189,248,0.14),transparent_24%),radial-gradient(circle_at_50%_95%,rgba(236,72,153,0.10),transparent_28%)]" />

      <div className="relative mx-auto max-w-5xl space-y-5">
        {/* Main profile card */}
        <section className="card-theme overflow-hidden rounded-[2rem]">
          <div className="relative min-h-36 bg-[radial-gradient(circle_at_20%_20%,rgba(168,85,247,0.34),transparent_30%),radial-gradient(circle_at_85%_25%,rgba(56,189,248,0.24),transparent_28%),linear-gradient(135deg,rgb(var(--background-elevated)),rgb(var(--card-strong)),rgb(var(--background)))]">
            <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--grid)/0.10)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--grid)/0.10)_1px,transparent_1px)] bg-[size:28px_28px]" />
          </div>

          <div className="relative px-5 pb-6 sm:px-7">
            <div className="-mt-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                <div className="h-28 w-28 overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-violet-500 to-cyan-400 shadow-xl">
                  {user.image ? (
                    <img
                      src={user.image}
                      alt={user.name ?? "User"}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-bold text-white">
                      {getInitials(user.name)}
                    </div>
                  )}
                </div>

                <div className="pb-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">
                      {user.name ?? "User"}
                    </h1>

                    {user.emailVerified && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-500">
                        <BadgeCheck className="h-3.5 w-3.5" />
                        Verified
                      </span>
                    )}

                    {user.isPremium && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-500">
                        <Crown className="h-3.5 w-3.5" />
                        Premium
                      </span>
                    )}
                  </div>

                  <p className="mt-2 flex items-center gap-2 text-sm text-muted">
                    <Mail className="h-4 w-4 text-primary" />
                    {user.email ?? "No email"}
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
          </div>
        </section>

        {/* Info grid */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <InfoItem icon={UserRound} label="Role" value={role} />
          <InfoItem icon={ShieldCheck} label="Status" value={status} />
          <InfoItem icon={Crown} label="Plan" value={plan} />
          <InfoItem
            icon={CalendarDays}
            label="Joined"
            value={formatDate(user.createdAt)}
          />
        </section>

        {/* Bottom content */}
        <div className="grid gap-5 lg:grid-cols-[1fr_340px]">
          <section className="card-theme rounded-[2rem] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Account Overview
            </p>

            <h2 className="mt-2 text-2xl font-bold text-foreground">
              Your PrimeHacks account
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
              Manage your profile, account security, subscription, and organizer
              access from one simple dashboard.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Link
                href="/hackathons"
                className="rounded-2xl border border-border/70 bg-background/45 p-4 transition hover:bg-accent/70"
              >
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">
                  Explore Hackathons
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Join events and submit your builds.
                </p>
              </Link>

              <Link
                href="/become-organizer"
                className="rounded-2xl border border-primary/25 bg-primary/10 p-4 transition hover:bg-primary/15"
              >
                <LayoutDashboard className="h-5 w-5 text-primary" />
                <h3 className="mt-3 font-semibold text-foreground">
                  Become an Organizer
                </h3>
                <p className="mt-1 text-sm text-muted">
                  Apply to host and manage hackathons.
                </p>
              </Link>
            </div>
          </section>

          <section className="card-theme rounded-[2rem] p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
              Subscription
            </p>

            <div className="mt-4 rounded-2xl border border-border/70 bg-background/45 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{plan}</h3>
                  <p className="mt-1 text-sm text-muted">
                    {user.isPremium
                      ? `Active until ${formatDate(user.premiumExpiresAt)}`
                      : "Upgrade anytime"}
                  </p>
                </div>

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10">
                  <Crown className="h-5 w-5 text-amber-500" />
                </div>
              </div>
            </div>

            <Link
              href="/premium"
              className="btn-theme mt-5 w-full justify-center"
            >
              {user.isPremium ? "Manage Plan" : "Upgrade Premium"}
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}
