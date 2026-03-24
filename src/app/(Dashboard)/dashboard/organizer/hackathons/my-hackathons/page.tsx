import MyHackathonsPage from "@/components/modules/Hackathon/myHackathons";
import { HackathonServices } from "@/services/hackathon.service";
import { cookies } from "next/headers";

const MyHackathonPage = async () => {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const res = await HackathonServices.getOwnHackathons(cookieHeader);
  const data = res.data ?? [];

  return (
    <div>
      <MyHackathonsPage hackathons={data} />
    </div>
  );
};

export default MyHackathonPage;
