import { ArrowRight } from "lucide-react";
import { AUTH_BG_IMAGE, authContent } from "./components/auth.data";
import { AuthMode } from "./components/auth.types";
import { SocialAuthButtons } from "./components/SocialAuthButtons";
import { AuthInput } from "./components/AuthInput";
import { RememberSessionRow } from "./components/RememberSessionRow";
import { AccountSwitchPrompt } from "./components/AccountSwitchPrompt";
import { AuthLegalNotice } from "./components/AuthLegalNotice";

type AuthCardProps = {
  mode: AuthMode;
};

export function AuthRoot({ mode }: AuthCardProps) {
  const content = authContent[mode];

  return (
    <div className="relative flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={
          {
            // backgroundImage: `url('${AUTH_BG_IMAGE}')`,
          }
        }
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94)_0%,rgba(2,6,23,0.92)_30%,rgba(3,7,18,0.94)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.10),transparent_20%)]" />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-[28px] border border-white/10 bg-[rgba(10,15,28,0.72)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-7">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {content.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              {content.subtitle}
            </p>
          </div>

          <SocialAuthButtons />

          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
              or
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <form className="space-y-4">
            {content.fields.map((field) => (
              <AuthInput
                key={field.id}
                id={field.id}
                label={field.label}
                type={field.type}
                placeholder={field.placeholder}
                autoComplete={field.autoComplete}
                icon={field.icon}
                rightLink={field.rightLink}
                showPasswordToggle={field.showPasswordToggle}
              />
            ))}

            {content.showRemember ? <RememberSessionRow /> : null}

            <button
              type="submit"
              className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-500 to-violet-500 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:scale-[1.01] hover:brightness-110"
            >
              {content.submitText}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          <AccountSwitchPrompt
            text={content.switchText}
            linkText={content.switchLinkText}
            href={content.switchHref}
          />
        </div>

        <AuthLegalNotice />
      </div>
    </div>
  );
}
