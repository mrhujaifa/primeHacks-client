import { IMySubmission } from "@/types/submission.type";
import {
  CalendarDays,
  ExternalLink,
  FileCode2,
  FolderGit2,
  Image as ImageIcon,
  Pencil,
  PlayCircle,
  Trash2,
  Trophy,
  Clock3,
} from "lucide-react";

type SubmissionCardProps = {
  submission: IMySubmission;
  onUpdate?: (submission: IMySubmission) => void;
  onDelete?: (submission: IMySubmission) => void;
};

const getStatusClasses = (status: IMySubmission["status"]) => {
  switch (status) {
    case "ACCEPTED":
      return "border-emerald-400/20 bg-emerald-400/10 text-emerald-300";
    case "REJECTED":
      return "border-rose-400/20 bg-rose-400/10 text-rose-300";
    case "PENDING":
      return "border-amber-400/20 bg-amber-400/10 text-amber-300";
    case "DRAFT":
      return "border-slate-400/20 bg-slate-400/10 text-slate-300";
    default:
      return "border-cyan-400/20 bg-cyan-400/10 text-cyan-300";
  }
};

const formatDate = (date: string | null) => {
  if (!date) return "Not submitted yet";
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const SubmissionCard = ({
  submission,
  onUpdate,
  onDelete,
}: SubmissionCardProps) => {
  const {
    title,
    shortSummary,
    description,
    techStack,
    repositoryUrl,
    demoUrl,
    videoUrl,
    thumbnailUrl,
    status,
    createdAt,
    submittedAt,
    hackathon,
  } = submission;

  const hasLinks = repositoryUrl || demoUrl || videoUrl;

  return (
    <article className="group overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/70 shadow-[0_0_50px_rgba(8,145,178,0.08)] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
      <div className="relative">
        {thumbnailUrl ? (
          <div
            className="h-56 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${thumbnailUrl})` }}
          />
        ) : hackathon.bannerImageUrl ? (
          <div
            className="h-56 w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${hackathon.bannerImageUrl})` }}
          />
        ) : (
          <div className="flex h-56 items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_45%),linear-gradient(135deg,_rgba(15,23,42,1),_rgba(2,6,23,1))]">
            <div className="flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <ImageIcon className="h-4 w-4" />
              No Thumbnail
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-transparent" />

        <div className="absolute left-5 top-5">
          <span
            className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${getStatusClasses(
              status,
            )}`}
          >
            {status}
          </span>
        </div>

        <div className="absolute right-5 top-5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onUpdate?.(submission)}
            className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/20 bg-slate-950/70 px-3 py-2 text-xs font-medium text-cyan-200 backdrop-blur-md transition hover:border-cyan-400/40 hover:bg-cyan-400/10"
          >
            <Pencil className="h-4 w-4" />
            Update
          </button>

          <button
            type="button"
            onClick={() => onDelete?.(submission)}
            className="inline-flex items-center gap-2 rounded-xl border border-rose-400/20 bg-slate-950/70 px-3 py-2 text-xs font-medium text-rose-200 backdrop-blur-md transition hover:border-rose-400/40 hover:bg-rose-400/10"
          >
            <Trash2 className="h-4 w-4" />
            Delete
          </button>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <h2 className="truncate text-xl font-semibold text-white">
                {title || "Untitled Submission"}
              </h2>
              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-300">
                {shortSummary || "No short summary added yet."}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Trophy className="h-3.5 w-3.5 text-cyan-300" />
              {hackathon.title}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <CalendarDays className="h-3.5 w-3.5 text-cyan-300" />
              Created {formatDate(createdAt)}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <Clock3 className="h-3.5 w-3.5 text-cyan-300" />
              Submitted {formatDate(submittedAt)}
            </span>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <h3 className="mb-2 text-sm font-semibold text-slate-200">
            Description
          </h3>
          <p className="line-clamp-4 text-sm leading-6 text-slate-400">
            {description || "No description added yet."}
          </p>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2 text-slate-200">
            <FileCode2 className="h-4 w-4 text-cyan-300" />
            <span className="text-sm font-semibold">Tech Stack</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {techStack?.length > 0 ? (
              techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-200"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-sm text-slate-500">
                No tech stack added
              </span>
            )}
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-4">
          <h3 className="mb-3 text-sm font-semibold text-slate-200">
            Project Resources
          </h3>

          <div className="flex flex-wrap gap-3">
            {repositoryUrl && (
              <a
                href={repositoryUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <FolderGit2 className="h-4 w-4" />
                Repository
              </a>
            )}

            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}

            {videoUrl && (
              <a
                href={videoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/30 hover:text-cyan-200"
              >
                <PlayCircle className="h-4 w-4" />
                Video Demo
              </a>
            )}

            {!hasLinks && (
              <p className="text-sm text-slate-500">No project links added</p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default SubmissionCard;
