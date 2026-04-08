import { NavSection } from "@/interface/dashboard.interface";
import { getNavbarItemsByRole } from "@/lib/navItems";
import { getDefaultDashboardRoute } from "@/lib/utils/authUtils";
import { getUserInfo } from "@/services/auth.service";
import { redirect } from "next/navigation";
import DashboardSidebarContent from "./DashboardSidebarContent";

const DashboardSidebar = async () => {
  const userInfo = await getUserInfo();

  if (!userInfo) {
    redirect("/login");
  }

  const navItems: NavSection[] = getNavbarItemsByRole(userInfo.role);

  const dashboardHome = getDefaultDashboardRoute(userInfo.role);

  return (
    <div>
      <DashboardSidebarContent
        dashboardHome={dashboardHome}
        navItems={navItems}
      />
    </div>
  );
};

export default DashboardSidebar;
