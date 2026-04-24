
"use client";

import { updateHackathonMutationFn } from "@/hooks/hackathon/hackathon.mutations";
import { ApiErrorResponse } from "@/interface/api.interface";
import {
  BackendHackathon,
  HackathonStatus,
  IHackathonCategory,
  THackathonFormValues,
  TUpdateHackathonPayload,
} from "@/types/hackathon.types";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import toast from "react-hot-toast";

export default function UpdateHackathonFormUI({
  hackathonId,
  hackathon,
  categories,
}: {
  hackathonId: string;
  hackathon: BackendHackathon;
  categories: IHackathonCategory[];
}) {
  console.log(categories);
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: TUpdateHackathonPayload) => {
      return await updateHackathonMutationFn({ id: hackathonId, payload });
    },

    onSuccess: () => {
      toast.success("Hackathon updated successfully.");
    },

    onError: (error) => {
      const axiosError = error as AxiosError<ApiErrorResponse>;

      const backendMessage = axiosError.response?.data?.message;

      if (axiosError.message === "Network Error") {
        toast.error(
          "Server connection failed. Please check your internet or backend server.",
        );
        return;
      }

      toast.error(
        backendMessage || "Failed to update hackathon. Please try again.",
      );
    },
  });

  const formatDateTimeLocal = (value?: string | Date | null) => {
    if (!value) return "";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "";

    const pad = (num: number) => String(num).padStart(2, "0");

    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
      date.getDate(),
    )}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };
  const toPrismaDateTime = (value?: string) => {
    if (!value) return undefined;
    return new Date(value).toISOString();
  };

  const formDefaultValue: THackathonFormValues = {
    title: hackathon.title ?? "",
    shortDescription: hackathon.shortDescription ?? "",
    fullDescription: hackathon.fullDescription ?? "",

    logoUrl: hackathon.logoUrl ?? "",
    bannerImageUrl: hackathon.bannerImageUrl ?? "",
    websiteUrl: hackathon.websiteUrl ?? "",
    discordUrl: hackathon.discordUrl ?? "",
    contactEmail: hackathon.contactEmail ?? "",

    rules: hackathon.rules ?? "",
    eligibility: hackathon.eligibility ?? "",

    prizePoolText: hackathon.prizePoolText ?? "",
    registrationFee: Number(hackathon.registrationFee ?? 0),
    currency: hackathon.currency ?? "USDT",

    maxTeamSize: Number(hackathon.maxTeamSize ?? 0),

    registrationStartDate: formatDateTimeLocal(hackathon.registrationStartDate),
    registrationEndDate: formatDateTimeLocal(hackathon.registrationEndDate),
    startDate: formatDateTimeLocal(hackathon.startDate),
    endDate: formatDateTimeLocal(hackathon.endDate),
    submissionDeadline: formatDateTimeLocal(hackathon.submissionDeadline),

    status: hackathon.status ?? "DRAFT",
    isFeatured: hackathon.isFeatured ?? false,
    isPremiumOnly: hackathon.isPremiumOnly ?? false,

    categoryId: hackathon.category?.id ?? "",
  };

  const sanitizePayload = (
    values: THackathonFormValues,
  ): TUpdateHackathonPayload => {
    const payload: TUpdateHackathonPayload = {
      title: values.title.trim() || undefined,
      shortDescription: values.shortDescription.trim() || undefined,
      fullDescription: values.fullDescription.trim() || undefined,

      logoUrl: values.logoUrl.trim() || undefined,
      bannerImageUrl: values.bannerImageUrl.trim() || undefined,
      websiteUrl: values.websiteUrl.trim() || undefined,
      discordUrl: values.discordUrl.trim() || undefined,
      contactEmail: values.contactEmail.trim() || undefined,

      rules: values.rules.trim() || undefined,
      eligibility: values.eligibility.trim() || undefined,

      prizePoolText: values.prizePoolText.trim() || undefined,
      registrationFee: values.registrationFee || undefined,
      currency: values.currency.trim() || undefined,

      maxTeamSize: values.maxTeamSize || undefined,

      registrationStartDate: toPrismaDateTime(values.registrationStartDate),
      registrationEndDate: toPrismaDateTime(values.registrationEndDate),
      startDate: toPrismaDateTime(values.startDate),
      endDate: toPrismaDateTime(values.endDate),
      submissionDeadline: toPrismaDateTime(values.submissionDeadline),

      status: values.status || undefined,
      isFeatured: values.isFeatured,
      isPremiumOnly: values.isPremiumOnly,

      categoryId: values.categoryId || undefined,
    };

    return Object.fromEntries(
      Object.entries(payload).filter(([_, value]) => value !== undefined),
    ) as TUpdateHackathonPayload;
  };
  const form = useForm({
    defaultValues: formDefaultValue,
    onSubmit: async ({ value }) => {
      try {
        await mutateAsync(sanitizePayload(value));
      } catch (error: any) {
        console.log(error.message);
        throw error;
      }
    },
  });

  const hackathonStatuses: HackathonStatus[] = [
    "ACTIVE",
    "COMPLETED",
    "DRAFT",
    "ENDED",
    "UPCOMING",
  ] as const;
  const inputClass =
    "h-12 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-slate-950/70";

  const textareaClass =
    "min-h-[140px] w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-slate-950/70";

  const sectionClass =
    "rounded-[32px] border border-white/10 bg-[linear-gradient(180deg,rgba(10,18,30,0.92),rgba(7,15,24,0.88))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6";

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_20%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.14),transparent_18%),linear-gradient(180deg,#06131c_0%,#081520_38%,#0b1220_100%)] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,15,27,0.92),rgba(10,24,36,0.88))] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.14),transparent_20%)]" />

          <div className="relative flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-flex w-fit items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.24em] text-cyan-300">
                Update Hackathon
              </span>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Edit Your Hackathon
              </h1>

              <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                Update your hackathon details, timeline, rewards, visibility,
                and organizer-facing settings.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-slate-400">Mode</p>
                <p className="mt-1 text-sm font-medium text-white">Editor</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-slate-400">Fields</p>
                <p className="mt-1 text-sm font-medium text-white">
                  Full Control
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs text-slate-400">Access</p>
                <p className="mt-1 text-sm font-medium text-white">Organizer</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
          className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="space-y-6">
            <div className={sectionClass}>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Basic Information
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Public-facing identity and summary of your hackathon.
                </p>
              </div>

              <div className="mt-6 space-y-5">
                <form.Field name="title">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Title
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="AI Innovation Hackathon 2026"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="shortDescription">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Short Description
                      </label>
                      <textarea
                        className={textareaClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Write a short summary of your hackathon"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="fullDescription">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Full Description
                      </label>
                      <textarea
                        className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-slate-950/50 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40 focus:bg-slate-950/70"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Write complete hackathon details"
                      />
                    </div>
                  )}
                </form.Field>
              </div>
            </div>

            <div className={sectionClass}>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Media & Contact
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Branding assets, links, and contact information.
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <form.Field name="logoUrl">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Logo URL
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="https://example.com/logo.png"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="bannerImageUrl">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Banner URL
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="https://example.com/banner.png"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="websiteUrl">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Website URL
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="https://example.com"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="discordUrl">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Discord URL
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="https://discord.gg/example"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="contactEmail">
                  {(field) => (
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Contact Email
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="team@example.com"
                      />
                    </div>
                  )}
                </form.Field>
              </div>
            </div>

            <div className={sectionClass}>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Rules & Eligibility
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Define participation policy and eligibility requirements.
                </p>
              </div>

              <div className="mt-6 space-y-5">
                <form.Field name="rules">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Rules
                      </label>
                      <textarea
                        className={textareaClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Write hackathon rules"
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="eligibility">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Eligibility
                      </label>
                      <textarea
                        className={textareaClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Write eligibility requirements"
                      />
                    </div>
                  )}
                </form.Field>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className={sectionClass}>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Category & Rewards
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Configure category, pricing, reward text, and team size.
                </p>
              </div>

              <div className="mt-6 space-y-5">
                <form.Field name="categoryId">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Category
                      </label>
                      <select
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      >
                        {categories.map((category) => (
                          <option value={category.id} key={category.id}>
                            {category.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </form.Field>

                <form.Field name="prizePoolText">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Prize Pool Text
                      </label>
                      <input
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="$10,000 in rewards"
                      />
                    </div>
                  )}
                </form.Field>

                <div className="grid gap-5 md:grid-cols-2">
                  <form.Field name="registrationFee">
                    {(field) => (
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Registration Fee
                        </label>
                        <input
                          className={inputClass}
                          type="number"
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          placeholder="0"
                          onChange={(e) =>
                            field.handleChange(
                              e.target.value === ""
                                ? 0
                                : Number(e.target.value),
                            )
                          }
                        />
                      </div>
                    )}
                  </form.Field>

                  <form.Field name="currency">
                    {(field) => (
                      <div>
                        <label className="mb-2 block text-sm font-medium text-slate-200">
                          Currency
                        </label>
                        <input
                          className={inputClass}
                          name={field.name}
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="USDT"
                        />
                      </div>
                    )}
                  </form.Field>
                </div>

                <form.Field name="maxTeamSize">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Max Team Size
                      </label>
                      <input
                        className={inputClass}
                        type="number"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(
                            e.target.value === "" ? 0 : Number(e.target.value),
                          )
                        }
                        placeholder="4"
                      />
                    </div>
                  )}
                </form.Field>
              </div>
            </div>

            <div className={sectionClass}>
              <div>
                <h2 className="text-xl font-semibold text-white">Timeline</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Manage registration period, event duration, and submission
                  deadline.
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-2">
                <form.Field name="registrationStartDate">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Registration Start
                      </label>
                      <input
                        className={inputClass}
                        type="datetime-local"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="registrationEndDate">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Registration End
                      </label>
                      <input
                        className={inputClass}
                        type="datetime-local"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="startDate">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Start Date
                      </label>
                      <input
                        className={inputClass}
                        type="datetime-local"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="endDate">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        End Date
                      </label>
                      <input
                        className={inputClass}
                        type="datetime-local"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>

                <form.Field name="submissionDeadline">
                  {(field) => (
                    <div className="md:col-span-2">
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Submission Deadline
                      </label>
                      <input
                        className={inputClass}
                        type="datetime-local"
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                      />
                    </div>
                  )}
                </form.Field>
              </div>
            </div>

            <div className={sectionClass}>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Visibility & Status
                </h2>
                <p className="mt-1 text-sm text-slate-400">
                  Control publishing state and premium access behavior.
                </p>
              </div>

              <div className="mt-6 space-y-5">
                <form.Field name="status">
                  {(field) => (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-200">
                        Status
                      </label>
                      <select
                        className={inputClass}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) =>
                          field.handleChange(e.target.value as HackathonStatus)
                        }
                      >
                        {hackathonStatuses.map((status) => (
                          <option key={status} value={status}>
                            {status}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </form.Field>

                <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-4">
                  <form.Field name="isFeatured">
                    {(field) => (
                      <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Featured
                          </p>
                          <p className="text-xs text-slate-400">
                            Show this hackathon in featured sections.
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          name={field.name}
                          checked={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.checked)}
                          className="size-5 rounded border-white/20 bg-slate-900"
                        />
                      </label>
                    )}
                  </form.Field>

                  <form.Field name="isPremiumOnly">
                    {(field) => (
                      <label className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3">
                        <div>
                          <p className="text-sm font-medium text-white">
                            Premium Only
                          </p>
                          <p className="text-xs text-slate-400">
                            Allow only premium users to participate.
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          name={field.name}
                          checked={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.checked)}
                          className="size-5 rounded border-white/20 bg-slate-900"
                        />
                      </label>
                    )}
                  </form.Field>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(9,17,28,0.92),rgba(7,13,22,0.9))] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Ready to save changes?
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    Review your updates before submitting.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                  >
                    Reset
                  </button>

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#22d3ee,#3b82f6)] px-6 text-sm font-semibold text-slate-950 transition hover:scale-[0.99]"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
