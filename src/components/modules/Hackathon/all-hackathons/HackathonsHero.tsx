import Image from "next/image";
import { ArrowRight, BookOpen, PlusCircle } from "lucide-react";
import Link from "next/link";

type HackathonsHeroProps = {
  featuredBanners?: {
    id: string;
    image: string;
    title?: string;
  }[];
};

export default function HackathonsHero({
  featuredBanners = [],
}: HackathonsHeroProps) {
  const activeBanner = featuredBanners[0];

  return (
    <section className="mt-20 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="relative z-10 w-full max-w-3xl flex-1">
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl xl:text-5xl">
          The Ultimate Hub for{" "}
          <span className="bg-[linear-gradient(135deg,#67e8f9,#22d3ee,#a855f7)] bg-clip-text text-transparent">
            Hackathons
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
          Learn, build, and compete in premium hackathons. Join ongoing events
          or launch your own with a modern organizer experience.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href={""}>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-xl bg-[linear-gradient(135deg,#f97316,#fb923c)] px-5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(249,115,22,0.24)] transition hover:-translate-y-0.5"
            >
              <PlusCircle className="h-4 w-4" />
              Create a Hackathon
            </button>
          </Link>
          <button
            type="button"
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/12 bg-white/5 px-5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-200"
          >
            <BookOpen className="h-4 w-4" />
            View Guide
          </button>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-slate-400">
          Any community can create and run hackathons on Prime Hackathons.
        </p>
      </div>

      <div className="relative w-full max-w-[370px] shrink-0 mx-auto lg:mx-0 lg:ml-auto">
        <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_right,rgba(103,232,249,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_26%)] blur-2xl" />

        <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-slate-950/60 p-3 backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[18px] border border-white/10 bg-slate-900">
            {activeBanner ? (
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={activeBanner.image}
                  alt={activeBanner.title || "Featured hackathon"}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_18%),linear-gradient(180deg,#071521_0%,#06111a_46%,#081a25_100%)]" />
            )}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full ${
                  dot === 1 ? "bg-orange-400" : "bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
