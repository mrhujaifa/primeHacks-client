"use client";

import Image from "next/image";
import {
  BadgeCheck,
  Briefcase,
  CalendarDays,
  Camera,
  Edit3,
  Globe,
  Mail,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trophy,
  Twitter,
  Github,
  Linkedin,
  User2,
  Loader,
} from "lucide-react";
import { useCurrentUser } from "@/hooks/useSession";
import { useEffect, useState } from "react";

export default function UserProfilePage() {
  const { data: user, isLoading, error } = useCurrentUser();
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isDarkMode =
      document.documentElement.classList.contains("dark") ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      const darkMode = document.documentElement.classList.contains("dark");
      setIsDark(darkMode);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const bgClass = isDark
    ? "bg-slate-950"
    : "bg-gradient-to-br from-slate-50 via-white to-blue-50";
  const textClass = isDark ? "text-white" : "text-slate-900";
  const secondaryText = isDark ? "text-slate-300" : "text-slate-600";
  const cardClass = isDark
    ? "border-white/10 bg-white/[0.03]"
    : "border-slate-200 bg-white shadow-sm";
  const buttonPrimaryClass = isDark
    ? "border-cyan-400/30 bg-cyan-400/10 text-cyan-200 hover:bg-cyan-400/15"
    : "border-blue-400/30 bg-blue-400/10 text-blue-600 hover:bg-blue-400/15";
  const buttonSecondaryClass = isDark
    ? "border-white/10 bg-white/[0.04] text-slate-200 hover:border-white/20 hover:bg-white/[0.06]"
    : "border-slate-300 bg-slate-50 text-slate-700 hover:border-slate-400 hover:bg-slate-100";

  if (isLoading) {
    return (
      <section className={`min-h-screen ${bgClass} text-white`}>
        <div className="flex items-center justify-center pt-20">
          <div className="flex flex-col items-center gap-4">
            <Loader className="h-8 w-8 animate-spin text-cyan-400" />
            <p className={textClass}>Loading profile...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className={`min-h-screen ${bgClass} text-white`}>
        <div className="flex items-center justify-center pt-20">
          <div className="text-center">
            <p className={`text-red-400`}>Failed to load profile</p>
          </div>
        </div>
      </section>
    );
  }

  const displayName = user?.name || "User Profile";
  const displayEmail = user?.email || "user@example.com";
  const displayBio =
    user?.bio ||
    "Full Stack Developer focused on building modern, scalable digital products.";
  const displayRole = user?.role || "Developer";
  const displayLocation = user?.location || "Earth";

  return (
    <section className={`min-h-screen ${bgClass} transition-colors duration-300`}>
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border ${cardClass} shadow-lg sm:shadow-2xl backdrop-blur-xl transition-colors duration-300`}
        >
          {/* background glow */}
          <div className="absolute inset-0">
            <div className={`absolute -left-24 top-0 h-72 w-72 rounded-full ${isDark ? "bg-cyan-500/10" : "bg-blue-400/5"} blur-3xl`} />
            <div className={`absolute right-0 top-10 h-72 w-72 rounded-full ${isDark ? "bg-sky-500/10" : "bg-purple-300/5"} blur-3xl`} />
            <div className={`absolute bottom-0 left-1/3 h-72 w-72 rounded-full ${isDark ? "bg-indigo-500/10" : "bg-pink-300/5"} blur-3xl`} />
          </div>

          {/* cover */}
          <div
            className={`relative h-40 w-full overflow-hidden border-b ${isDark ? "border-white/10 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20" : "border-slate-200 bg-gradient-to-r from-blue-100 via-purple-50 to-pink-100"} sm:h-56 lg:h-64`}
          >
            <div
              className={`absolute inset-0 ${isDark ? "bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_35%)]" : "bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.1),transparent_30%)]"}`}
            />
            <button
              className={`absolute right-3 top-3 sm:right-5 sm:top-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs sm:text-sm font-medium backdrop-blur-md transition ${buttonSecondaryClass}`}
            >
              <Camera className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Change Cover</span>
            </button>
          </div>

          <div className="relative px-4 pb-6 sm:px-6 lg:px-8 lg:pb-8">
            {/* top section */}
            <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="-mt-12 flex flex-col gap-4 sm:-mt-16 sm:flex-row sm:items-end lg:-mt-20">
                <div
                  className={`relative h-24 w-24 overflow-hidden rounded-2xl border-4 ${isDark ? "border-slate-950" : "border-white"} shadow-xl sm:h-32 sm:w-32 lg:h-40 lg:w-40`}
                >
                  <Image
                    src={
                      user?.profileImage ||
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
                    }
                    alt={displayName}
                    fill
                    className="object-cover"
                    priority
                  />
                  <button
                    className={`absolute bottom-2 right-2 rounded-full border p-1.5 backdrop-blur-md transition sm:bottom-3 sm:right-3 ${isDark ? "border-white/10 bg-slate-950/70 text-slate-200 hover:border-cyan-400/40 hover:text-cyan-300" : "border-slate-300 bg-white/70 text-slate-700 hover:border-blue-400/40 hover:text-blue-600"}`}
                  >
                    <Camera className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>

                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <h1
                      className={`text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl ${textClass}`}
                    >
                      {displayName}
                    </h1>
                    {user?.isVerified && (
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-semibold uppercase tracking-wider ${isDark ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200" : "border-blue-400/20 bg-blue-400/10 text-blue-600"}`}
                      >
                        <BadgeCheck className="h-3 w-3" />
                        <span className="hidden sm:inline">Verified</span>
                      </span>
                    )}
                  </div>

                  <p
                    className={`max-w-2xl text-xs leading-5 sm:text-sm sm:leading-6 lg:text-base lg:leading-7 ${secondaryText}`}
                  >
                    {displayBio}
                  </p>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 sm:gap-3 sm:text-sm">
                    <span className="inline-flex items-center gap-1">
                      <Briefcase
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${isDark ? "text-cyan-300" : "text-blue-600"}`}
                      />
                      {displayRole}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin
                        className={`h-3 w-3 sm:h-4 sm:w-4 ${isDark ? "text-cyan-300" : "text-blue-600"}`}
                      />
                      {displayLocation}
                    </span>
                    {user?.createdAt && (
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays
                          className={`h-3 w-3 sm:h-4 sm:w-4 ${isDark ? "text-cyan-300" : "text-blue-600"}`}
                        />
                        Joined{" "}
                        {new Date(user.createdAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "short",
                          },
                        )}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 xs:flex-row sm:gap-3">
                <button
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition duration-200 sm:rounded-2xl sm:px-5 sm:py-3 ${buttonPrimaryClass}`}
                >
                  <Edit3 className="h-4 w-4" />
                  <span className="hidden sm:inline">Edit Profile</span>
                  <span className="sm:hidden">Edit</span>
                </button>

                <button
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold transition duration-200 sm:rounded-2xl sm:px-5 sm:py-3 ${buttonSecondaryClass}`}
                >
                  <ShieldCheck className="h-4 w-4" />
                  <span className="hidden sm:inline">Account Settings</span>
                  <span className="sm:hidden">Settings</span>
                </button>
              </div>
            </div>

            {/* stats */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
              {[
                { title: "Projects", value: "24", icon: <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { title: "Hackathons", value: "12", icon: <Trophy className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { title: "Followers", value: "1.8K", icon: <User2 className="h-4 w-4 sm:h-5 sm:w-5" /> },
                { title: "Reputation", value: "94%", icon: <ShieldCheck className="h-4 w-4 sm:h-5 sm:w-5" /> },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className={`rounded-xl border p-3 backdrop-blur-xl transition-colors duration-300 sm:rounded-2xl sm:p-4 lg:rounded-3xl lg:p-5 ${cardClass}`}
                >
                  <div
                    className={`mb-2 inline-flex rounded-lg border p-2 sm:mb-3 sm:rounded-xl sm:p-2.5 ${isDark ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-200" : "border-blue-400/20 bg-blue-400/10 text-blue-600"}`}
                  >
                    {item.icon}
                  </div>
                  <h3 className={`text-lg font-bold sm:text-2xl ${textClass}`}>
                    {item.value}
                  </h3>
                  <p className={`mt-1 text-xs text-slate-400 sm:text-sm`}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* content */}
            <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              {/* left */}
              <div className="space-y-4 sm:space-y-6">
                <div className={`rounded-xl border p-4 sm:rounded-2xl sm:p-6 ${cardClass}`}>
                  <h2 className={`text-lg font-semibold sm:text-xl ${textClass}`}>
                    About
                  </h2>
                  <p
                    className={`mt-3 text-xs leading-5 sm:mt-4 sm:text-sm sm:leading-6 lg:text-base lg:leading-7 ${secondaryText}`}
                  >
                    {displayBio}
                  </p>
                </div>

                <div className={`rounded-xl border p-4 sm:rounded-2xl sm:p-6 ${cardClass}`}>
                  <h2 className={`text-lg font-semibold sm:text-xl ${textClass}`}>
                    Skills
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2 sm:mt-4 sm:gap-3">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Express.js",
                      "Prisma",
                      "PostgreSQL",
                      "Tailwind",
                      "TanStack",
                      "Zod",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border px-3 py-1 text-xs font-medium sm:px-4 sm:py-2 sm:text-sm transition-colors duration-300 ${isDark ? "border-cyan-400/20 bg-cyan-400/10 text-cyan-100" : "border-blue-400/20 bg-blue-400/10 text-blue-700"}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={`rounded-xl border p-4 sm:rounded-2xl sm:p-6 ${cardClass}`}>
                  <h2 className={`text-lg font-semibold sm:text-xl ${textClass}`}>
                    Recent Activity
                  </h2>

                  <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                    {[
                      {
                        title: "Created a new hackathon dashboard UI",
                        time: "2 hours ago",
                      },
                      {
                        title: "Updated profile information",
                        time: "Yesterday",
                      },
                      {
                        title: "Published a new product case study",
                        time: "3 days ago",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-start gap-3 rounded-lg border p-3 sm:rounded-xl sm:p-4 ${isDark ? "border-white/8 bg-slate-950/40" : "border-slate-200 bg-slate-50/50"}`}
                      >
                        <div
                          className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${isDark ? "bg-cyan-400" : "bg-blue-500"}`}
                        />
                        <div className="flex-1 min-w-0">
                          <p className={`text-xs font-medium sm:text-sm ${textClass}`}>
                            {item.title}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-400 sm:mt-1">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="space-y-4 sm:space-y-6">
                <div className={`rounded-xl border p-4 sm:rounded-2xl sm:p-6 ${cardClass}`}>
                  <h2 className={`text-lg font-semibold sm:text-xl ${textClass}`}>
                    Contact
                  </h2>

                  <div className="mt-3 space-y-3 sm:mt-4 sm:space-y-4">
                    <div className={`flex items-center gap-3 text-xs sm:text-sm ${secondaryText}`}>
                      <Mail
                        className={`h-4 w-4 flex-shrink-0 ${isDark ? "text-cyan-300" : "text-blue-600"}`}
                      />
                      <span className="break-all">{displayEmail}</span>
                    </div>
                    <div className={`flex items-center gap-3 text-xs sm:text-sm ${secondaryText}`}>
                      <Globe
                        className={`h-4 w-4 flex-shrink-0 ${isDark ? "text-cyan-300" : "text-blue-600"}`}
                      />
                      www.portfolio.dev
                    </div>
                    <div className={`flex items-center gap-3 text-xs sm:text-sm ${secondaryText}`}>
                      <MapPin
                        className={`h-4 w-4 flex-shrink-0 ${isDark ? "text-cyan-300" : "text-blue-600"}`}
                      />
                      {displayLocation}
                    </div>
                  </div>
                </div>

                <div className={`rounded-xl border p-4 sm:rounded-2xl sm:p-6 ${cardClass}`}>
                  <h2 className={`text-lg font-semibold sm:text-xl ${textClass}`}>
                    Social Links
                  </h2>

                  <div className="mt-3 grid gap-2 sm:mt-4 sm:gap-3">
                    {[
                      {
                        icon: <Github className="h-4 w-4" />,
                        label: "GitHub",
                        value: "@hujaifa-dev",
                      },
                      {
                        icon: <Linkedin className="h-4 w-4" />,
                        label: "LinkedIn",
                        value: "linkedin.com/in/hujaifa",
                      },
                      {
                        icon: <Twitter className="h-4 w-4" />,
                        label: "Twitter",
                        value: "@hujaifa_ui",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between rounded-lg border p-3 sm:rounded-xl sm:p-3.5 ${isDark ? "border-white/8 bg-slate-950/40" : "border-slate-200 bg-slate-50/50"}`}
                      >
                        <div className={`flex items-center gap-2 sm:gap-3 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                          <span
                            className={isDark ? "text-cyan-300" : "text-blue-600"}
                          >
                            {item.icon}
                          </span>
                          <span className="text-xs font-medium sm:text-sm">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-xs text-slate-400 sm:text-sm">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`rounded-xl border p-4 sm:rounded-2xl sm:p-6 ${cardClass}`}>
                  <h2 className={`text-lg font-semibold sm:text-xl ${textClass}`}>
                    Professional
                  </h2>

                  <div className="mt-3 space-y-3 text-xs sm:mt-4 sm:space-y-4 sm:text-sm">
                    <div
                      className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-white/5" : "border-slate-200"} ${secondaryText}`}
                    >
                      <span className="text-slate-400">Role</span>
                      <span className={textClass}>Senior Frontend Engineer</span>
                    </div>
                    <div
                      className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-white/5" : "border-slate-200"} ${secondaryText}`}
                    >
                      <span className="text-slate-400">Experience</span>
                      <span className={textClass}>4+ Years</span>
                    </div>
                    <div
                      className={`flex items-center justify-between border-b pb-3 ${isDark ? "border-white/5" : "border-slate-200"} ${secondaryText}`}
                    >
                      <span className="text-slate-400">Specialization</span>
                      <span className={textClass}>Full Stack</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Availability</span>
                      <span className="text-emerald-400 font-medium">Open</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] shadow-[0_0_80px_rgba(6,182,212,0.08)] backdrop-blur-xl">
          {/* background glow */}
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
            <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          {/* cover */}
          <div className="relative h-56 w-full overflow-hidden border-b border-white/10 bg-gradient-to-r from-cyan-500/20 via-sky-500/10 to-indigo-500/20 sm:h-64">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.25),transparent_30%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_35%)]" />
            <button className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/50 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-200">
              <Camera className="h-4 w-4" />
              Change Cover
            </button>
          </div>

          <div className="relative px-5 pb-6 sm:px-8 lg:px-10">
            {/* top section */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="-mt-16 flex flex-col gap-5 sm:-mt-20 sm:flex-row sm:items-end">
                <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-4 border-[#020617] bg-slate-900 shadow-2xl sm:h-40 sm:w-40">
                  <Image
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                  <button className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-slate-950/70 p-2 text-slate-200 backdrop-blur-md transition hover:border-cyan-400/40 hover:text-cyan-300">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      Hujaifa Rahman
                    </h1>

                    <span className="inline-flex items-center gap-1 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                      <BadgeCheck className="h-3.5 w-3.5" />
                      Verified
                    </span>
                  </div>

                  <p className="max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                    Full Stack Developer focused on building modern, scalable,
                    and premium digital products. Passionate about SaaS,
                    AI-powered applications, and industry-level UI systems.
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-cyan-300" />
                      Software Engineer
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-cyan-300" />
                      Dhaka, Bangladesh
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 text-cyan-300" />
                      Joined March 2026
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <button className="inline-flex items-center gap-2 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-400/15">
                  <Edit3 className="h-4 w-4" />
                  Edit Profile
                </button>

                <button className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/[0.06]">
                  <ShieldCheck className="h-4 w-4" />
                  Account Settings
                </button>
              </div>
            </div>

            {/* stats */}
            <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {[
                {
                  title: "Projects",
                  value: "24",
                  icon: <Sparkles className="h-5 w-5" />,
                },
                {
                  title: "Hackathons",
                  value: "12",
                  icon: <Trophy className="h-5 w-5" />,
                },
                {
                  title: "Followers",
                  value: "1.8K",
                  icon: <User2 className="h-5 w-5" />,
                },
                {
                  title: "Reputation",
                  value: "94%",
                  icon: <ShieldCheck className="h-5 w-5" />,
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
                >
                  <div className="mb-4 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-3 text-cyan-200">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {item.value}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">{item.title}</p>
                </div>
              ))}
            </div>

            {/* content */}
            <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              {/* left */}
              <div className="space-y-6">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-xl font-semibold text-white">About</h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-[15px]">
                    I specialize in crafting clean and high-performing web
                    applications with strong attention to architecture, user
                    experience, and maintainability. I enjoy working on
                    hackathon platforms, AI products, dashboards, and modern
                    frontend systems with polished UI.
                  </p>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-xl font-semibold text-white">Skills</h2>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {[
                      "Next.js",
                      "React",
                      "TypeScript",
                      "Node.js",
                      "Express.js",
                      "Prisma",
                      "PostgreSQL",
                      "Tailwind CSS",
                      "TanStack Query",
                      "Zod",
                      "AI Integration",
                      "UI/UX Design",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-xl font-semibold text-white">
                    Recent Activity
                  </h2>

                  <div className="mt-5 space-y-4">
                    {[
                      {
                        title: "Created a new hackathon dashboard UI",
                        time: "2 hours ago",
                      },
                      {
                        title:
                          "Updated profile information and portfolio links",
                        time: "Yesterday",
                      },
                      {
                        title: "Published a new AI product case study",
                        time: "3 days ago",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 rounded-2xl border border-white/8 bg-slate-950/40 p-4"
                      >
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-100">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {item.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* right */}
              <div className="space-y-6">
                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-xl font-semibold text-white">
                    Contact Info
                  </h2>

                  <div className="mt-5 space-y-4">
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Mail className="h-4 w-4 text-cyan-300" />
                      hujaifa@example.com
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <Globe className="h-4 w-4 text-cyan-300" />
                      www.hujaifa.dev
                    </div>
                    <div className="flex items-center gap-3 text-sm text-slate-300">
                      <MapPin className="h-4 w-4 text-cyan-300" />
                      Bangladesh
                    </div>
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-xl font-semibold text-white">Social</h2>

                  <div className="mt-5 grid grid-cols-1 gap-3">
                    {[
                      {
                        icon: <Github className="h-4 w-4" />,
                        label: "GitHub",
                        value: "@hujaifa-dev",
                      },
                      {
                        icon: <Linkedin className="h-4 w-4" />,
                        label: "LinkedIn",
                        value: "linkedin.com/in/hujaifa",
                      },
                      {
                        icon: <Twitter className="h-4 w-4" />,
                        label: "Twitter",
                        value: "@hujaifa_ui",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-slate-950/40 px-4 py-3"
                      >
                        <div className="flex items-center gap-3 text-slate-200">
                          <span className="text-cyan-300">{item.icon}</span>
                          <span className="text-sm font-medium">
                            {item.label}
                          </span>
                        </div>
                        <span className="text-sm text-slate-400">
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                  <h2 className="text-xl font-semibold text-white">
                    Professional Details
                  </h2>

                  <div className="mt-5 space-y-4 text-sm text-slate-300">
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="text-slate-400">Role</span>
                      <span>Senior Frontend Engineer</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="text-slate-400">Experience</span>
                      <span>4+ Years</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <span className="text-slate-400">Specialization</span>
                      <span>Full Stack & UI Systems</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Availability</span>
                      <span className="text-emerald-400">Open to Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* end content */}
          </div>
        </div>
      </div>
    </section>
  );
}
