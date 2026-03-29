import {
  CalendarDays,
  CheckCircle2,
  FileText,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { formatDisplayDate, SharedProps } from "../HackathonDetailsPage";
import DetailBlock from "./DetailsBlock";

const HackathonDetailsContent = ({ hackathon }: SharedProps) => {
  const prizeCurrency = hackathon.currency || "USD";

  return (
    <div className="space-y-6">
      <DetailBlock icon={<Sparkles className="h-4 w-4" />} label="Overview">
        <div className="space-y-4">
          <p className="text-sm leading-7 text-slate-300 md:text-[15px]">
            {hackathon.fullDescription ||
              "Build, collaborate, and launch innovative solutions with a production-grade hackathon workflow. This event page is designed to help participants clearly understand the scope, rewards, timeline, and submission process."}
          </p>
        </div>
      </DetailBlock>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <DetailBlock
          icon={<CalendarDays className="h-4 w-4" />}
          label="Timeline"
        >
          <div className="space-y-3">
            {[
              {
                label: "Registration Start",
                value: formatDisplayDate(hackathon.registrationStartDate),
              },
              {
                label: "Registration End",
                value: formatDisplayDate(hackathon.registrationEndDate),
              },
              {
                label: "Hackathon Start",
                value: formatDisplayDate(hackathon.startDate),
              },
              {
                label: "Hackathon End",
                value: formatDisplayDate(hackathon.endDate),
              },
              {
                label: "Submission Deadline",
                value: formatDisplayDate(hackathon.submissionDeadline),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-3 border-b border-white/6 pb-3 last:border-none last:pb-0"
              >
                <p className="text-sm text-slate-400">{item.label}</p>
                <p className="text-right text-sm font-medium text-white">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </DetailBlock>

        <DetailBlock icon={<Users className="h-4 w-4" />} label="Participation">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3 border-b border-white/6 pb-3">
              <p className="text-sm text-slate-400">Team Size</p>
              <p className="text-sm font-medium text-white">
                {hackathon.maxTeamSize
                  ? `Up to ${hackathon.maxTeamSize} members`
                  : "Flexible"}
              </p>
            </div>
            <div className="flex items-center justify-between gap-3 border-b border-white/6 pb-3">
              <p className="text-sm text-slate-400">Registration Fee</p>
              <p className="text-sm font-medium text-white">
                {hackathon.registrationFee ?? 0} {prizeCurrency}
              </p>
            </div>
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm text-slate-400">Format</p>
              <p className="text-sm font-medium text-white">
                {hackathon.location || "Virtual"}
              </p>
            </div>
          </div>
        </DetailBlock>
      </div>

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <DetailBlock
          icon={<ShieldCheck className="h-4 w-4" />}
          label="Eligibility"
        >
          <p className="text-sm leading-7 text-slate-300">
            {hackathon.eligibility ||
              "Open to students, developers, designers, researchers, and builders who want to ship practical solutions. Both solo and team participation can be supported depending on organizer rules."}
          </p>
        </DetailBlock>

        <DetailBlock icon label="Rules & Guidelines">
          <p className="text-sm leading-7 text-slate-300">
            {hackathon.rules ||
              "Projects should be original, submitted within the deadline, and aligned with the hackathon scope. Teams should respect platform rules, judging fairness, and organizer communication guidelines."}
          </p>
        </DetailBlock>
      </div>

      <DetailBlock
        icon={<FileText className="h-4 w-4" />}
        label="Submission Requirements"
      >
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            "Project title and short summary",
            "Live demo or video walkthrough",
            "Source code repository link",
            "Presentation deck or docs",
            "Clear use case and impact explanation",
            "Team information and contact details",
          ].map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-2xl border border-white/8 bg-black/15 p-3"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <p className="text-sm text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </DetailBlock>
    </div>
  );
};

export default HackathonDetailsContent;
