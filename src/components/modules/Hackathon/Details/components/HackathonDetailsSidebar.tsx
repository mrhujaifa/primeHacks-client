import Image from "next/image";
import { formatDisplayDate, SharedProps } from "../HackathonDetailsPage";

import Link from "next/link";
import {
  CalendarDays,
  CircleDollarSign,
  Globe,
  MessageSquare,
  Tag,
  Trophy,
  ArrowUpRight,
  MapPin,
  Disc3,
} from "lucide-react";

const HackathonSidebar = ({ hackathon, daysLeftText }: SharedProps) => {
  const prizeText = hackathon.prizePoolText || hackathon.prizePool || "TBA";
  const prizeCurrency = hackathon.currency || "USD";
  const tagList = hackathon.categories || [];

  return (
    <aside className="xl:sticky xl:top-24 xl:self-start">
      <div className="overflow-hidden rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.82),rgba(4,10,20,0.94))] shadow-[0_20px_50px_rgba(2,6,23,0.28)] backdrop-blur-xl">
        <div className="space-y-5 p-5">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <Trophy className="h-4 w-4 text-orange-400" />
              Prize Pool
            </p>
            <div className="mt-2 flex items-end gap-2">
              <span className="text-4xl font-bold leading-none text-orange-400">
                {prizeText}
              </span>
              <span className="pb-1 text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                {prizeCurrency}
              </span>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
              <CalendarDays className="h-4 w-4" />
              Event Timeline
            </p>
            <div className="inline-flex rounded-full border border-emerald-400/15 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-300">
              {daysLeftText}
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/15 p-3">
                <div>
                  <p className="text-sm font-semibold text-white">Submission</p>
                  <p className="mt-1 text-xs text-slate-400">Deadline</p>
                </div>
                <p className="text-right text-sm font-medium text-cyan-300">
                  {formatDisplayDate(hackathon.submissionDeadline)}
                </p>
              </div>
              <div className="flex items-start justify-between gap-4 rounded-2xl border border-white/8 bg-black/15 p-3">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Event Start
                  </p>
                  <p className="mt-1 text-xs text-slate-400">Kickoff</p>
                </div>
                <p className="text-right text-sm font-medium text-slate-200">
                  {formatDisplayDate(hackathon.startDate)}
                </p>
              </div>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4 text-slate-500" />
              <span>{hackathon.location || "Virtual"}</span>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Tag className="h-4 w-4" />
                Hackathon Tags
              </p>
              <div className="flex flex-wrap gap-2">
                {tagList.length > 0 ? (
                  tagList.map((tag, index) => (
                    <span
                      key={`${tag}-${index}`}
                      className="inline-flex items-center rounded-full border border-orange-400/15 bg-orange-400/10 px-2.5 py-1 text-xs font-medium text-orange-300"
                    >
                      {tag}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-slate-400">No tags added</span>
                )}
              </div>
            </div>
            <div>
              <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                <Disc3 className="h-4 w-4" />
                Web3 Ecosystem
              </p>
              <p className="text-sm font-medium text-white">
                {hackathon.platform || "Not specified"}
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="rounded-2xl border border-white/8 bg-black/15 p-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-black/60">
                {hackathon.logoUrl ? (
                  <Image
                    src={hackathon.logoUrl}
                    alt={hackathon.organizerName || "Organizer"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-sm font-bold text-white">
                    {(hackathon.organizerName?.charAt(0) || "O").toUpperCase()}
                  </div>
                )}
              </div>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-white">
                  {hackathon.organizerName || "Organizer"}
                </p>
                <p className="text-xs text-slate-400">
                  Official organizer profile
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#f97316,#fb923c)] px-5 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(249,115,22,0.24)] transition hover:-translate-y-0.5"
            >
              Submit Build
            </button>
            <button
              type="button"
              className="inline-flex h-12 items-center justify-center rounded-2xl border border-white/12 bg-white/5 px-5 text-sm font-semibold text-slate-200 backdrop-blur-sm transition hover:border-cyan-400/25 hover:bg-cyan-400/10 hover:text-cyan-200"
            >
              Register as Hacker
            </button>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
            >
              <MessageSquare className="h-4 w-4" /> Message
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/5"
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
                  className="flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                >
                  <Globe className="h-4 w-4" /> Visit website
                </Link>
              )}
              {hackathon.discordUrl && (
                <Link
                  href={hackathon.discordUrl}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                >
                  <MessageSquare className="h-4 w-4" /> Join community
                </Link>
              )}
              {hackathon.contactEmail && (
                <a
                  href={`mailto:${hackathon.contactEmail}`}
                  className="flex items-center gap-2 text-sm text-cyan-300 transition hover:text-cyan-200"
                >
                  <CircleDollarSign className="h-4 w-4" /> Contact organizer
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default HackathonSidebar;
