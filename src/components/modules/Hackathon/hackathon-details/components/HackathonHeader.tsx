import { Globe, MapPin, Trophy } from "lucide-react";
import { SharedProps } from "../HackathonDetailsPage";
import HackathonTag from "../../all-hackathons/HackathonTag";

const HackathonHeader = ({ hackathon }: SharedProps) => {
  const prizeText = hackathon.prizePoolText || hackathon.prizePool || "TBA";
  const prizeCurrency = hackathon.currency || "USD";
  const tagList = hackathon.categories || [];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="max-w-4xl text-3xl font-bold tracking-tight text-foreground md:text-4xl xl:text-[2.65rem] xl:leading-[1.1]">
          {hackathon.title}
        </h1>
        <p className="mt-4 max-w-4xl text-sm leading-7 text-muted md:text-base">
          {hackathon.shortDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {tagList.map((tag, index) => (
            <HackathonTag key={`${tag}-${index}`} label={tag} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card-theme rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-primary/15 bg-primary/10 p-2 text-primary">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Location
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {hackathon.location || "Virtual"}
              </p>
            </div>
          </div>
        </div>

        <div className="card-theme rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-hero-secondary/15 bg-hero-secondary/10 p-2 text-hero-secondary">
              <Globe className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Ecosystem
              </p>
              <p className="mt-1 text-sm font-medium text-foreground">
                {hackathon.platform || "Not specified"}
              </p>
            </div>
          </div>
        </div>

        <div className="card-theme rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-xl border border-success/15 bg-success/10 p-2 text-success">
              <Trophy className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Prize Pool
              </p>
              <p className="mt-1 text-sm font-semibold text-foreground">
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
