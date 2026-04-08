import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  CircleDollarSign,
  Disc3,
  Globe,
  MapPin,
  MessageSquare,
  Tag,
  Trophy,
} from "lucide-react";
import {
  formatDisplayDate,
  getDaysLeft,
  SharedProps,
} from "../HackathonDetailsPage";
import { ProjectSubmissionModal } from "../../submission-hackathon/ProjectSubmissionModal";
import HackathonTag from "../../all-hackathons/HackathonTag";

const HackathonSidebar = ({
  hackathon,
  hackathonId,
}: SharedProps & { hackathonId: string }) => {
  const prizeText = hackathon.prizePoolText || hackathon.prizePool || "TBA";
  const prizeCurrency = hackathon.currency || "USD";
  const tagList = hackathon.categories || [];
  const daysLeftText = getDaysLeft(
    hackathon.submissionDeadline,
    hackathon.daysLeftLabel,
  );

  return (
    <aside className="xl:sticky xl:top-24 xl:self-start">
      <div className="card-theme overflow-hidden rounded-[24px]">
        <div className="space-y-5 p-5">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <Trophy className="h-4 w-4 text-primary" />
              Prize Pool
            </p>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none text-primary">
                {prizeText}
              </span>
              <span className="pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-muted">
                {prizeCurrency}
              </span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />

          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              <CalendarDays className="h-4 w-4 text-primary" />
              Event Timeline
            </p>
            <div className="inline-flex rounded-full border border-success/15 bg-success/10 px-3 py-1 text-sm font-medium text-success">
              {daysLeftText}
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-background/35 p-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Submission
                  </p>
                  <p className="mt-1 text-xs text-muted">Deadline</p>
                </div>
                <p className="text-right text-sm font-medium text-primary">
                  {formatDisplayDate(hackathon.submissionDeadline)}
                </p>
              </div>
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-border/60 bg-background/35 p-3">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Event Start
                  </p>
                  <p className="mt-1 text-xs text-muted">Kickoff</p>
                </div>
                <p className="text-right text-sm font-medium text-foreground">
                  {formatDisplayDate(hackathon.startDate)}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{hackathon.location || "Virtual"}</span>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Tag className="h-4 w-4 text-primary" />
                Hackathon Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tagList.length > 0 ? (
                  tagList.map((tag, index) => (
                    <HackathonTag key={`${tag}-${index}`} label={tag} />
                  ))
                ) : (
                  <span className="text-sm text-muted">No tags added</span>
                )}
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                <Disc3 className="h-4 w-4 text-primary" />
                Web3 Ecosystem
              </p>
              <p className="text-sm font-medium text-foreground">
                {hackathon.platform || "Not specified"}
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-border/70 to-transparent" />

          <div className="rounded-2xl border border-border/60 bg-background/35 p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border/70 bg-background/60">
                {hackathon.logoUrl ? (
                  <Image
                    src={hackathon.logoUrl}
                    alt={hackathon.organizerName || "Organizer"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-bold text-foreground">
                    {(hackathon.organizerName?.charAt(0) || "O").toUpperCase()}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-foreground">
                  {hackathon.organizerName || "Organizer"}
                </p>
                <p className="text-xs text-muted">Official organizer profile</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              onClick={() =>
                (
                  document.getElementById(
                    "project_submission_modal",
                  ) as HTMLDialogElement | null
                )?.showModal()
              }
              className="btn-theme h-12 rounded-2xl px-5"
            >
              Submit Build
            </button>
            <button
              type="button"
              className="btn-theme-outline h-12 rounded-2xl px-5"
            >
              Register as Hacker
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="btn-theme-outline h-11 rounded-2xl px-4 text-sm"
            >
              <MessageSquare className="h-4 w-4" /> Message
            </button>
            <button
              type="button"
              className="btn-theme-outline h-11 rounded-2xl px-4 text-sm"
            >
              <ArrowUpRight className="h-4 w-4" /> Share
            </button>
          </div>

          {(hackathon.websiteUrl ||
            hackathon.discordUrl ||
            hackathon.contactEmail) && (
            <div className="space-y-2 pt-1">
              {hackathon.websiteUrl && (
                <Link
                  href={hackathon.websiteUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-primary transition hover:text-foreground"
                >
                  <Globe className="h-4 w-4" /> Visit website
                </Link>
              )}
              {hackathon.discordUrl && (
                <Link
                  href={hackathon.discordUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-primary transition hover:text-foreground"
                >
                  <MessageSquare className="h-4 w-4" /> Join community
                </Link>
              )}
              {hackathon.contactEmail && (
                <a
                  href={`mailto:${hackathon.contactEmail}`}
                  className="flex items-center gap-2 text-sm text-primary transition hover:text-foreground"
                >
                  <CircleDollarSign className="h-4 w-4" /> Contact organizer
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      <ProjectSubmissionModal hackathonId={hackathonId} />
    </aside>
  );
};

export default HackathonSidebar;
