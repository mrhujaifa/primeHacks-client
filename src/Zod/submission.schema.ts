import z from "zod";

export const createSubmissionSchema = z.object({
  title: z.string().trim().min(1, "Title is required"),

  shortSummary: z
    .string()
    .trim()
    .min(1, "Short summary is required")
    .max(200, "Short summary must be under 200 characters"),

  description: z.string().trim().min(1, "Description is required"),

  techStack: z
    .array(z.string().trim().min(1))
    .min(1, "At least one tech required"),

  repositoryUrl: z
    .string()
    .trim()
    .min(1, "Repository URL is required")
    .url("Please enter a valid URL"),

  demoUrl: z
    .string()
    .trim()
    .min(1, "Demo URL is required")
    .url("Please enter a valid URL"),

  videoUrl: z
    .string()
    .trim()
    .min(1, "Video URL is required")
    .url("Please enter a valid URL"),

  thumbnailUrl: z
    .string()
    .trim()
    .min(1, "Thumbnail URL is required")
    .url("Please enter a valid URL"),
});
