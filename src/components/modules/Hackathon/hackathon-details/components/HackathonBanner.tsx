import Image from "next/image";
import {
  getDaysLeft,
  normalizeStatus,
  SharedProps,
} from "../HackathonDetailsPage";

const HackathonBanner = ({ hackathon }: SharedProps) => {
  const statusMeta = normalizeStatus(hackathon.status);
  const daysLeftText = getDaysLeft(
    hackathon.submissionDeadline,
    hackathon.daysLeftLabel,
  );

  return (
    <div className="card-theme overflow-hidden rounded-[20px] md:rounded-[28px]">
      {/* Aspect ratio mobile-e ektu boro (16/10) kora hoyeche jate content cramp na hoy */}
      <div className="relative aspect-[16/10] sm:aspect-[16/8.1] w-full overflow-hidden bg-background">
        {hackathon.bannerImageUrl ? (
          <Image
            src={hackathon.bannerImageUrl}
            alt={hackathon.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(86,186,255,0.18),transparent_18%),linear-gradient(180deg,#080c1f_0%,#060918_46%,#081021_100%)] px-6 sm:px-8 text-center">
            <p className="max-w-2xl text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-5xl">
              {hackathon.title}
            </p>
          </div>
        )}

        {/* Gradient overlay optimized for better readability on mobile */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/40 to-transparent" />

        {/* Badges: Top Left */}
        <div className="absolute left-3 top-3 flex flex-wrap items-center gap-1.5 md:left-6 md:top-6">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold ${statusMeta.className}`}
          >
            {statusMeta.label}
          </span>
          {hackathon.isFeatured && (
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-primary">
              Featured
            </span>
          )}
          {hackathon.isPremiumOnly && (
            <span className="inline-flex items-center rounded-full border border-hero-tertiary/20 bg-hero-tertiary/10 px-2.5 py-0.5 text-[10px] sm:text-xs font-semibold text-hero-tertiary">
              Premium
            </span>
          )}
        </div>

        {/* Bottom Content Area */}
        <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            {/* Organizer Info */}
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
              <div className="relative h-10 w-10 sm:h-12 sm:w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black/55 shadow-xl">
                {hackathon.logoUrl ? (
                  <Image
                    src={hackathon.logoUrl}
                    alt={hackathon.organizerName || "Organizer"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-xs sm:text-sm font-bold text-white">
                    {(hackathon.organizerName?.charAt(0) || "H").toUpperCase()}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-[10px] sm:text-sm text-white/80 font-medium">
                  Organized by
                </p>
                <p className="truncate text-sm sm:text-base font-bold text-white leading-tight">
                  {hackathon.organizerName || "Prime Organizer"}
                </p>
              </div>
            </div>

            {/* Days Left Label: Mobile-e width full thakbe na, fit-content hobe */}
            <div className="inline-flex w-fit items-center rounded-full border border-primary/18 bg-background/80 px-3 py-1.5 text-[11px] sm:text-sm font-semibold text-primary backdrop-blur-md shadow-lg">
              {daysLeftText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonBanner;
