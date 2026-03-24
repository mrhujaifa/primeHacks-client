"use client";

export default function HackathonCreateForm() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#040816_0%,#07111f_45%,#08131d_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <form className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,30,0.96),rgba(7,12,22,0.98))] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          <div className="border-b border-white/10 px-6 py-6 sm:px-8">
            <p className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
              Hackathon Setup
            </p>

            <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Create Hackathon
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
              Create a professional hackathon listing with timeline, prize
              details, rules, and registration information.
            </p>
          </div>

          <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
            {/* Basic Info */}
            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Basic Information
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Main public information for your hackathon.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Title <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="title"
                    type="text"
                    placeholder="AI Innovation Hackathon 2026"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Slug <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="slug"
                    type="text"
                    placeholder="ai-innovation-hackathon-2026"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Short Description <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="shortDescription"
                    rows={3}
                    placeholder="Build innovative AI-powered products and solutions."
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full Description <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    name="fullDescription"
                    rows={6}
                    placeholder="Write full hackathon details, challenges, tracks, audience, and expectations..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Category ID <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="categoryId"
                    type="text"
                    placeholder="cmn1ha0mo0001c8ron6pdimwm"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                {/* 
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Organizer ID <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="organizerId"
                    type="text"
                    placeholder="organizer-user-id"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div> */}
              </div>
            </section>

            {/* Media & Contact */}
            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Media & Contact
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Optional branding assets and important links.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Logo URL
                  </label>
                  <input
                    name="logoUrl"
                    type="url"
                    placeholder="https://example.com/logo.png"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Banner Image URL
                  </label>
                  <input
                    name="bannerImageUrl"
                    type="url"
                    placeholder="https://example.com/banner.png"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Website URL
                  </label>
                  <input
                    name="websiteUrl"
                    type="url"
                    placeholder="https://example.com"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Discord URL
                  </label>
                  <input
                    name="discordUrl"
                    type="url"
                    placeholder="https://discord.gg/example"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Contact Email
                  </label>
                  <input
                    name="contactEmail"
                    type="email"
                    placeholder="organizer@example.com"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </section>

            {/* Rules */}
            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Rules & Eligibility
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Define participation rules and requirements clearly.
              </p>

              <div className="mt-5 grid gap-5">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Rules
                  </label>
                  <textarea
                    name="rules"
                    rows={5}
                    placeholder="Teams must submit original work. Maximum 4 members per team..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Eligibility
                  </label>
                  <textarea
                    name="eligibility"
                    rows={5}
                    placeholder="Open to students, developers, designers, and builders worldwide..."
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </section>

            {/* Prize & Registration */}
            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Prize & Registration
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Add reward and team-related details.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Prize Pool Text
                  </label>
                  <input
                    name="prizePoolText"
                    type="text"
                    placeholder="$10,000 in prizes + mentorship"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Registration Fee
                  </label>
                  <input
                    name="registrationFee"
                    type="number"
                    step="0.01"
                    placeholder="0.00"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Currency
                  </label>
                  <input
                    name="currency"
                    type="text"
                    defaultValue="USDT"
                    placeholder="USDT"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Max Team Size
                  </label>
                  <input
                    name="maxTeamSize"
                    type="number"
                    placeholder="4"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Status
                  </label>
                  <select
                    name="status"
                    defaultValue="DRAFT"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  >
                    <option value="DRAFT">DRAFT</option>
                    <option value="PUBLISHED">PUBLISHED</option>
                    <option value="ONGOING">ONGOING</option>
                    <option value="COMPLETED">COMPLETED</option>
                    <option value="CANCELLED">CANCELLED</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Dates */}
            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Timeline & Dates
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Schedule registration, event timeline, and submission deadline.
              </p>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Registration Start Date
                  </label>
                  <input
                    name="registrationStartDate"
                    type="datetime-local"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Registration End Date
                  </label>
                  <input
                    name="registrationEndDate"
                    type="datetime-local"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Start Date
                  </label>
                  <input
                    name="startDate"
                    type="datetime-local"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    End Date
                  </label>
                  <input
                    name="endDate"
                    type="datetime-local"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Submission Deadline <span className="text-rose-400">*</span>
                  </label>
                  <input
                    name="submissionDeadline"
                    type="datetime-local"
                    className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
              </div>
            </section>

            {/* Action */}
            <div className="flex flex-col gap-3 border-t border-white/10 pt-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)] px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01]"
              >
                Create Hackathon
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
