import { z } from "zod";

export function createFormValidator<T extends Record<string, unknown>>(
  schema: z.ZodSchema<T>,
  normalize: (value: T) => T,
) {
  return function (value: T) {
    const result = schema.safeParse(normalize(value));
    if (result.success) return undefined;

    const fieldErrors: Record<string, string> = {};
    for (const issue of result.error.issues) {
      const path = issue.path[0];
      if (typeof path === "string" && !fieldErrors[path]) {
        fieldErrors[path] = issue.message;
      }
    }

    return { fields: fieldErrors };
  };
}
