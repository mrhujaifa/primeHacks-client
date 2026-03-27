import HackathonDetailsPage from "@/components/modules/Hackathon/Details/HackathonDetailsPage";
import { hackathonKeys } from "@/hooks/hackathon/hackathon.keys";
import { getHackathonByidServerQureryFn } from "@/hooks/hackathon/hackathon.queries";
import { getQueryClient } from "@/lib/Tanstack/queryClient";
import { cookies } from "next/headers";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

const HackathonDeatilsPage = async ({ params }: Props) => {
  const { id } = await params;
  const cookieStore = await cookies();
  const cookie = cookieStore.toString();
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: hackathonKeys.details(id),
    queryFn: async () => {
      return await getHackathonByidServerQureryFn(id, cookie);
    },
  });

  const hackathon = {
    id: "1",
    title: "INITIATE: The Initia Hackathon",
    shortDescription:
      "Build new onchain products, infrastructure, and real-world Web3 experiences on Initia with a premium multi-track hackathon experience.",
    fullDescription:
      "INITIATE brings together builders, researchers, and designers to explore the future of modular appchains, consumer crypto, DeFi tooling, gaming, and infrastructure on Initia. Participants can build solo or as teams and submit polished demos for judging.",
    organizerName: "Initia Labs",
    logoUrl: "/images/initia-logo.png",
    bannerImageUrl: "/images/initia-banner.png",
    location: "Virtual",
    platform: "Initia",
    categories: ["Web3", "DeFi", "Gaming", "Initia", "Blockchain", "Appchain"],
    prizePoolText: "25,000",
    currency: "USD",
    status: "ongoing",
    submissionDeadline: "2026-04-16T04:00:00.000Z",
    startDate: "2026-03-16T17:00:00.000Z",
    endDate: "2026-04-16T04:00:00.000Z",
    registrationStartDate: "2026-03-10T10:00:00.000Z",
    registrationEndDate: "2026-04-14T23:59:00.000Z",
    rules:
      "Projects must be original, built during the hackathon period, and submitted with a live demo, source repository, and clear documentation.",
    eligibility:
      "Open globally to developers, students, founders, and designers. Solo or team participation is allowed.",
    maxTeamSize: 4,
    registrationFee: 0,
    isFeatured: true,
    isPremiumOnly: false,
    websiteUrl: "https://example.com",
    discordUrl: "https://discord.gg/example",
    contactEmail: "organizer@example.com",
  };
  return (
    <div>
      <HackathonDetailsPage hackathon={hackathon} />
    </div>
  );
};

export default HackathonDeatilsPage;
