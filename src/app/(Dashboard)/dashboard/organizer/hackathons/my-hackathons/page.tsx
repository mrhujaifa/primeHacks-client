import MyHackathonsPage from "@/components/modules/Hackathon/myHackathons";
import { HackathonServices } from "@/services/hackathon.service";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

type BackendHackathon = {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bannerImageUrl: string | null;
  logoUrl: string | null;
  websiteUrl: string | null;
  discordUrl: string | null;
  contactEmail: string | null;
  rules: string | null;
  eligibility: string | null;
  prizePoolText: string | null;
  registrationFee: string;
  currency: string;
  maxTeamSize: number | null;
  registrationStartDate: string | null;
  registrationEndDate: string | null;
  startDate: string | null;
  endDate: string | null;
  submissionDeadline: string | null;
  status: "ONGOING" | "DRAFT" | "UPCOMING" | "COMPLETED";
  isFeatured: boolean;
  isPremiumOnly: boolean;
  createdAt: string;
  updatedAt: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
};

const MyHackathonPage = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await HackathonServices.getOwnHackathons(cookieHeader);

  const data: BackendHackathon[] = Array.isArray(res?.data) ? res.data : [];

  return (
    <div>
      <MyHackathonsPage hackathons={data} />
    </div>
  );
};

export default MyHackathonPage;
