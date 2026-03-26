export const hackathonKeys = {
  all: ["hackathons"] as const,

  myHackathons: () => ["hackathons", "my-hackathons"] as const,

  details: (id: string) => [...hackathonKeys.all, "detail", id] as const,
  categories: () => ["hackathons", "categories"] as const,

  mutation: {
    update: (id: string) => [...hackathonKeys.all, "update", id] as const,
  },
};
