import { ShieldCheck } from "lucide-react";
import { AUTH_BG_IMAGE } from "./auth.data";

export function AuthHero() {
  return (
    <div className="relative hidden overflow-hidden lg:flex">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${AUTH_BG_IMAGE}')`,
        }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.72)_0%,rgba(2,6,23,0.60)_42%,rgba(2,6,23,0.82)_78%,rgba(2,6,23,0.96)_100%)]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(59,130,246,0.18),transparent_30%),radial-gradient(circle_at_62%_18%,rgba(139,92,246,0.16),transparent_28%),radial-gradient(circle_at_30%_78%,rgba(6,182,212,0.12),transparent_24%)]" />

      <div className="relative z-10 flex w-full items-center px-10 py-14 xl:px-14">
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            Secure access for organizers, participants, and admins
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.03em] xl:text-6xl">
            <span className="bg-gradient-to-r from-white via-blue-100 to-violet-200 bg-clip-text text-transparent">
              Build, launch, and manage
            </span>{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              next-generation hackathons
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-[17px] leading-8 text-slate-300">
            PrimeHacks brings organizers, participants, and communities into one
            modern workspace to manage events, submit projects, and deliver a
            more polished hackathon experience.
          </p>
        </div>
      </div>
    </div>
  );
}
