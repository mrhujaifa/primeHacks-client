"use client";

import { AuthRoot } from ".";
import { AuthShell } from "./layouts/AuthShell";

import React from "react";

const LoginForm = () => {
  return (
    <AuthShell>
      <AuthRoot mode="login" />
    </AuthShell>
  );
};

export default LoginForm;
