export type HackathonStatus =
  | "ONGOING"
  | "DRAFT"
  | "UPCOMING"
  | "COMPLETED"
  | "ACTIVE"
  | "ENDED";

export interface ICreateHackathonPayload {
  title: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;

  logoUrl?: string;
  bannerImageUrl?: string;
  websiteUrl?: string;
  discordUrl?: string;
  contactEmail?: string;

  rules?: string;
  eligibility?: string;

  prizePoolText?: string;
  registrationFee?: string | number;
  currency?: string;

  maxTeamSize?: number;

  registrationStartDate?: string | Date;
  registrationEndDate?: string | Date;
  startDate?: string | Date;
  endDate?: string | Date;
  submissionDeadline: string;

  status?: HackathonStatus;
  isFeatured?: boolean;
  isPremiumOnly?: boolean;

  categoryId: string;
  organizerId: string;
}

export interface IUpdateHackathonPayload {
  title?: string;
  slug?: string;
  shortDescription?: string;
  fullDescription?: string;

  logoUrl?: string | null;
  bannerImageUrl?: string | null;
  websiteUrl?: string | null;
  discordUrl?: string | null;
  contactEmail?: string | null;

  rules?: string | null;
  eligibility?: string | null;

  prizePoolText?: string | null;
  registrationFee?: string | number;
  currency?: string;

  maxTeamSize?: number | null;

  registrationStartDate?: string | Date | null;
  registrationEndDate?: string | Date | null;
  startDate?: string | Date | null;
  endDate?: string | Date | null;
  submissionDeadline?: string | Date;

  status?: HackathonStatus;
  isFeatured?: boolean;
  isPremiumOnly?: boolean;

  categoryId?: string;
  organizerId?: string;
}

export type BackendHackathon = {
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
  status: HackathonStatus;
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

export type THackathonFormValues = {
  title: string;
  shortDescription: string;
  fullDescription: string;

  logoUrl?: string;
  bannerImageUrl?: string;
  websiteUrl?: string;
  discordUrl?: string;
  contactEmail?: string;

  rules?: string;
  eligibility?: string;

  prizePoolText?: string;
  registrationFee?: number;
  currency?: string;

  maxTeamSize?: number;

  registrationStartDate?: string;
  registrationEndDate?: string;
  startDate?: string;
  endDate?: string;
  submissionDeadline: string;

  status?: HackathonStatus;
  isFeatured?: boolean;
  isPremiumOnly?: boolean;

  categoryId?: string;
};
