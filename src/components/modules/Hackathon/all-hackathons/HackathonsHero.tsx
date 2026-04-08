import Image from "next/image";
import { BookOpen, PlusCircle } from "lucide-react";
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
        <h1 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl xl:text-5xl">
          The Ultimate Hub for{" "}
          <span className="ph-violet-gradient">
            Hackathons
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-muted md:text-base">
          Learn, build, and compete in premium hackathons. Join ongoing events
          or launch your own with a modern organizer experience.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href={""}>
            <button type="button" className="btn-theme h-11 rounded-xl px-5">
              <PlusCircle className="h-4 w-4" />
              Create a Hackathon
            </button>
          </Link>
          <button
            type="button"
            className="btn-theme-outline h-11 rounded-xl px-5"
          >
            <BookOpen className="h-4 w-4" />
            View Guide
          </button>
        </div>

        <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">
          Any community can create and run hackathons on Prime Hackathons.
        </p>
      </div>

      <div className="relative w-full max-w-[370px] shrink-0 mx-auto lg:mx-0 lg:ml-auto">
        <div className="absolute inset-0 rounded-[24px] bg-[radial-gradient(circle_at_top_right,rgba(86,186,255,0.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_26%)] blur-2xl" />

        <div className="card-theme relative overflow-hidden rounded-[24px] p-3">
          <div className="relative overflow-hidden rounded-[18px] border border-border/70 bg-background">
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
              <div className="aspect-[16/9] w-full bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.18),transparent_24%),radial-gradient(circle_at_80%_20%,rgba(86,186,255,0.18),transparent_18%),linear-gradient(180deg,#080c1f_0%,#060918_46%,#081021_100%)]" />
            )}
          </div>

          <div className="mt-3 flex items-center justify-center gap-2">
            {[0, 1, 2, 3].map((dot) => (
              <span
                key={dot}
                className={`h-2 w-2 rounded-full ${
                  dot === 1 ? "bg-primary" : "bg-border/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
