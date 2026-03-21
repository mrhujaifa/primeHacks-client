import { Github, Google } from "@thesvg/react";

export default function SocialLogins() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        type="button"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-white transition hover:border-cyan-300/24 hover:bg-white/[0.07]"
      >
        <Google className="h-5 w-5" />
        Continue with Google
      </button>

      <button
        type="button"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-sm font-medium text-white transition hover:border-cyan-300/24 hover:bg-white/[0.07]"
      >
        <Github className="h-5 w-5" />
        Continue with GitHub
      </button>
    </div>
  );
}
