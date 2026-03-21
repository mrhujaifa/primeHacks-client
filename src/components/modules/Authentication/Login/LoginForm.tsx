import Link from "next/link";
import SocialLogins from "../components/SocialLogins";
import LeftPanel from "../components/LeftPanel";
import LoginCredentialsForm from "./components/LoginCredentialsForm";

export default function LoginForm() {
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <LeftPanel />

        <div className="relative flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(245,158,11,0.12),transparent_24%),linear-gradient(180deg,rgba(4,13,21,0.94)_0%,rgba(5,15,24,0.98)_100%)]" />
          <div className="ph-grid absolute inset-0 opacity-30" />

          <div className="relative z-10 w-full max-w-md">
            <div className="ph-panel rounded-[30px] p-5 sm:p-7">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-200">
                  Welcome Back
                </p>
                <h2 className="mt-3 font-[family:var(--font-space-grotesk)] text-3xl font-semibold tracking-[-0.04em] text-white">
                  Sign in to your control workspace
                </h2>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Access your PrimeHacks dashboard and continue managing the
                  event experience from one secure system.
                </p>
              </div>

              <SocialLogins />

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  or
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <LoginCredentialsForm />

              <p className="mt-6 text-center text-sm text-slate-400">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  className="font-medium text-cyan-200 transition hover:text-white"
                >
                  Create account
                </Link>
              </p>
            </div>

            <p className="mt-6 text-center text-xs leading-6 text-slate-500">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-slate-300 hover:text-white">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-slate-300 hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
