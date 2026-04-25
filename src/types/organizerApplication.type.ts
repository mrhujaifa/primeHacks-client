export const ExpectedHackathonType = {
  ONLINE: "ONLINE",
  OFFLINE: "OFFLINE",
  HYBRID: "HYBRID",
  COLLEGE_COMMUNITY: "COLLEGE_COMMUNITY",
  STARTUP_INDUSTRY: "STARTUP_INDUSTRY",
  OTHER: "OTHER",
};

export type TCreateOrganizerApplicationPayload = {
  organizationName: string;
  websiteUrl?: string;
  contactEmail: string;
  previousExperience?: string;
  reason: string;
  expectedHackathonType?: typeof ExpectedHackathonType;
  agreeToGuidelines: boolean;
};
