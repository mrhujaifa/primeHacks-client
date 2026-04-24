import { THackathonCardItem } from "@/services/hackathon.service";
import HackathonCard from "./HackathonCard";

export default function HackathonGrid({
  data,
}: {
  data: THackathonCardItem[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 lg:gap-3 md:grid-cols-2 lg:grid-cols-4">
      {data.map((hackathon) => (
        <HackathonCard key={hackathon.id} hackathon={hackathon} />
      ))}
    </div>
  );
}
