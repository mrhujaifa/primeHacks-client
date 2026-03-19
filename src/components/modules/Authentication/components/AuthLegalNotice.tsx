import Link from "next/link";

export function AuthLegalNotice() {
  return (
    <p className="mt-6 text-center text-xs leading-6 text-slate-500">
      By continuing, you agree to our{" "}
      <Link href="/terms" className="text-slate-400 hover:text-white">
        Terms
      </Link>{" "}
      and{" "}
      <Link href="/privacy" className="text-slate-400 hover:text-white">
        Privacy Policy
      </Link>
      .
    </p>
  );
}
