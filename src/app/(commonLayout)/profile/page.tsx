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
} from "lucide-react";

export default function UserProfilePage() {
  return (
    <section className="min-h-screen bg-[#020617] text-white">
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
