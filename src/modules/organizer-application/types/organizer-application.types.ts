export type TOrganizerApplicationStatus = "PENDING" | "APPROVED" | "REJECTED";

export type TUserRole = "USER" | "ORGANIZER" | "ADMIN";

export type TUserStatus = "ACTIVE" | "BLOCKED" | "DELETED";

export type THackathonType = "ONLINE" | "OFFLINE" | "HYBRID";

export type TOrganizerApplicationUser = {
  id: string;
  name: string;
  email: string;
  role: TUserRole;
  status: TUserStatus;
  organizerApplicationStatus: TOrganizerApplicationStatus;
};

export type TOrganizerApplication = {
  id: string;
  organizationName: string;
  websiteUrl: string | null;
  contactEmail: string;
  previousExperience: string;
  reason: string;
  expectedHackathonType: THackathonType;
  agreeToGuidelines: boolean;
  rejectionReason: string | null;
  reviewedAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TMyOrganizerApplicationResponse = {
  user: TOrganizerApplicationUser;
  application: TOrganizerApplication;
};
