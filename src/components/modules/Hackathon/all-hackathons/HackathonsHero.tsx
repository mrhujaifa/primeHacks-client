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
    <section className="mt-14 flex flex-col gap-8 sm:mt-16 sm:gap-10 lg:mt-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12 xl:gap-16">
      {/* Left Content */}
      <div className="relative z-10 w-full max-w-3xl flex-1 text-center lg:text-left">
        <h1 className="mx-auto max-w-[15ch] text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:max-w-[18ch] sm:text-4xl lg:mx-0 lg:max-w-3xl lg:text-5xl xl:text-6xl">
          The Ultimate Hub for{" "}
          <span className="ph-violet-gradient">Hackathons</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7 lg:mx-0 lg:max-w-2xl">
          Learn, build, and compete in premium hackathons. Join ongoing events
          or launch your own with a modern organizer experience.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
          <Link href="" className="w-full sm:w-auto">
            <button
              type="button"
              className="btn-theme flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm sm:h-12 sm:w-auto sm:px-6"
            >
              <PlusCircle className="h-4 w-4" />
              Create a Hackathon
            </button>
          </Link>

          <button
            type="button"
            className="btn-theme-outline flex h-11 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm sm:h-12 sm:w-auto sm:px-6"
          >
            <BookOpen className="h-4 w-4" />
            View Guide
          </button>
        </div>

        <p className="mx-auto mt-5 max-w-md text-sm leading-6 text-muted sm:mt-6 lg:mx-0 lg:max-w-2xl">
          Any community can create and run hackathons on Prime Hackathons.
        </p>
      </div>
    </section>
  );
}
