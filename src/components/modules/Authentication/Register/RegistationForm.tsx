import Link from "next/link";
import SocialLogins from "../components/SocialLogins";
import LeftPanel from "../components/LeftPanel";
import RegisterCredentialsForm from "./components/RegisterCredentialsForm";

const RegisterForm = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <LeftPanel />

        <div className="relative flex items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(124,92,255,0.14),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(86,186,255,0.12),transparent_24%),linear-gradient(180deg,rgba(4,8,20,0.94)_0%,rgba(6,9,24,0.98)_100%)]" />
          <div className="ph-grid absolute inset-0 opacity-30" />

          <div className="relative z-10 w-full max-w-md lg:mt-30 mt-25">
            <div className="ph-panel rounded-[30px] p-5 sm:p-7">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.28em] text-primary">
                  Create Workspace
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-foreground">
                  Set up your PrimeHacks account
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted">
                  Join the platform and start building a cleaner, stronger
                  hackathon experience from one modern workspace.
                </p>
              </div>

              <SocialLogins />

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-border/70" />
                <span className="text-xs uppercase tracking-[0.25em] text-muted">
                  or
                </span>
                <div className="h-px flex-1 bg-border/70" />
              </div>

              <RegisterCredentialsForm />

              <p className="mt-6 text-center text-sm text-muted">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-medium text-primary transition hover:text-foreground"
                >
                  Sign in
                </Link>
              </p>
            </div>

            <p className="mt-6 text-center text-xs leading-6 text-muted-foreground">
              By continuing, you agree to our{" "}
              <Link href="/terms" className="text-muted hover:text-foreground">
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="text-muted transition hover:text-foreground"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
