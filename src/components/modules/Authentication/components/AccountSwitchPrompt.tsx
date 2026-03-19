import Link from "next/link";

type AccountSwitchPromptProps = {
  text: string;
  linkText: string;
  href: string;
};

export function AccountSwitchPrompt({
  text,
  linkText,
  href,
}: AccountSwitchPromptProps) {
  return (
    <p className="mt-6 text-center text-sm text-slate-400">
      {text}{" "}
      <Link
        href={href}
        className="font-medium text-blue-300 transition hover:text-blue-200"
      >
        {linkText}
      </Link>
    </p>
  );
}
