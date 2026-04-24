import { NavSection } from "@/interface/dashboard.interface";
import { getDefaultDashboardRoute, UserRole } from "./utils/authUtils";

export const getCommonNavItems = (role: UserRole): NavSection[] => {
  const defaultDashboard = getDefaultDashboardRoute(role);

  return [
    {
      items: [
        {
          title: "Home",
          href: defaultDashboard,
          icon: "LayoutDashboard",
        },
        {
          title: "Profile Overview",
          href: "/profile",
          icon: "User",
        },
      ],
    },
    {
      title: "Account Settings",
      items: [
        {
          title: "Change Password",
          href: "/change-password",
          icon: "Settings",
        },
      ],
    },
  ];
};

export const userNavItems = (): NavSection[] => [
  {
    title: "User Dashboard",
    items: [
      {
        title: "My Submissions",
        href: "/dashboard/my-submissions",
        icon: "FolderOpenDot",
      },
      {
        title: "Saved Hackathons",
        href: "/dashboard/saved-hackathons",
        icon: "Album",
      },
      {
        title: "Subscription Status",
        href: "/dashboard/subscription-status",
        icon: "BadgeCheck",
      },
    ],
  },
];

export const organizerNavItems = (): NavSection[] => [
  {
    title: "Organizer Dashboard",
    items: [
      {
        title: "My Hackathons",
        href: "/dashboard/organizer/hackathons/my-hackathons",
        icon: "Trophy",
      },
      {
        title: "Create Hackathon",
        href: "/dashboard/organizer/hackathons/create",
        icon: "PlusSquare",
      },
      {
        title: "Hackathon Submissions",
        href: "/dashboard/my-submissions",
        icon: "FileSpreadsheet",
      },
      {
        title: "Manage Rewards",
        href: "/dashboard/organizer/manage-rewards",
        icon: "Gift",
      },

      {
        title: "Winners",
        href: "/dashboard/organizer/winners",
        icon: "Medal",
      },
      {
        title: "Analytics",
        href: "/dashboard/organizer/analytics",
        icon: "BarChart3",
      },
      {
        title: "Hackathon Settings",
        href: "/dashboard/organizer/hackathons/settings",
        icon: "Settings",
      },
    ],
  },
];

export const adminNavItems = (): NavSection[] => [
  {
    title: "Admin Dashboard",
    items: [
      {
        title: "All Users",
        href: "/dashboard/admin/all-users",
        icon: "Users",
      },
      {
        title: "Total Hackathons",
        href: "/dashboard/admin/total-hackathons",
        icon: "Layers3",
      },
      {
        title: "Total Submissions",
        href: "/dashboard/admin/total-submissions",
        icon: "FileText",
      },
      {
        title: "Pending Submissions",
        href: "/dashboard/admin/pending-submissions",
        icon: "Clock3",
      },
      {
        title: "Revenue Overview",
        href: "/dashboard/admin/revenue-overview",
        icon: "Wallet",
      },
    ],
  },
];

export const getNavbarItemsByRole = (role: UserRole) => {
  const commonNavItems = getCommonNavItems(role);

  switch (role) {
    case "ADMIN":
      return [...commonNavItems, ...adminNavItems()];

    case "ORGANIZER":
      return [...commonNavItems, ...organizerNavItems()];

    case "USER":
      return [...commonNavItems, ...userNavItems()];
  }
};
