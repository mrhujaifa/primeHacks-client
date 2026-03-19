"use client";

import { ReactNode } from "react";
import { AuthHero } from "../components/AuthHero";

export function AuthShell({ children }: { children: ReactNode }) {
  return (
    <section className="min-h-screen overflow-hidden bg-[#030712] text-white">
      <div className="grid min-h-screen lg:grid-cols-[1.08fr_0.92fr]">
        <AuthHero />
        {children}
      </div>
    </section>
  );
}
