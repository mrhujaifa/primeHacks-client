import Image from "next/image";
import { Building2, MapPin, Trophy } from "lucide-react";
import { THackathonCardItem } from "@/services/hackathon.service";
import Link from "next/link";

export default function HackathonCard({
  hackathon,
}: {
  hackathon: THackathonCardItem;
}) {
  const {
    title,
    bannerImageUrl,
    logoUrl,
    organizerName,
    location,
    platform,
    categories,
    prizePool,
    prizePoolText,
    currency,
    status,
    daysLeftLabel,
    buildCountLabel,
    isFeatured,
    isPremiumOnly,
  } = hackathon;

  const normalizedStatus = status?.toLowerCase();

  const statusConfig = (() => {
    if (
      normalizedStatus === "ongoing" ||
      normalizedStatus === "active" ||
      normalizedStatus === "live"
    ) {
      return {
        label: "Ongoing",
        className: "border border-success/30 bg-success/12 text-success",
      };
    }

    if (
      normalizedStatus === "extended" ||
      normalizedStatus === "extended_deadline"
    ) {
      return {
        label: "Extended",
        className:
          "border border-hero-tertiary/30 bg-hero-tertiary/12 text-hero-tertiary",
      };
    }

    if (
      normalizedStatus === "upcoming" ||
      normalizedStatus === "draft" ||
      normalizedStatus === "published"
    ) {
      return {
        label: "Upcoming",
        className: "border border-primary/30 bg-primary/12 text-primary",
      };
    }

    return {
      label: status || "Open",
      className: "border border-border/70 bg-card/70 text-foreground",
    };
  })();

  const prizeText = prizePoolText || prizePool || "TBA";
  const prizeCurrency = currency || "USD";
  const tagList = categories?.slice(0, 5) || [];

  return (
    <Link href={`/hackathons/details/${hackathon.id}`}>
      <div className="card-theme group relative w-full max-w-[380px] rounded-[24px] transition-all duration-300 hover:-translate-y-1 hover:border-primary/20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(86,186,255,0.10),transparent_30%)]" />

        <div className="relative flex items-center justify-between px-4 pt-4 pb-2">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border/70 bg-background/50 ring-1 ring-border/50">
              {logoUrl ? (
                <Image
                  src={logoUrl}
                  alt={organizerName || "Organizer"}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-button-primary text-xs font-semibold text-white">
                  {(organizerName?.charAt(0) || "H").toUpperCase()}
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-foreground">
                {organizerName || "Organizer"}
              </p>

              {(isFeatured || isPremiumOnly) && (
                <div className="mt-1 flex items-center gap-2">
                  {isFeatured && (
                    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-primary">
                      Featured
                    </span>
                  )}
                  {isPremiumOnly && (
                    <span className="inline-flex items-center rounded-full border border-hero-tertiary/20 bg-hero-tertiary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-hero-tertiary">
                      Premium
                    </span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span
              className={`inline-flex h-7 items-center rounded-full px-2.5 text-[12px] font-semibold ${statusConfig.className}`}
            >
              {statusConfig.label}
            </span>

            <span className="text-[12px] font-medium text-muted">
              {daysLeftLabel || "No deadline"}
            </span>
          </div>
        </div>

        <div className="relative px-3">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[18px] border border-border/70 bg-background">
            {bannerImageUrl ? (
              <Image
                src={bannerImageUrl}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,rgba(124,92,255,0.20),transparent_22%),radial-gradient(circle_at_80%_20%,rgba(86,186,255,0.18),transparent_18%),linear-gradient(180deg,#080c1f_0%,#060918_46%,#081021_100%)] px-6 text-center">
                <p className="line-clamp-2 text-lg font-bold tracking-wide text-white">
                  {title}
                </p>
              </div>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-[#020617]/10" />

            <div className="absolute bottom-3 right-3 inline-flex items-center rounded-full border border-border/70 bg-background/75 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur-md">
              {buildCountLabel || "0 BUILDS"}
            </div>
          </div>
        </div>

        <div className="relative px-4 pt-4 pb-4">
          <h3 className="line-clamp-2 min-h-[56px] text-[18px] font-semibold leading-7 text-foreground">
            {title}
          </h3>

          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <MapPin
              className="h-4 w-4 shrink-0 text-muted-foreground"
              strokeWidth={1.9}
            />
            <span className="truncate">{location || "Virtual"}</span>
          </div>

          {tagList.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tagList.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="inline-flex items-center rounded-full border border-primary/15 bg-primary/10 px-2.5 py-1 text-[12px] font-medium text-primary"
                >
                  {tag}
                </span>
              ))}

              {categories && categories.length > 5 && (
                <span className="inline-flex items-center rounded-full border border-border/70 bg-card/70 px-2.5 py-1 text-[12px] font-medium text-muted">
                  ...
                </span>
              )}
            </div>
          )}

          <div className="mt-3 flex items-center gap-2 text-sm text-muted">
            <Building2
              className="h-4 w-4 shrink-0 text-muted-foreground"
              strokeWidth={1.9}
            />
            <span className="truncate">
              {platform || "Platform not specified"}
            </span>
          </div>

          <div className="mt-5 border-t border-border/70 pt-4">
            <div className="flex items-end justify-between gap-3">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Trophy
                  className="h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.9}
                />
                <span>Prize Pool</span>
              </div>

              <div className="flex items-end gap-1.5">
                <span className="text-[20px] font-bold leading-none text-primary">
                  {prizeText}
                </span>
                <span className="pb-[2px] text-[12px] font-semibold uppercase tracking-[0.1em] text-muted">
                  {prizeCurrency}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
