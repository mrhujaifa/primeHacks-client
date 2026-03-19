import { AuthField, AuthMode } from "./auth.types";

export const AUTH_BG_IMAGE =
  "https://i.postimg.cc/MHdd0BHp/16268115-rm373batch2-07.jpg";

export const authContent: Record<
  AuthMode,
  {
    title: string;
    subtitle: string;
    submitText: string;
    switchText: string;
    switchLinkText: string;
    switchHref: string;
    showRemember: boolean;
    fields: AuthField[];
  }
> = {
  login: {
    title: "Welcome back",
    subtitle:
      "Sign in to continue your PrimeHacks journey and manage your hackathon experience from one secure workspace.",
    submitText: "Sign in",
    switchText: "Don’t have an account?",
    switchLinkText: "Create account",
    switchHref: "/register",
    showRemember: true,
    fields: [
      {
        id: "email",
        label: "Email address",
        type: "email",
        placeholder: "name@company.com",
        autoComplete: "email",
        icon: "mail",
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Enter your password",
        autoComplete: "current-password",
        icon: "lock",
        rightLink: {
          href: "/forgot-password",
          label: "Forgot password?",
        },
        showPasswordToggle: true,
      },
    ],
  },

  signup: {
    title: "Create your account",
    subtitle:
      "Join PrimeHacks to explore hackathons, build with teams, submit projects, and grow with a modern innovation community.",
    submitText: "Create account",
    switchText: "Already have an account?",
    switchLinkText: "Sign in",
    switchHref: "/login",
    showRemember: false,
    fields: [
      {
        id: "name",
        label: "Full name",
        type: "text",
        placeholder: "Enter your full name",
        autoComplete: "name",
        icon: "text",
      },
      {
        id: "email",
        label: "Email address",
        type: "email",
        placeholder: "name@company.com",
        autoComplete: "email",
        icon: "mail",
      },
      {
        id: "password",
        label: "Password",
        type: "password",
        placeholder: "Create a strong password",
        autoComplete: "new-password",
        icon: "lock",
        showPasswordToggle: true,
      },
    ],
  },
};
