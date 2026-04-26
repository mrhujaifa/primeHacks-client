"use client";

import { useState } from "react";
import { getAuthClient } from "@/lib/auth-client";
import { Github, Google } from "@thesvg/react";
import toast from "react-hot-toast";

export default function SocialLogins() {
  const [loadingProvider, setLoadingProvider] = useState<
    "google" | "github" | null
  >(null);

  const handleGoogleLogin = async () => {
    try {
      setLoadingProvider("google");

      await getAuthClient().signIn.social({
        provider: "google",
        callbackURL: "/",
        errorCallbackURL: "/login",
      });
    } catch {
      toast.error("Google login failed. Please try again.");
      setLoadingProvider(null);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
      <button
        onClick={handleGoogleLogin}
        type="button"
        disabled={loadingProvider === "google"}
        className="btn-theme-outline h-12 rounded-2xl px-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Google className="h-5 w-5" />
        {loadingProvider === "google"
          ? "Connecting..."
          : "Continue with Google"}
      </button>

      <button
        type="button"
        disabled
        className="btn-theme-outline h-12 rounded-2xl px-3 text-sm disabled:cursor-not-allowed disabled:opacity-60"
      >
        <Github className="h-5 w-5" />
        Continue with GitHub
      </button>
    </div>
  );
}
