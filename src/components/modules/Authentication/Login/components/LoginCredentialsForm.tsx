"use client";

import { loginAction } from "@/app/(commonLayout)/(Auth-Routes)/login/_action";
import { ILoginPayload } from "@/Zod/auth.validation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const inputClassName = "input-theme h-13 pl-11 pr-4";

export default function LoginCredentialsForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: ILoginPayload) => {
      return await loginAction(payload);
    },
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    onSubmit: async ({ value }) => {
      try {
        const result = (await mutateAsync({
          email: value.email,
          password: value.password,
        })) as any;

        if (!result?.success) {
          toast.error(result?.message || "Login failed");
          return;
        }

        toast.success(result?.message || "Login successful");
      } catch (error: any) {
        toast.error(error?.message || "Something went wrong");
      }
    },
  });

  return (
    <form
      className="space-y-4 "
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field
        name="email"
        validators={{
          onSubmit: ({ value }) => {
            if (!value) return "Email is required";
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
              return "Enter a valid email";
            }
            return undefined;
          },
        }}
      >
        {(field) => (
          <div>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Email address
            </label>

            <div className="group relative">
              <Mail className="field-icon pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />

              <input
                id={field.name}
                name={field.name}
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={inputClassName}
              />
            </div>

            {field.state.meta.errors.length > 0 && (
              <p className="mt-2 text-xs text-red-400">
                {String(field.state.meta.errors[0])}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field
        name="password"
        validators={{
          onSubmit: ({ value }) => {
            if (!value) return "Password is required";
            if (value.length < 6)
              return "Password must be at least 6 characters";
            return undefined;
          },
        }}
      >
        {(field) => (
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor={field.name}
                className="block text-sm font-medium text-foreground"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-xs font-medium text-primary transition hover:text-foreground"
              >
                Forgot password?
              </Link>
            </div>

            <div className="group relative">
              <LockKeyhole className="field-icon pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />

              <input
                id={field.name}
                name={field.name}
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                placeholder="Enter your password"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={`${inputClassName} pr-12`}
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-muted transition hover:bg-accent/70 hover:text-foreground"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {field.state.meta.errors.length > 0 && (
              <p className="mt-2 text-xs text-red-400">
                {String(field.state.meta.errors[0])}
              </p>
            )}
          </div>
        )}
      </form.Field>

      <form.Field name="rememberMe">
        {(field) => (
          <div className="flex items-center justify-between gap-3 pt-1">
            <label className="inline-flex cursor-pointer items-center gap-3 text-sm text-muted">
              <span className="relative flex h-5 w-5 items-center justify-center">
                <input
                  type="checkbox"
                  className="peer sr-only"
                  checked={field.state.value}
                  onChange={(e) => field.handleChange(e.target.checked)}
                />
                <span className="h-5 w-5 rounded-md border border-border/70 bg-card/70 transition peer-checked:border-primary/60 peer-checked:bg-primary/20" />
                <svg
                  className="pointer-events-none absolute h-3 w-3 scale-0 text-primary transition peer-checked:scale-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              Remember me
            </label>

            <p className="text-xs text-muted">Protected session</p>
          </div>
        )}
      </form.Field>

      <button
        type="submit"
        disabled={isPending}
        className="btn-theme h-13 w-full rounded-2xl px-4 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Signing in..." : "Sign in"}
        {!isPending && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
