"use client";

import { HackathonServices } from "@/services/hackathon.service";
import {
  HackathonStatus,
  ICreateHackathonPayload,
} from "@/types/hackathon.types";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";

export default function HackathonCreateForm() {
  const initialValues: ICreateHackathonPayload = {
    title: "",
    slug: "",
    shortDescription: "",
    fullDescription: "",
    submissionDeadline: "",
    categoryId: "",
    organizerId: "",

    logoUrl: "",
    bannerImageUrl: "",
    websiteUrl: "",
    discordUrl: "",
    contactEmail: "",
    rules: "",
    eligibility: "",
    prizePoolText: "",

    registrationFee: 0,
    currency: "USD",
    maxTeamSize: 4,

    registrationStartDate: "",
    registrationEndDate: "",
    startDate: "",
    endDate: "",

    status: "DRAFT" as HackathonStatus,
    isFeatured: false,
    isPremiumOnly: false,
  };

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: ICreateHackathonPayload) => {
      return await HackathonServices.createHackathon(payload);
    },
  });

  const form = useForm({
    defaultValues: initialValues,
    onSubmit: async ({ value }) => {
      try {
        const result = await mutateAsync(value);
        console.log("Hackathon created successfully:", result);
        form.reset();
      } catch (error) {
        console.error("Submission failed:", error);
      }
    },
  });

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#040816_0%,#07111f_45%,#08131d_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,30,0.96),rgba(7,12,22,0.98))] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
        >
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
            <section className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5 sm:p-6">
              <h2 className="text-lg font-semibold text-white">
                Basic Information
              </h2>

              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <form.Field name="title">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Title <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name={field.name}
                          type="text"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="AI Innovation Hackathon 2026"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div className="md:col-span-2">
                  <form.Field name="slug">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Slug <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name={field.name}
                          type="text"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="ai-innovation-hackathon-2026"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div className="md:col-span-2">
                  <form.Field name="shortDescription">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Short Description{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <textarea
                          name={field.name}
                          rows={3}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Build innovative AI-powered products and solutions."
                          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div className="md:col-span-2">
                  <form.Field name="fullDescription">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Full Description{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <textarea
                          name={field.name}
                          rows={6}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="Write full hackathon details..."
                          className="w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field name="categoryId">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Category ID <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name={field.name}
                          type="text"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="cmn1ha0mo0001c8ron6pdimwm"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field name="currency">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Currency
                        </label>
                        <input
                          name={field.name}
                          type="text"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="USD"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field name="registrationFee">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Registration Fee
                        </label>
                        <input
                          name={field.name}
                          type="number"
                          step="0.01"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) =>
                            field.handleChange(Number(e.target.value))
                          }
                          placeholder="0.00"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field name="maxTeamSize">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Max Team Size
                        </label>
                        <input
                          name={field.name}
                          type="number"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) =>
                            field.handleChange(Number(e.target.value))
                          }
                          placeholder="4"
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div>
                  <form.Field name="status">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Status
                        </label>
                        <select
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) =>
                            field.handleChange(
                              e.target.value as HackathonStatus,
                            )
                          }
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        >
                          <option value="DRAFT">DRAFT</option>
                          <option value="PUBLISHED">PUBLISHED</option>
                          <option value="ONGOING">ONGOING</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="CANCELLED">CANCELLED</option>
                        </select>
                      </>
                    )}
                  </form.Field>
                </div>

                <div className="md:col-span-2">
                  <form.Field name="submissionDeadline">
                    {(field) => (
                      <>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Submission Deadline{" "}
                          <span className="text-rose-400">*</span>
                        </label>
                        <input
                          name={field.name}
                          type="datetime-local"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          className="h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none focus:border-cyan-400/50 focus:ring-2 focus:ring-cyan-400/20"
                        />
                      </>
                    )}
                  </form.Field>
                </div>

                <div className="md:col-span-2 flex items-center gap-6">
                  <form.Field name="isFeatured">
                    {(field) => (
                      <label className="flex items-center gap-3 text-sm text-slate-200">
                        <input
                          type="checkbox"
                          checked={field.state.value}
                          onChange={(e) => field.handleChange(e.target.checked)}
                          className="h-4 w-4 rounded border-white/20 bg-slate-900"
                        />
                        Featured hackathon
                      </label>
                    )}
                  </form.Field>

                  <form.Field name="isPremiumOnly">
                    {(field) => (
                      <label className="flex items-center gap-3 text-sm text-slate-200">
                        <input
                          type="checkbox"
                          checked={field.state.value}
                          onChange={(e) => field.handleChange(e.target.checked)}
                          className="h-4 w-4 rounded border-white/20 bg-slate-900"
                        />
                        Premium only
                      </label>
                    )}
                  </form.Field>
                </div>
              </div>
            </section>

            <div className="flex flex-col gap-3 border-t border-white/10 pt-2 sm:flex-row sm:items-center sm:justify-end">
              <button
                type="button"
                onClick={() => form.reset()}
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] px-5 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06]"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isPending}
                className="inline-flex h-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#22d3ee,#3b82f6,#8b5cf6)] px-5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isPending ? "Creating..." : "Create Hackathon"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
