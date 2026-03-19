import { Github } from "lucide-react";

export function SocialAuthButtons() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      <button
        type="button"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07]"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M21.805 10.023h-9.56v3.955h5.48c-.236 1.272-.944 2.35-2.007 3.073v2.55h3.24c1.896-1.746 2.987-4.32 2.987-7.351c0-.741-.067-1.454-.14-2.227Z"
          />
          <path
            fill="currentColor"
            d="M12.245 22c2.7 0 4.962-.894 6.616-2.422l-3.24-2.55c-.894.6-2.038.967-3.376.967c-2.596 0-4.798-1.752-5.585-4.108H3.31v2.63A9.994 9.994 0 0 0 12.245 22Z"
          />
          <path
            fill="currentColor"
            d="M6.66 13.887A5.997 5.997 0 0 1 6.35 12c0-.655.112-1.292.31-1.887v-2.63H3.31A9.995 9.995 0 0 0 2.245 12c0 1.61.387 3.134 1.065 4.517l3.35-2.63Z"
          />
          <path
            fill="currentColor"
            d="M12.245 6.005c1.467 0 2.78.505 3.814 1.493l2.86-2.86C17.203 3.045 14.94 2 12.245 2A9.994 9.994 0 0 0 3.31 7.483l3.35 2.63c.787-2.356 2.989-4.108 5.585-4.108Z"
          />
        </svg>
        Continue with Google
      </button>

      <button
        type="button"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/[0.07]"
      >
        <Github className="h-4 w-4" />
        Continue with GitHub
      </button>
    </div>
  );
}
