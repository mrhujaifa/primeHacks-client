import { Github, Google } from "@thesvg/react";

export default function SocialLogins() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        type="button"
        className="btn-theme-outline h-12 rounded-2xl px-3 text-sm"
      >
        <Google className="h-5 w-5" />
        Continue with Google
      </button>

      <button
        type="button"
        className="btn-theme-outline h-12 rounded-2xl px-3 text-sm"
      >
        <Github className="h-5 w-5" />
        Continue with GitHub
      </button>
    </div>
  );
}
