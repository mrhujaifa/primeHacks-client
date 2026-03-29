import { createFormValidator } from "@/lib/form-validator.ts/form.validation";
import { ICreateSubmissionPayload } from "@/types/submission.type";
import { createSubmissionSchema } from "@/Zod/submission.schema";

export const validateSubmission = createFormValidator(
  createSubmissionSchema,
  (value) => ({
    ...value,
    title: value.title?.trim() ?? "",
    shortSummary: value.shortSummary?.trim() ?? "",
    description: value.description?.trim() ?? "",
    techStack: Array.isArray(value.techStack)
      ? value.techStack.map((item) => item.trim()).filter(Boolean)
      : [],
    repositoryUrl: value.repositoryUrl?.trim() || "",
    demoUrl: value.demoUrl?.trim() || "",
    videoUrl: value.videoUrl?.trim() || "",
    thumbnailUrl: value.thumbnailUrl?.trim() || "",
  }),
);
