export type AuthMode = "login" | "signup";

export type AuthField = {
  id: string;
  label: string;
  type?: "text" | "email" | "password";
  placeholder: string;
  autoComplete?: string;
  icon: "mail" | "lock" | "text";
  rightLink?: {
    href: string;
    label: string;
  };
  showPasswordToggle?: boolean;
};
