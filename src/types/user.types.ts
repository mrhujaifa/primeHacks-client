import { UserRole } from "@/lib/utils/authUtils";

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export interface UserInformation {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  role: "ORGANIZER" | "USER" | "ADMIN" | string;
  status: "ACTIVE" | "INACTIVE" | string;
  isPremium: boolean;
  premiumPlan: "MONTHLY" | "ANNUALLY" | string | null;
  premiumExpiresAt: string; // ISO 8601 Date string
  createdAt: string; // ISO 8601 Date string
  updatedAt: string; // ISO 8601 Date string
}
