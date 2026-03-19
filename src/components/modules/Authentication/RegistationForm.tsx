"use client";

import { AuthRoot } from ".";
import { AuthShell } from "./layouts/AuthShell";

export default function SignupForm() {
  return (
    <AuthShell>
      <AuthRoot mode="signup" />
    </AuthShell>
  );
}
