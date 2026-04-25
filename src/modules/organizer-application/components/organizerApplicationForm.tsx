"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  Globe,
  Loader2,
  Mail,
  MessageSquareText,
  Rocket,
  ShieldCheck,
  Sparkles,
  UsersRound,
} from "lucide-react";
import FormField from "@/components/ui/FormField";
import FeatureItem from "@/components/ui/FeatureItem";
import { useForm } from "@tanstack/react-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { TCreateOrganizerApplicationPayload } from "@/types/organizerApplication.type";
import { organizerApplicationService } from "@/services/organizerApplication.service";

function InputIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
  );
}

function TextareaIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <Icon className="pointer-events-none absolute left-4 top-4 h-4 w-4 text-muted" />
  );
}

function FieldError({ errors }: { errors?: unknown[] }) {
  if (!errors?.length) return null;

  return (
    <p className="mt-2 text-xs font-medium text-destructive">
      {String(errors[0])}
    </p>
  );
}

const inputClassName =
  "h-12 w-full rounded-2xl border border-border/70 bg-background/60 px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10";

const textareaClassName =
  "w-full resize-none rounded-2xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10";

export default function BecomeOrganizerForm() {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationKey: ["organizerApplication", "create"],
    mutationFn: async (payload: TCreateOrganizerApplicationPayload) => {
      return organizerApplicationService.createOrganizerApplication(payload);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["organizerApplication"],
      });
    },
  });

  const form = useForm({
    defaultValues: {
      organizationName: "",
      websiteUrl: "",
      contactEmail: "",
      previousExperience: "",
      reason: "",
      expectedHackathonType: "",
      agreeToGuidelines: false,
    },
    onSubmit: async ({ value }) => {
      try {
        const payload: TCreateOrganizerApplicationPayload = {
          organizationName: value.organizationName.trim(),
          websiteUrl: value.websiteUrl.trim() || undefined,
          contactEmail: value.contactEmail.trim(),
          previousExperience: value.previousExperience.trim() || undefined,
          reason: value.reason.trim(),
          expectedHackathonType: value.expectedHackathonType as any, // Cast to any since it's optional and can be empty string
          agreeToGuidelines: value.agreeToGuidelines,
        };

        await mutateAsync(payload);

        toast.success("Organizer application submitted successfully");
        router.push("/dashboard");
      } catch (error: any) {
        toast.error(
          error?.response?.data?.message ||
            error?.message ||
            "Failed to submit application",
        );
      }
    },
  });

  return (
    <main className="relative min-h-screen overflow-hidden bg-background px-4 pb-28 pt-28 text-foreground sm:px-6 lg:pb-14 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgb(var(--primary)/0.18),transparent_28%),radial-gradient(circle_at_85%_10%,rgb(var(--hero-glow-secondary)/0.14),transparent_25%),radial-gradient(circle_at_50%_100%,rgb(var(--hero-glow-tertiary)/0.10),transparent_30%)]" />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--grid)/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--grid)/0.08)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40" />

      <div className="relative mx-auto max-w-6xl">
        <Link
          href="/dashboard"
          className="mb-5 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to dashboard
        </Link>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="relative overflow-hidden rounded-[2rem] border border-border/70 bg-card/70 p-6 shadow-[0_24px_80px_rgb(var(--shadow)/0.12)] backdrop-blur-2xl sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgb(var(--primary)/0.16),transparent_32%),radial-gradient(circle_at_86%_12%,rgb(var(--hero-glow-secondary)/0.12),transparent_28%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--grid)/0.10)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--grid)/0.10)_1px,transparent_1px)] bg-[size:28px_28px] opacity-30" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Organizer program
              </div>

              <h1 className="mt-6 max-w-xl text-4xl font-bold tracking-[-0.06em] text-foreground sm:text-5xl">
                Apply to become an organizer
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                Host hackathons, manage submissions, review projects, and build
                a trusted developer community on PrimeHacks.
              </p>

              <div className="mt-8 space-y-4">
                <FeatureItem
                  icon={Rocket}
                  title="Create hackathons"
                  description="Launch public or premium-only hackathons with rules, prizes, and deadlines."
                />

                <FeatureItem
                  icon={UsersRound}
                  title="Manage participants"
                  description="Track registrations, teams, and submissions from your organizer dashboard."
                />

                <FeatureItem
                  icon={ShieldCheck}
                  title="Admin reviewed"
                  description="Your application will be reviewed before organizer access is enabled."
                />
              </div>

              <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/10 p-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-sm leading-6 text-muted">
                    Submit real information. Approved organizers can create and
                    manage hackathons directly from the dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-border/70 bg-card/70 p-5 shadow-[0_24px_80px_rgb(var(--shadow)/0.12)] backdrop-blur-2xl sm:p-7">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
                Application form
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-foreground">
                Organizer details
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted">
                Tell us about your organization and why you want to host
                hackathons on PrimeHacks.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                e.stopPropagation();
                form.handleSubmit();
              }}
              className="mt-7 space-y-5"
            >
              <form.Field
                name="organizationName"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) return "Organization name is required";
                    if (value.trim().length < 2) {
                      return "Organization name must be at least 2 characters";
                    }
                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <FormField label="Organization / Community Name" required>
                    <div className="relative">
                      <InputIcon icon={Building2} />
                      <input
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Example: Prime Builders Community"
                        className={`${inputClassName} pl-11`}
                      />
                    </div>
                    <FieldError errors={field.state.meta.errors} />
                  </FormField>
                )}
              </form.Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <form.Field
                  name="websiteUrl"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value.trim()) return undefined;

                      try {
                        new URL(value);
                        return undefined;
                      } catch {
                        return "Website URL must be valid";
                      }
                    },
                  }}
                >
                  {(field) => (
                    <FormField label="Website / Social Link">
                      <div className="relative">
                        <InputIcon icon={Globe} />
                        <input
                          name={field.name}
                          type="url"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="https://example.com"
                          className={`${inputClassName} pl-11`}
                        />
                      </div>
                      <FieldError errors={field.state.meta.errors} />
                    </FormField>
                  )}
                </form.Field>

                <form.Field
                  name="contactEmail"
                  validators={{
                    onChange: ({ value }) => {
                      if (!value.trim()) return "Contact email is required";

                      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                      if (!emailRegex.test(value)) {
                        return "Contact email must be valid";
                      }

                      return undefined;
                    },
                  }}
                >
                  {(field) => (
                    <FormField label="Contact Email" required>
                      <div className="relative">
                        <InputIcon icon={Mail} />
                        <input
                          name={field.name}
                          type="email"
                          value={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.value)}
                          placeholder="organizer@example.com"
                          className={`${inputClassName} pl-11`}
                        />
                      </div>
                      <FieldError errors={field.state.meta.errors} />
                    </FormField>
                  )}
                </form.Field>
              </div>

              <form.Field
                name="previousExperience"
                validators={{
                  onChange: ({ value }) => {
                    if (value.length > 1000) {
                      return "Previous experience must be less than 1000 characters";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <FormField label="Previous Experience">
                    <div className="relative">
                      <TextareaIcon icon={MessageSquareText} />
                      <textarea
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Have you organized any hackathon, event, workshop, or community program before?"
                        rows={4}
                        className={`${textareaClassName} pl-11`}
                      />
                    </div>
                    <FieldError errors={field.state.meta.errors} />
                  </FormField>
                )}
              </form.Field>

              <form.Field
                name="reason"
                validators={{
                  onChange: ({ value }) => {
                    if (!value.trim()) return "Reason is required";
                    if (value.trim().length < 20) {
                      return "Reason must be at least 20 characters";
                    }
                    if (value.length > 1500) {
                      return "Reason must be less than 1500 characters";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <FormField
                    label="Why do you want to become an organizer?"
                    required
                  >
                    <div className="relative">
                      <TextareaIcon icon={Rocket} />
                      <textarea
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="Tell us your goal, audience, and what kind of hackathons you want to host."
                        rows={5}
                        className={`${textareaClassName} pl-11`}
                      />
                    </div>
                    <FieldError errors={field.state.meta.errors} />
                  </FormField>
                )}
              </form.Field>

              <form.Field name="expectedHackathonType">
                {(field) => (
                  <FormField label="Expected Hackathon Type">
                    <select
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className={`${inputClassName} cursor-pointer`}
                    >
                      <option value="">Select hackathon type</option>
                      <option value="ONLINE">Online hackathons</option>
                      <option value="OFFLINE">Offline events</option>
                      <option value="HYBRID">Hybrid events</option>
                      <option value="COLLEGE_COMMUNITY">
                        College/community hackathons
                      </option>
                      <option value="STARTUP_INDUSTRY">
                        Startup/industry challenges
                      </option>
                      <option value="OTHER">Other</option>
                    </select>
                  </FormField>
                )}
              </form.Field>

              <form.Field
                name="agreeToGuidelines"
                validators={{
                  onChange: ({ value }) => {
                    if (!value) {
                      return "You must agree to the organizer guidelines";
                    }

                    return undefined;
                  },
                }}
              >
                {(field) => (
                  <div>
                    <div className="rounded-3xl border border-border/70 bg-background/50 p-4">
                      <label className="flex cursor-pointer gap-3">
                        <input
                          name={field.name}
                          type="checkbox"
                          checked={field.state.value}
                          onBlur={field.handleBlur}
                          onChange={(e) => field.handleChange(e.target.checked)}
                          className="mt-1 h-4 w-4 rounded border-border accent-primary"
                        />

                        <span className="text-sm leading-6 text-muted">
                          I confirm that the information provided is accurate
                          and I agree to follow PrimeHacks organizer guidelines.
                        </span>
                      </label>
                    </div>
                    <FieldError errors={field.state.meta.errors} />
                  </div>
                )}
              </form.Field>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={isPending}
                  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-2xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_16px_40px_rgb(var(--primary)/0.22)] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                <Link
                  href="/dashboard"
                  className="flex h-12 flex-1 items-center justify-center rounded-2xl border border-border/70 bg-background/50 px-5 text-sm font-semibold text-foreground transition hover:bg-accent"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
