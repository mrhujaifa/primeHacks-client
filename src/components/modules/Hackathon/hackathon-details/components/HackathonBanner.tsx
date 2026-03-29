import Image from "next/image";
import { normalizeStatus, SharedProps } from "../HackathonDetailsPage";

const HackathonBanner = ({ hackathon }: SharedProps) => {
  const statusMeta = normalizeStatus(hackathon.status);

  return (
    <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] shadow-[0_20px_60px_rgba(2,6,23,0.34)] backdrop-blur-xl">
      <div className="relative aspect-[16/8.1] w-full overflow-hidden bg-slate-950">
        {hackathon.bannerImageUrl ? (
          <Image
            src={hackathon.bannerImageUrl}
            alt={hackathon.title}
            fill
            className="object-cover"
            priority
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(249,115,22,0.18),transparent_18%),linear-gradient(180deg,#071521_0%,#06111a_46%,#081a25_100%)] px-8 text-center">
            <p className="max-w-2xl text-3xl font-bold tracking-tight text-white md:text-5xl">
              {hackathon.title}
            </p>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/85 via-[#020617]/20 to-transparent" />

        <div className="absolute left-4 top-4 flex flex-wrap items-center gap-2 md:left-6 md:top-6">
          <span
            className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusMeta.className}`}
          >
            {statusMeta.label}
          </span>
          {hackathon.isFeatured && (
            <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              Featured
            </span>
          )}
          {hackathon.isPremiumOnly && (
            <span className="inline-flex items-center rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-xs font-semibold text-orange-300">
              Premium
            </span>
          )}
        </div>

        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="flex min-w-0 items-center gap-3">
              <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/10 bg-black/60">
                {hackathon.logoUrl ? (
                  <Image
                    src={hackathon.logoUrl}
                    alt={hackathon.organizerName || "Organizer"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                    {(hackathon.organizerName?.charAt(0) || "H").toUpperCase()}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="text-sm text-slate-300">Organized by</p>
                <p className="truncate text-base font-semibold text-white">
                  {hackathon.organizerName || "Prime Organizer"}
                </p>
              </div>
            </div>
            <div className="inline-flex w-fit items-center rounded-full border border-white/10 bg-black/45 px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md">
              {/* {daysLeftText} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonBanner;
