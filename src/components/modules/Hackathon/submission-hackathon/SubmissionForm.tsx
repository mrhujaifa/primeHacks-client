"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { createSubmissionMutationFn } from "@/hooks/hackathon/hackathon.mutations";
import { ICreateSubmissionPayload } from "@/types/submission.type";
import { validateSubmission } from "@/validations/submission.validation";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

const createSubmissionDefaultValues: ICreateSubmissionPayload = {
  title: "",
  shortSummary: "",
  description: "",
  techStack: [],
  repositoryUrl: "",
  demoUrl: "",
  videoUrl: "",
  thumbnailUrl: "",
};

export const SubmissionForm = ({ hackathonId }: { hackathonId: string }) => {
  console.log("SubmissionForm hackathonId:", hackathonId);
  const { mutateAsync, isPending } = useMutation({
    mutationKey: hackathonKeys.mutation.createSubmission(hackathonId),
    mutationFn: async (payload: ICreateSubmissionPayload) => {
      return await createSubmissionMutationFn(hackathonId, payload);
    },
    onSuccess: () => {
      toast.success("Project submitted successfully!");
      form.reset();
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Something went wrong while submitting your project.";
      toast.error(message);
    },
  });

  const form = useForm({
    defaultValues: createSubmissionDefaultValues,

    validators: {
      onSubmit: ({ value }) => validateSubmission(value),
    },

    onSubmit: async ({ value }) => {
      const normalizedValues: ICreateSubmissionPayload = {
        ...value,
        title: value.title.trim(),
        shortSummary: value.shortSummary.trim(),
        description: value.description.trim(),
        techStack: value.techStack.map((item) => item.trim()).filter(Boolean),
        repositoryUrl: value.repositoryUrl?.trim() || "",
        demoUrl: value.demoUrl?.trim() || "",
        videoUrl: value.videoUrl?.trim() || "",
        thumbnailUrl: value.thumbnailUrl?.trim() || "",
      };

      try {
        await mutateAsync(normalizedValues);
      } catch {
        // handled in onError
      }
    },
  });

  return (
    <div className="rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.72),rgba(2,6,23,0.8))] p-5 backdrop-blur-xl md:p-6">
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <form.Field name="title">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Project Title <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your project title"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              {field.state.meta.isTouched &&
                typeof field.state.meta.errors?.[0] === "string" && (
                  <p className="mt-2 text-xs text-rose-400">
                    {field.state.meta.errors[0]}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        <form.Field name="shortSummary">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Short Summary <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Write a concise one-line summary"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              {field.state.meta.isTouched &&
                typeof field.state.meta.errors?.[0] === "string" && (
                  <p className="mt-2 text-xs text-rose-400">
                    {field.state.meta.errors[0]}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        <form.Field name="description">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Project Description <span className="text-rose-400">*</span>
              </label>
              <textarea
                placeholder="Describe your project, core idea, use case, and impact"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className="textarea min-h-[130px] w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              {field.state.meta.isTouched &&
                typeof field.state.meta.errors?.[0] === "string" && (
                  <p className="mt-2 text-xs text-rose-400">
                    {field.state.meta.errors[0]}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        <form.Field name="techStack">
          {(field) => (
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Tech Stack <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                placeholder="Next.js, TypeScript, Prisma, PostgreSQL"
                value={field.state.value.join(", ")}
                onBlur={field.handleBlur}
                onChange={(e) => {
                  // ✅ FIX 3: filter(Boolean) added here too
                  const value = e.target.value
                    .split(",")
                    .map((item) => item.trim())
                    .filter(Boolean);
                  field.handleChange(value);
                }}
                className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
              <p className="mt-2 text-xs text-slate-400">
                Separate each technology with commas.
              </p>
              {field.state.meta.isTouched &&
                typeof field.state.meta.errors?.[0] === "string" && (
                  <p className="mt-2 text-xs text-rose-400">
                    {field.state.meta.errors[0]}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        <div className="grid gap-5 md:grid-cols-2">
          <form.Field name="repositoryUrl">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Repository URL
                </label>
                <input
                  type="text"
                  placeholder="https://github.com/username/project"
                  value={field.state.value ?? ""}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                {field.state.meta.isTouched &&
                  typeof field.state.meta.errors?.[0] === "string" && (
                    <p className="mt-2 text-xs text-rose-400">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
              </div>
            )}
          </form.Field>

          <form.Field name="demoUrl">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Demo URL
                </label>
                <input
                  type="text"
                  placeholder="https://your-demo-site.com"
                  value={field.state.value ?? ""}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                {field.state.meta.isTouched &&
                  typeof field.state.meta.errors?.[0] === "string" && (
                    <p className="mt-2 text-xs text-rose-400">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
              </div>
            )}
          </form.Field>

          <form.Field name="videoUrl">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Video URL
                </label>
                <input
                  type="text"
                  placeholder="https://youtube.com/..."
                  value={field.state.value ?? ""}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                {field.state.meta.isTouched &&
                  typeof field.state.meta.errors?.[0] === "string" && (
                    <p className="mt-2 text-xs text-rose-400">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
              </div>
            )}
          </form.Field>

          <form.Field name="thumbnailUrl">
            {(field) => (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Thumbnail URL
                </label>
                <input
                  type="text"
                  placeholder="https://your-image.com/thumbnail.png"
                  value={field.state.value ?? ""}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="input h-12 w-full rounded-2xl border border-white/10 bg-slate-950/60 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
                />
                {field.state.meta.isTouched &&
                  typeof field.state.meta.errors?.[0] === "string" && (
                    <p className="mt-2 text-xs text-rose-400">
                      {field.state.meta.errors[0]}
                    </p>
                  )}
              </div>
            )}
          </form.Field>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-white/10 pt-5">
          <button
            type="button"
            onClick={() => form.reset()}
            className="btn h-12 rounded-2xl border border-white/10 bg-white/5 px-5 text-slate-200 shadow-none hover:border-white/20 hover:bg-white/10"
          >
            Cancel
          </button>

          <form.Subscribe
            selector={(state) => ({ isSubmitting: state.isSubmitting })}
          >
            {({ isSubmitting }) => (
              <button
                type="submit"
                disabled={isSubmitting || isPending}
                className="btn h-12 rounded-2xl border-0 bg-[linear-gradient(135deg,#22d3ee,#3b82f6)] px-5 font-semibold text-slate-950 shadow-[0_10px_30px_rgba(34,211,238,0.25)] hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Send className="size-4" />
                {isPending || isSubmitting ? "Submitting..." : "Submit Project"}
              </button>
            )}
          </form.Subscribe>
        </div>
      </form>
    </div>
  );
};
