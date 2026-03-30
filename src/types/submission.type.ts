export interface ICreateSubmissionPayload {
  title: string;
  shortSummary: string;
  description: string;
  techStack: string[];
  repositoryUrl: string;
  demoUrl: string;
  videoUrl: string;
  thumbnailUrl: string;
}

export interface IMySubmission {
  id: string;
  title: string;
  shortSummary: string;
  description: string;
  techStack: string[];
  repositoryUrl: string | null;
  demoUrl: string | null;
  videoUrl: string | null;
  thumbnailUrl: string | null;
  status: "DRAFT" | "ACCEPTED" | "REJECTED" | "PENDING";
  submittedAt: string | null;
  createdAt: string;
  updatedAt: string;
  hackathon: {
    id: string;
    title: string;
    submissionDeadline: string;
    bannerImageUrl: string | null;
  };
  user: {
    email: string;
    name: string;
    role: "USER" | "ORGANIZER" | "ADMIN";
    image: string | null;
  };
}
