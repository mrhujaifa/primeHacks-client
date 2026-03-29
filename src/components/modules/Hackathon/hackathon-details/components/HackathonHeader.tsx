import { Globe, MapPin, Trophy } from "lucide-react";
import { SharedProps } from "../HackathonDetailsPage";

const HackathonHeader = ({ hackathon }: SharedProps) => {
  const prizeText = hackathon.prizePoolText || hackathon.prizePool || "TBA";
  const prizeCurrency = hackathon.currency || "USD";
  const tagList = hackathon.categories || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-white md:text-4xl xl:text-[2.65rem] xl:leading-[1.1]">
          {hackathon.title}
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-slate-300 md:text-base">
          {hackathon.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tagList.map((tag, index) => (
            <span
              key={`${tag}-${index}`}
              className="inline-flex items-center rounded-full border border-orange-400/15 bg-orange-400/10 px-3 py-1 text-xs font-medium text-orange-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/10 p-2 text-cyan-300">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {hackathon.location || "Virtual"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-orange-400/15 bg-orange-400/10 p-2 text-orange-300">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Ecosystem
              </p>
              <p className="mt-1 text-sm font-medium text-white">
                {hackathon.platform || "Not specified"}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/10 p-2 text-emerald-300">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                Prize Pool
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                {prizeText} {prizeCurrency}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonHeader;
