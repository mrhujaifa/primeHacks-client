"use client";

import Link from "next/link";
import { Eye, LockKeyhole, Mail, Type } from "lucide-react";

type AuthInputProps = {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  autoComplete?: string;
  icon: "mail" | "lock" | "text";
  rightLink?: {
    href: string;
    label: string;
  };
  showPasswordToggle?: boolean;
};

export function AuthInput({
  id,
  label,
  type = "text",
  placeholder,
  autoComplete,
  icon,
  rightLink,
  showPasswordToggle = false,
}: AuthInputProps) {
  const Icon = icon === "mail" ? Mail : icon === "lock" ? LockKeyhole : Type;

  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <label
          htmlFor={id}
          className="block text-sm font-medium text-slate-200"
        >
          {label}
        </label>

        {rightLink ? (
          <Link
            href={rightLink.href}
            className="text-xs font-medium text-blue-300 transition hover:text-blue-200"
          >
            {rightLink.label}
          </Link>
        ) : null}
      </div>

      <div className="group relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400 transition group-focus-within:text-blue-400" />

        <input
          id={id}
          name={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="h-13 w-full rounded-2xl border border-white/10 bg-white/[0.08] pl-11 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/10"
        />

        {showPasswordToggle ? (
          <button
            type="button"
            className="absolute right-3 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <Eye className="h-4 w-4" />
          </button>
        ) : null}
      </div>
    </div>
  );
}
