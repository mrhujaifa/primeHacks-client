export const hackathonKeys = {
  all: ["hackathons"] as const,
  myHackathons: ["my-hackathons"] as const,
  details: (id: string) => ["hackathons", id] as const,
};
