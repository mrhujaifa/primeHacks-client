/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { registerAction } from "@/app/(commonLayout)/(Auth-Routes)/register/_action";
import { IRegisterPayload } from "@/Zod/auth.validation";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "@tanstack/react-form";
import { ArrowRight, Eye, EyeOff, LockKeyhole, Mail, User } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const inputClassName = "input-theme h-13 pl-11 pr-4";

export default function RegisterCredentialsForm() {
  const [showPassword, setShowPassword] = useState(false);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: IRegisterPayload) => {
      return await registerAction(payload);
    },
  });

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rememberMe: false,
    },

    onSubmit: async ({ value }) => {
      try {
        const result = (await mutateAsync({
          name: value.name,
          email: value.email,
          password: value.password,
        })) as any;

        if (!result?.success) {
          toast.error(result?.message || "Registration failed");
          return;
        }

        toast.success(result?.message || "Account created successfully");
      } catch (error: any) {
        toast.error(error?.message || "Something went wrong");
      }
    },
  });

  return (
    <form
      className="space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <form.Field name="name">
        {(field) => (
          <div>
            <label
              htmlFor={field.name}
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Name
            </label>
            <div className="group relative">
              <User className="field-icon pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />

              <input
                id={field.name}
                name={field.name}
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={(e) => field.handleChange(e.target.value)}
                className={inputClassName}
              />
            </div>
          </div>
        )}
      </form.Field>
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
              Email
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
              <span className="text-xs text-muted">Minimum 6 characters</span>
            </div>

            <div className="group relative">
              <LockKeyhole className="field-icon pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2" />

              <input
                id={field.name}
                name={field.name}
                type={showPassword ? "text" : "password"}
                autoComplete="new-password"
                placeholder="Create a secure password"
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

      <button
        type="submit"
        disabled={isPending}
        className="btn-theme h-13 w-full rounded-2xl px-4 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? "Creating account..." : "Create an account"}
        {!isPending && <ArrowRight className="h-4 w-4" />}
      </button>
    </form>
  );
}
